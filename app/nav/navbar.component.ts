import {Component} from "@angular/core";
import {AuthServices} from "../users/auth.services";

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
    constructor (private authService:AuthServices){}
}