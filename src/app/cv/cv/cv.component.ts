import { Component, OnInit } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import {HttpClient} from "@angular/common/http";
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
  }

  cvs: Cv[] = [];

  ngOnInit(): void {
    this.cvService.getCvs().subscribe({
      next : (cvs)=>{
        this.cvService.setCvs(cvs as Cv[])
        this.cvs=cvs as Cv[]
      },
      error : (error)=>{
        this.toastr.error("An error Occured While fetching Data")
        this.cvs=this.cvService.getDefaultCvs()
      }
    })
  }


}
