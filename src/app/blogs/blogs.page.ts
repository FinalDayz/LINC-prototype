import { Component, OnInit } from '@angular/core';
import {PopoverController} from "@ionic/angular";
import {PopoverComponent} from "../popover/popover.component";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {

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
