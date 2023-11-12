import { Component } from '@angular/core';
import {EmbaucheService} from "../services/embauche.service";
import {Cv} from "../model/cv";

@Component({
  selector: 'app-list-cv-embauche',
  templateUrl: './list-cv-embauche.component.html',
  styleUrls: ['./list-cv-embauche.component.css']
})
export class ListCvEmbaucheComponent {




  cv : Cv[];

  constructor(
    private embaucheService : EmbaucheService
  ){
    this.cv=this.embaucheService.getCvList()
    this.embaucheService.listChanged.subscribe(
      (cv : Cv[])=>{
        this.cv=cv
      }
    )
  }

}
