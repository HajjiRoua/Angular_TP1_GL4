import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CvService} from "../../cv/services/cv.service";
import {debounce, debounceTime, distinctUntilChanged, Observable, switchMap} from "rxjs";
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
    this.filteredCv =this.form.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap( (value) => this.cvService.findByName(value))
    )

  }





}
