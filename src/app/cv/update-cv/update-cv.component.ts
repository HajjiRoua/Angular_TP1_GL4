import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css'],
})
export class UpdateCvComponent implements OnInit {
  public cv: Cv;
  constructor(
    private cvService: CvService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.cv = new Cv();
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.cvService.getCvById(id).subscribe({
      next: (cv) => {
        this.cv = cv as Cv;
      },
      error: (error) => {
        this.toastr.error('An error Occured While fetching Data');
      },
    });
    console.log(this.cv);
  }

  updateCv(cv: Cv): void {
    this.cvService.updateCv(cv).subscribe({
      next: () => {
        const link = ['cv'];
        this.router.navigate(link);
        alert('UPDATED');
      },
      error: (error) => {
        console.log(error);
        this.toastr.error('An error Occured While updating Data');
      },
    });
  }
}
