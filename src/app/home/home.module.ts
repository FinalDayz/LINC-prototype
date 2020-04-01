import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import {RouterModule} from "@angular/router";
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";
import {PopoverComponent} from "../popover/popover.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  entryComponents: [],
  declarations: [HomePage]
})
export class HomePageModule {}
