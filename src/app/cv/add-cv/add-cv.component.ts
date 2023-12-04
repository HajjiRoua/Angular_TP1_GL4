import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { addCvDto } from '../model/addCv';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent implements OnInit {
  cv: addCvDto;
  constructor(
    private cvService: CvService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.cv = new addCvDto();
  }

  ngOnInit(): void {
    console.log('adding a cv');
  }

  addCv(): void {
    this.cvService.addCv(this.cv).subscribe({
      next: () => {
        const link = ['cv'];
        this.router.navigate(link);
        alert('ADDED');
      },
      error: (error) => {
        console.log(error);
        this.toastr.error('an error has occured when adding a cv');
      },
    });
  }
}
