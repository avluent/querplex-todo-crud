import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './components/todos/todos.component';
import { TodosHeaderComponent } from './components/todos-header/todos-header.component';
import { TodosBodyComponent } from './components/todos-body/todos-body.component';
import { TodoComponent } from './components/todo/todo.component';



@NgModule({
  declarations: [
    TodosComponent,
    TodosHeaderComponent,
    TodosBodyComponent,
    TodoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
