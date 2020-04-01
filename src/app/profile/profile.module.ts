import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ProfilePage}])
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}