import { Subject } from "rxjs";
import { Cv } from "../model/cv";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CvService {
  private selectCvSubject = new Subject<Cv>();
  selectCv$ = this.selectCvSubject.asObservable();
  cvs: Cv[] = [];

  defaultCv : Cv[] = [
    new Cv(1, "sellaouti", "aymen", "as.jpg"),
    new Cv(2, "sellaouti", "skander", "cv.png"),
    new Cv(3, "Dhaouadi", "yassine", ""),
    new Cv(4, "Mourali", "sandra", ""),
    new Cv(5, "Test", "test", ""),
    new Cv(6, "Mourali", "test2", ""),
  ];

  constructor() {
  }


  getDefaultCvs(){
    return this.defaultCv
  }
  getCvs() {
    return this.cvs;
  }

  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }

  setCvs(cvs : Cv[]){
    this.cvs=cvs
  }


  getCvById(id:number): Cv|undefined{
        const cv = this.cvs.find( cv => {
        cv.id==id
      });
      return cv;


  }
}
