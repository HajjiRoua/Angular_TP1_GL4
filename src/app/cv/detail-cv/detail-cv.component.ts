import {Component,  OnInit} from '@angular/core';
import { Cv } from '../model/cv';
import {CvService} from "../services/cv.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  cv?: Cv;

  constructor(private cvService: CvService,
              private httpClient: HttpClient,
              private toastr: ToastrService,
              private router : Router,
  private activatedRouter: ActivatedRoute,) {
  }

  ngOnInit(): void {
    // const id = this.activatedRouter.snapshot.params["id"]
    // this.cvService.getCvById(id).subscribe(
    //   {
    //     next : (cv) => {
    //       this.cv = cv as Cv;
    //     },
    //     error: (error) => {
    //       this.toastr.error("An error Occured While fetching Data")
    //     }
    //   }
    // )
      this.activatedRouter.data.subscribe(
          (value)=>{
              this.cv=value['cv']
          }
      )
  }

  deleteCv(): void {
    const id = this.activatedRouter.snapshot.params["id"]
    this.cvService.deleteCv(id).subscribe({
      next : () => {
        const link = ['cv'];
        this.router.navigate(link);
        alert("DELETED")
      },
      error : (error) => {
        console.log(error)
        this.toastr.error("An error Occured While deleting Data")
      }
    })
  }
}
