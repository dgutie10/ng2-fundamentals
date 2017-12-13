import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {NavBarComponent} from "./nav/navbar.component";
import {EventService} from "./events/Shared/event.service";
import {ToastrServices} from "../common/toastr.services";



@NgModule ({
    imports: [BrowserModule],
    declarations : [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent
    ],
    providers:[
        EventService,
        ToastrServices
    ],
    bootstrap: [EventsAppComponent]

})

export class  AppModule{}