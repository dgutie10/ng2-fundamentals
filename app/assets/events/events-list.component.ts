import { Component, OnInit} from "@angular/core";
import {EventService} from "./Shared/event.service";
import {ToastrServices} from "../../common/toastr.services";
import {ActivatedRoute} from "@angular/router";

@Component({
    template: `
        <div>
            <h1>Upcoming  Angular 2 Events</h1>
            <hr>
            <div class="row">
                <div class="col-md-5" *ngFor="let event of events" >
                    <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event" ></event-thumbnail>
                </div>
            </div>
        </div>
    `,
})


export class EventsListComponent implements OnInit{
    events:any

    constructor (private  eventService:EventService, private toastr:ToastrServices, private route:ActivatedRoute){}

    ngOnInit(){
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName){
        this.toastr.success(eventName);
    }
}