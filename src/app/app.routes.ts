import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async () => {
      return import('./home/home').then(
        (module) => module.Home
      )
    },
  },
  {
    path: 'todos',
    pathMatch: "full",
    loadComponent: async () => {
      const module = await import('./todos/todos');
      return module.Todos;
    },
  },
];
