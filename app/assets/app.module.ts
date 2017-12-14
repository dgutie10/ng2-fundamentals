import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {
    EventThumbnailComponent,
    EventsListComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventsListResolver} from './events/index'
import {EventsAppComponent} from "./events-app.component";
import {NavBarComponent} from "./nav/navbar.component";
import {ToastrServices} from "../common/toastr.services";
import {RouterModule} from "@angular/router";
import {appRoutes} from "../routes";
import {Error404Component} from "../errors/404.componetn";



@NgModule ({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations : [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers:[
        EventService,
        ToastrServices,
        EventRouteActivator,
        EventsListResolver,
        {
            provide:'canDeactivateCreateEvent', useValue:checkDirtyState
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

