import {Component, EventEmitter, Input, Output} from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import {EmbaucheService} from "../services/embauche.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  cv? : Cv | null;

  constructor(
    private cvService: CvService,
    private embaucheService : EmbaucheService,
    private toastr: ToastrService,
    private router : Router
  ) {
    this.cvService.selectCv$.subscribe(
      (cv: Cv)=>{
        this.cv=cv
      }
    );
  }

  onEmbaucheClicked(){
    const checker = this.embaucheService.addCv(this.cv!)
    if (!checker){
      this.toastr.show(this.cv!.name+ " est déja embauché")
    }else {
      this.toastr.show(this.cv!.name + "est embauché")
    }
  }

  moreInfo() {
    const link = ['cv', this.cv?.id];
    this.router.navigate(link);
  }



}
