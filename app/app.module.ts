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
    DurationPipe,
    UpvoteComponent,
    VoterService,
    LocationValidator} from './events/index'
import {EventsAppComponent} from "./events-app.component";
import {NavBarComponent} from "./nav/navbar.component";
import {Toastr, TOASTR_TOKEN} from "./common/toastr.services";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {Error404Component} from "./errors/404.componetn";
import {AuthServices} from "./users/auth.services";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CollapsibleWellComponent} from "./common/collapsible-well.component";
import {JQUERY_TOKEN} from "./common/jQuery.service";
import {SimpleModalComponent} from "./common/simpleModal.component";
import {ModalTriggerDirective} from "./common/modal-trigger.directive";

declare let toastr:Toastr

declare let jQuery:Object;

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
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidator
    ],
    providers:[
        EventService,
        EventRouteActivator,
        EventsListResolver,
        AuthServices,
        VoterService,
        LocationValidator,
        {
            provide:'canDeactivateCreateEvent', useValue:checkDirtyState
        },
        {
            provide: TOASTR_TOKEN, useValue: toastr
        },
        {
            provide: JQUERY_TOKEN, useValue: jQuery
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

