import { Component, OnInit } from '@angular/core';
import {PopoverController} from "@ionic/angular";
import {PopoverComponent} from "../popover/popover.component";

@Component({
  selector: 'app-start-ups',
  templateUrl: './start-ups.page.html',
  styleUrls: ['./start-ups.page.scss'],
})
export class StartUpsPage implements OnInit {

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
