import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    edit = false;
    icon = "pencil";

  constructor() { }

  ngOnInit() {
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
