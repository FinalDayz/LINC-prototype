import { Component, OnInit } from '@angular/core';
import {PopoverComponent} from "../popover/popover.component";
import {PopoverController} from "@ionic/angular";

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  filters = ["Informatica", "Bio-wetenschap", "Rechten"];

  constructor(public popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      animated: true,
      showBackdrop: true,
      componentProps: {filters: this.filters}
    });

    return await popover.present();
  }

  ngOnInit() {
  }

}
