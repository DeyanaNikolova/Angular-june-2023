import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { PopupComponent } from './todos/popup/popup.component';
import { TodCardComponent } from './todos/tod-card/tod-card.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    PopupComponent,
    TodCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
