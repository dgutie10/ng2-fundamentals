"use strict";
var index_1 = require("./events/index");
var _404_componetn_1 = require("./errors/404.componetn");
exports.appRoutes = [
    { path: 'events/new', component: index_1.CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: index_1.EventsListComponent, resolve: { events: index_1.EventsListResolver } },
    { path: 'events/:id', component: index_1.EventDetailsComponent, resolve: { event: index_1.EventResolver } },
    { path: '404', component: _404_componetn_1.Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/users/user.module#UserModule' },
    { path: 'events/session/new', component: index_1.CreateSessionComponent }
];
//# sourceMappingURL=routes.js.map