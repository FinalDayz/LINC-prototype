import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'blogs',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../blogs/blogs.module').then(m => m.BlogsPageModule)
          }
        ]
      },
      {
        path: 'start-ups',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../start-ups/start-ups.module').then(m => m.StartUpsPageModule)
          }
        ]
      },
      {
        path: 'members',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../members/members.module').then(m => m.MembersPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
