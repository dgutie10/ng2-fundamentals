import {Component, Inject} from "@angular/core";
import {AuthServices} from "./auth.services";
import {Router} from "@angular/router";
import {Toastr, TOASTR_TOKEN} from "../common/toastr.services";

@Component ({
    templateUrl: "app/users/login.component.html",
    styles:[`
        em {float:right; color:#E05C65; padding-left:10px;}
    `]

})

export class LoginComponent{
    loginInvalid = false;

    constructor (private authService:AuthServices, private router:Router, @Inject(TOASTR_TOKEN) private toastr:Toastr){}
    login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password).subscribe(resp => {
            if(!resp) {
                this.loginInvalid = true;
            } else {
                this.router.navigate(['events'])
            }
        })

    }

    cancel(){
        this.router.navigate(['events'])
    }



}