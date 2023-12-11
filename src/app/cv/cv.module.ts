import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CvComponent} from "./cv/cv.component";
import {ListComponent} from "./list/list.component";
import {ItemComponent} from "./item/item.component";
import {CardComponent} from "./card/card.component";
import {DefaultImagePipe} from "./pipes/default-image.pipe";
import {MasterDetailsComponent} from "./master-details/master-details.component";
import {DetailCvComponent} from "./detail-cv/detail-cv.component";
import {ListCvEmbaucheComponent} from "./list-cv-embauche/list-cv-embauche.component";
import {AutocompleteComponent} from "../components/autocomplete/autocomplete.component";
import {UpdateCvComponent} from "./update-cv/update-cv.component";
import {AddCvComponent} from "./add-cv/add-cv.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CvRoutingModule} from "./cv-routing.module";



@NgModule({
  declarations: [
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
    DefaultImagePipe,
    MasterDetailsComponent,
    DetailCvComponent,
    ListCvEmbaucheComponent,
    AutocompleteComponent,
    UpdateCvComponent,
    AddCvComponent,
  ],
  imports: [
    CommonModule,
      FormsModule,
      CvRoutingModule,
      ReactiveFormsModule
  ]
})
export class CvModule { }
