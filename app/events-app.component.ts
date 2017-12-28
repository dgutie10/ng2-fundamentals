import {Component, OnInit} from "@angular/core";
import {AuthServices} from "./users/auth.services";

@Component({
    selector: 'events-app',
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `
})

export class EventsAppComponent implements OnInit{
    constructor (private authService: AuthServices){}

    ngOnInit(){
        this.authService.checkAuthenticationStatus();
    }


}