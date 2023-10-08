import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/Theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  themesList: Theme[] = [];
  
  constructor(private apiService: ApiService){}

  ngOnInit(){
    
    this.apiService.getThemes().subscribe(themes=>{
    this.themesList = themes;
    });
  }
}
