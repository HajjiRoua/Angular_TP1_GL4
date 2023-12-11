import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { NF404Component } from './components/nf404/nf404.component';

import { MergeComponent } from './components/merge/merge.component';
import { ProductsComponent } from './components/products/products.component';
import {CvModule} from "./cv/cv.module";
import {CustomPreloadingStrategy} from "./custom-preload.strategy";


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cv',
    loadChildren : ()=> import('./cv/cv.module').then((m)=>CvModule) ,
    data : { preload : true }
  },

  { path: 'login', loadChildren : ()=> import('./login/login.module').then((m)=> m.LoginModule)},

  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  { path: 'merge', component: MergeComponent },

  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy : CustomPreloadingStrategy})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
