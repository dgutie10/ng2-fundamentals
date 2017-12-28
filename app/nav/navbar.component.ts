import {Component, OnInit} from "@angular/core";
import {AuthServices} from "../users/auth.services";
import {EventService, ISession} from "../events/index";
import {IEvent} from "../events/Shared";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles:[`
        .nav.navbar-nav {font-size: 15px}
        #searchForm {margin-right: 100px}
        @media (max-width: 1200px) { #searchForm {display:none }}
        li > a.active {color: orange;}
    `], 
    

})

export class NavBarComponent implements  OnInit{
    searchTerm: string
    foundSessions: ISession []
    events: IEvent[]

    constructor (private authService:AuthServices, private eventService:EventService, private route:ActivatedRoute){}

    ngOnInit(){
        // this.events = this.route.snapshot.data['events'];
        this.eventService.getEvents().subscribe(events => {this.events = events});
        console.log(this.events);
    }

    searchSessions(searchTerm){
        this.eventService.searchSession(searchTerm).subscribe(sessions => {this.foundSessions = sessions});
    }
}