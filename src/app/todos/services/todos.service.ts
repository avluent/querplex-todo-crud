import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { TodoInterface } from '../types/todo.interface';
import axios, { AxiosResponse } from 'axios'

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  allTodos$ = new BehaviorSubject<TodoInterface[]>([]);

  generateRandomId(): string {
      return Math.random().toString(16).split('.').pop() || "random_id"
  }

  addTodo(description: string): void {
    let newTodo: TodoInterface = {
      id: this.generateRandomId(),
      description: description,
      isDone: false
    }

    this.allTodos$.next(
      this.allTodos$.getValue().concat([newTodo]) 
    )
  }

  async getTodosFromApi() {

    let url = 'http://localhost:8000/api/todos'
    let user = 'querplex'
    let password = 'passwort'

    await axios.get(
      url, {
        auth: {
          username: user,
          password: password
        },
      }
    )
    .then(res => {
      this.allTodos$.getValue().concat([res.data])
    })
    .catch(error => console.error(error))

  }
}
