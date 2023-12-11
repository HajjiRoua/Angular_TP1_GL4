import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { CardComponent } from './cv/card/card.component';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FrontComponent } from './components/front/front.component';
import { AdminComponent } from './components/admin/admin.component';
import { MasterDetailsComponent } from './cv/master-details/master-details.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { NF404Component } from './components/nf404/nf404.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ListCvEmbaucheComponent } from './cv/list-cv-embauche/list-cv-embauche.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { MergeComponent } from './components/merge/merge.component';
import { ProductsComponent } from './components/products/products.component';
import { UpdateCvComponent } from './cv/update-cv/update-cv.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { tokenInjectionInterceptorProvider } from './token-injection.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FrontComponent,
    AdminComponent,
    NF404Component,
    MergeComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [tokenInjectionInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
