import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {
    EventThumbnailComponent,
    EventsListComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventsListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe} from './events/index'
import {EventsAppComponent} from "./events-app.component";
import {NavBarComponent} from "./nav/navbar.component";
import {Toastr, TOASTR_TOKEN} from "./common/toastr.services";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {Error404Component} from "./errors/404.componetn";
import {AuthServices} from "./users/auth.services";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CollapsibleWellComponent} from "./common/collapsible-well.component";

declare let toastr:Toastr

@NgModule ({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations : [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe
    ],
    providers:[
        EventService,
        EventRouteActivator,
        EventsListResolver,
        AuthServices,
        {
            provide:'canDeactivateCreateEvent', useValue:checkDirtyState
        },
        {
            provide: TOASTR_TOKEN, useValue: toastr
        }

    ],
    bootstrap: [EventsAppComponent]

})

export class  AppModule{}

function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty){
        return  window.confirm('You have not save this event. Do you want to cancel?')
    }
    return true
}

