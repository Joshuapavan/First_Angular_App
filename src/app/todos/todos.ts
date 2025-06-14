import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoService } from '../services/todos';
import { Todo } from '../model/todo.types';
import { catchError } from 'rxjs';
import { TodoItems } from '../components/todo-items/todo-items';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItems, FormsModule , FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {

  // dependency injection
  todoService = inject(TodoService);

  todoList = signal<Array<Todo>>([]);

  searchTerm = signal<string>("")

  ngOnInit(): void {
    this.todoService.getTodosFromApi()
                    .pipe(
                      catchError((err) => {
                        console.log(err);
                        throw err;
                      })
                    )
                    .subscribe((todos) => {
                      this.todoList.set(todos)
                    });
  }

  updateTodoItem(todoItem: Todo){
    this.todoList.update((todos) => {
      return todos.map(todo => {
        if(todo.id === todoItem.id){
          return {
            ... todo,
            completed: !todo.completed
          }
        }
        return todo;
      }
    )
    })
  }
}
