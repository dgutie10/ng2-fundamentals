import { Routes } from "@angular/router";
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventsListResolver} from './assets/events/index'
import {Error404Component} from "./errors/404.componetn";

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve:{events:EventsListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator]},
    {path:'404', component:Error404Component},
    {path:'', redirectTo:'/events', pathMatch: 'full'},
    {path:'user', loadChildren:'app/assets/users/user.module#UserModule'}


]