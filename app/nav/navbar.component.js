"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var auth_services_1 = require("../users/auth.services");
var index_1 = require("../events/index");
var router_1 = require("@angular/router");
var NavBarComponent = (function () {
    function NavBarComponent(authService, eventService, route) {
        this.authService = authService;
        this.eventService = eventService;
        this.route = route;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.events = this.route.snapshot.data['events'];
        this.eventService.getEvents().subscribe(function (events) { _this.events = events; });
    };
    NavBarComponent.prototype.searchSessions = function (searchTerm) {
        var _this = this;
        this.eventService.searchSession(searchTerm).subscribe(function (sessions) { _this.foundSessions = sessions; });
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: 'nav-bar',
        templateUrl: 'app/nav/navbar.component.html',
        styles: ["\n        .nav.navbar-nav {font-size: 15px}\n        #searchForm {margin-right: 100px}\n        @media (max-width: 1200px) { #searchForm {display:none }}\n        li > a.active {color: orange;}\n    "],
    }),
    __metadata("design:paramtypes", [auth_services_1.AuthServices, index_1.EventService, router_1.ActivatedRoute])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map