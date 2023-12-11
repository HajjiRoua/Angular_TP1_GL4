import { NgModule } from '@angular/core';
import { CanDeactivate, RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { NF404Component } from './components/nf404/nf404.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { LoginComponent } from './login/login.component';
import { MergeComponent } from './components/merge/merge.component';
import { ProductsComponent } from './components/products/products.component';
import { UpdateCvComponent } from './cv/update-cv/update-cv.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { MasterDetailsComponent } from './cv/master-details/master-details.component';
import { cvListResolver } from './cv/resolver/cv-list.resolver';
import { cvDetailsResolver } from './cv/resolver/cv-details.resolver';
import {authGuard} from "./login/auth.guard";
import {exitGuard} from "./cv/add-cv/exit.guard";

// pipe
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cv',
    children: [
      {
        path: '',
        component: CvComponent,
        resolve: { cvs: cvListResolver },
      },
      {
        path: 'list',
        component: MasterDetailsComponent,
        resolve: { cvs: cvListResolver },
        children: [
          {
            path: ':id',
            resolve: { cv: cvDetailsResolver },
            component: DetailCvComponent,
          },
        ],
      },
      {
        path: 'add',
        component: AddCvComponent,
        canActivate : [authGuard],
        canDeactivate : [exitGuard]
      },
      {
        path: 'update/:id',
        component: UpdateCvComponent,
      },
      {
        path: ':id',
        component: DetailCvComponent,
        resolve: { cv: cvDetailsResolver },
      },
    ],
  },

  { path: 'login', component: LoginComponent },

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
