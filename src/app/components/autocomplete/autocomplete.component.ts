import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CvService} from "../../cv/services/cv.service";
import {distinctUntilChanged, Observable} from "rxjs";
import {Cv} from "../../cv/model/cv";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {

  filteredCv: Observable<Cv[]> = new Observable<Cv[]>()
  form : FormGroup

  constructor(
    private cvService : CvService
  ) {
    this.form = new FormGroup({
      search : new FormControl()
    })
    this.form.valueChanges.subscribe(
      (value)=>{
        this.filteredCv=this.cvService.findByName(value.search).pipe(distinctUntilChanged())
      }
    )
  }





}
