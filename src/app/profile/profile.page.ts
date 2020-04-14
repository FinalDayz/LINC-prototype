import {Component, OnInit} from '@angular/core';

import {UserModel} from "../models/UserModel";
import {HttpClient} from "@angular/common/http";
import {HTTP} from "@ionic-native/http/ngx";
import {Platform} from "@ionic/angular";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    edit = false;
    icon = "pencil";
    isLoaded = false;
    user: UserModel;
    ip = "";

    constructor(private http: HttpClient,
                private nativeHttp: HTTP,
                private platform: Platform) {
       this.ip =  platform.is('mobileweb') || platform.is('desktop')
           ? 'localhost' : '10.0.2.2';
       document
    }

    ngOnInit() {
        // this.nativeHttp.get('http://10.0.2.2:9000/profile/user/1', {}, {}).then(response => {
        //     console.log(response);
        //     this.user = response.data;
        //     this.isLoaded = true;
        // }).catch(error => {
        //
        // });
        this.http.get<UserModel>('http://'+this.ip+':9000/profile/user/1')
            .subscribe(response => {
                    this.user = response;
                    this.isLoaded = true;
                }
            );
    }

    toggleEdit() {
        this.edit = !this.edit;
        if (this.edit) {
            this.icon = "save"
        } else {
            this.sendData();

        }
    }

    sendData() {
        this.http.put<UserModel>('http://'+this.ip+':9000/profile/user/1', this.user)
            .subscribe(response => {
                this.icon = "pencil"
                }
            );
    }
}
