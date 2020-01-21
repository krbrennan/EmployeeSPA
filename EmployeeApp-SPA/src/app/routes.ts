import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';

// each route is an object
export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'lists', component: ListsComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
]