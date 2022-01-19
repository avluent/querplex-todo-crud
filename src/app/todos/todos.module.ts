import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './components/todos/todos.component';
import { TodosHeaderComponent } from './components/todos-header/todos-header.component';



@NgModule({
  declarations: [
    TodosComponent,
    TodosHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
