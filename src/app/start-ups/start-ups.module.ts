import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartUpsPage } from './start-ups.page';
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: StartUpsPage }])
  ],
  declarations: [StartUpsPage]
})
export class StartUpsPageModule {}
