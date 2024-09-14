import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Products, Product } from '../../types';
import { ProductComponent } from "../components/product/product.component";
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}

  products: Product[] = [];

  
  onProductOutput(product: Product){
    console.log(product, 'Output');  
  }

  ngOnInit(): void {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 })
      .subscribe((products: Products) => {
        this.products = products.items;
        console.log(products.items);
        
      });
  } 
}
