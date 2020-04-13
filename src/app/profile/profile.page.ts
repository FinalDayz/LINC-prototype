import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import {UserModel} from "../models/UserModel";

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

  constructor(private http: HTTP) { }

  ngOnInit() {
    this.http.get('http://192.168.178.21:9000/profile/user/1', {}, {})
        .then(response => {
          this.user = response.data;
          this.isLoaded = true;
        })
        .catch(error => {
          console.log(error);
        });
  }

  toggleEdit() {
    this.edit = !this.edit;
    if(this.edit) {
      this.icon = "save"
    } else {
      this.icon = "pencil"
    }
  }
}
