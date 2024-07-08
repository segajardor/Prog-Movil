import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'category',
        loadChildren: () => import('../category/category.module').then( m => m.CategoryPageModule)
      },
      {
        path: 'breeds',
        loadChildren: () => import('../breeds/breeds.module').then( m => m.BreedsPageModule)
      },
      {
        path: 'location',
        loadChildren: () => import('../location/location.module').then( m => m.LocationPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
