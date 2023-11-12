import {Component, Input, OnInit} from '@angular/core';
import { Cv } from '../model/cv';
import {CvService} from "../services/cv.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MES_CONSTANTES} from "../../config/constantes.config";
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

    this.activatedRouter.params.subscribe(
      (params) => {
    this.httpClient.get(
      MES_CONSTANTES.url + "/" +params['id']
    ).subscribe(
      (cv) => {

        this.cv = cv as Cv;
        console.log(cv)
      },
      (error) => {
        this.toastr.error("An error Occured While fetching Data")
      }
    )
  }
    )}

  deleteCv(): void {
    this.activatedRouter.params.subscribe(
      (params) => {
        this.httpClient.delete(
          MES_CONSTANTES.url + "/" +params['id']
        ).subscribe(
          () => {
            const link = ['cv'];
            this.router.navigate(link);
            alert("DELETED")
          },
          (error) => {
            this.toastr.error("An error Occured While deleting Data")
          }
        )
      }
    )
  }
}
