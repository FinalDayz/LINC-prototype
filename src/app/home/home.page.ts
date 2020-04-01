import { Component, OnInit } from '@angular/core';
import {PopoverController} from "@ionic/angular";
import {PopoverComponent} from "../popover/popover.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  filters = ["Lugus", "Start-ups", "Nieuws"];

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
