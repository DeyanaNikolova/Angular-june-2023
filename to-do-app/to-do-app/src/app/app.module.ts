import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { HeaderComponent } from './header/header.component';
import { PopupComponent } from './todos/popup/popup.component';
import { TodoCardComponent } from './todos/todo-card/todo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HeaderComponent, 
    PopupComponent, TodoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
