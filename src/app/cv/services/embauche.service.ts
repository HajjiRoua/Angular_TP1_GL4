import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  constructor() { }


  listChanged : Subject<Cv[]> = new Subject<Cv[]>()

  cvEmbauche : Cv[] = []


  getCvList(){
    return this.cvEmbauche
  }

  addCv(cv : Cv) : boolean {
    const cvCheck = this.cvEmbauche.find((e)=>cv.id=== e.id)
    if (!cvCheck){
      this.cvEmbauche.push(cv)
      this.listChanged.next([...this.cvEmbauche])
      return true
    }else {
      return false
    }
  }

}
