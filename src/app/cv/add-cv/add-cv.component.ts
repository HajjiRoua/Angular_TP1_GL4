import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { addCvDto } from '../model/addCv';
import {CanDeactivateComponent} from "./exit.guard";
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent implements OnInit , CanDeactivateComponent {
  cv: addCvDto;
  constructor(
    private cvService: CvService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.cv = new addCvDto();
  }

  ngOnInit(): void {
  }

  addCv(): void {
    this.cvService.addCv(this.cv).subscribe({
      next: () => {
        const link = ['cv'];
        this.router.navigate(link);
      },
      error: (error) => {
        console.log(error);
        this.toastr.error('an error has occured when adding a cv');
      },
    });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if(this.cv.isNotEmpty()){
      return window.confirm("The form is not empty , do you really want to leave")
    }else {
      return true
    }
  }
}
