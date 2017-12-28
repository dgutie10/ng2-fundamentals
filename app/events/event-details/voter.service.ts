import {Injectable} from "@angular/core";
import {ISession} from "../Shared/event.model";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()

export class VoterService{

    constructor(private http:Http){}

    deleteVoter(eventId:number, session:ISession, voterName:string){
        session.voters = session.voters.filter(voter => voter !== voterName);

        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this.http.delete(url).catch(this.handelError).subscribe();
    }

    addVoter(eventId:number, session:ISession, voterName:string){
        session.voters.push(voterName);

        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});

        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this.http.post(url, JSON.stringify({}), options).map((response:Response)=>{}).catch(this.handelError).subscribe();


    }

    userHasVoted(session:ISession, voterName:string){
        return session.voters.some(voter => voter === voterName);
    }

    private handelError(error:Response){
        return Observable.throw(error.statusText);
    }
}