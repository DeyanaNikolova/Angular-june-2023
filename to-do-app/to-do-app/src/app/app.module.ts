import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { PopupComponent } from './todos/popup/popup.component';
import { TodCardComponent } from './todos/tod-card/tod-card.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    TodoListComponent,
    PopupComponent,
    TodCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
