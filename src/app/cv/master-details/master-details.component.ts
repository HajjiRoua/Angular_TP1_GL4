import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Cv} from "../model/cv";
import {CvService} from "../services/cv.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-master-details',
  templateUrl: './master-details.component.html',
  styleUrls: ['./master-details.component.css']
})
export class MasterDetailsComponent implements OnDestroy{


    subscription : Subscription

    constructor(
        private activatedRoute : ActivatedRoute,
        private router : Router,
        private cvService : CvService
    ) {
        this.cvs=this.activatedRoute.snapshot.data['cvs']
        this.subscription=this.cvService.selectCv$.subscribe(
            (cv)=>{
                this.router.navigate(['cv','list',cv.id])
            }
        )
    }

    cvs : Cv[]

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}
