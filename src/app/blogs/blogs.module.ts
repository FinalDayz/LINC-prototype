import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogsPage } from './blogs.page';
import {RouterModule} from "@angular/router";
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: BlogsPage }])
  ],
  declarations: [BlogsPage]
})
export class BlogsPageModule {}
