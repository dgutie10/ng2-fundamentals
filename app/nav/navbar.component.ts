import {Component} from "@angular/core";
import {AuthServices} from "../users/auth.services";
import {EventService, ISession} from "../events/index";

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

export class NavBarComponent{
    searchTerm: string
    foundSessions: ISession []

    constructor (private authService:AuthServices, private eventService:EventService){}

    searchSessions(searchTerm){
        this.eventService.searchSession(searchTerm).subscribe(sessions => {this.foundSessions = sessions});
    }
}