import { Component, OnInit } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import {map, Observable, share} from "rxjs";


@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent implements OnInit{
  constructor(
    private cvService: CvService,
  ) {
    this.cv$=this.cvService.getCvs().pipe(share());
    this.juniorCvObservable$= this.cv$.pipe(
      map((value)=> {
        const juniorCv : Cv []= []
        value.map((value)=> {
          if (value.age<40){
            juniorCv.push(value)
          }
        })
        return juniorCv
      })
    )
    this.seniorCvObservable$= this.cv$.pipe(
      map((value)=> {
        const seniorCv : Cv []= []
        value.map((value)=> {
          if (value.age>=40){
            seniorCv.push(value)
          }
        })
        return seniorCv
      })
    )
  }


  cv$ : Observable<Cv[]>;
  juniorCvObservable$ : Observable<Cv[]>;
  seniorCvObservable$ : Observable<Cv[]>;

  isJunior : boolean = false

  setJunior(){
    this.isJunior=true
  }

  setSenior(){
    this.isJunior=false
  }


  ngOnInit(): void {

  }


}
