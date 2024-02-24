import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './interfaces/Theme';
import { Post } from './interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTheme(id: string){
    const { apiUrl } = environment;
   return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }

  getThemes(){
    const { apiUrl } = environment;
   return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getPosts(limit?: number){
    const { apiUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Post[]>(`${apiUrl}/posts${limitFilter}`);
  }
}
