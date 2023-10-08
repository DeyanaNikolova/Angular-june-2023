import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes(){
    this.http.get('https://localhost:3000/api/themes')
  }

  getPosts(){
    this.http.get('https://localhost:3000/api/posts')
  }
}
