import { Component, OnInit } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import {HttpClient} from "@angular/common/http";
import {MES_CONSTANTES} from "../../config/constantes.config";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent implements OnInit{
  constructor(
    private cvService: CvService,
    private httpClient : HttpClient,
    private toastr: ToastrService,
  ) {
    this.cvs=this.cvService.getCvs()
  }



  cvs: Cv[] = [];

  ngOnInit(): void {
    this.httpClient.get(
      MES_CONSTANTES.url
    ).subscribe(
      (cvs)=>{
        this.cvService.setCvs(cvs as Cv[])
        this.cvs=cvs as Cv[]
      },
      (error)=>{
          this.toastr.error("An error Occured While fetching Data")
        this.cvs=this.cvService.getDefaultCvs()
      }
    )
  }




}
