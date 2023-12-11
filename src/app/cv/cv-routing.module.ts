import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CvComponent} from "./cv/cv.component";
import {cvListResolver} from "./resolver/cv-list.resolver";
import {MasterDetailsComponent} from "./master-details/master-details.component";
import {cvDetailsResolver} from "./resolver/cv-details.resolver";
import {DetailCvComponent} from "./detail-cv/detail-cv.component";
import {AddCvComponent} from "./add-cv/add-cv.component";
import {authGuard} from "../login/auth.guard";
import {exitGuard} from "./add-cv/exit.guard";
import {UpdateCvComponent} from "./update-cv/update-cv.component";



const routes : Routes = [
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
]



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class CvRoutingModule { }
