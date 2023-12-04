import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

// pipe
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddCvComponent },
      {
        path: ':id',
        component: DetailCvComponent,
      },
      {
        path: 'update/:id',
        component: UpdateCvComponent,
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
