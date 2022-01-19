import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-body',
  templateUrl: './todos-body.component.html',
  styleUrls: ['./todos-body.component.css']
})
export class TodosBodyComponent implements OnInit {

  constructor(todosService: TodosService) { 
    todosService.getTodosFromApi()
  }

  ngOnInit(): void {
  }

}
