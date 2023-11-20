import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit{

  constructor() {
    this.form = new FormGroup({
      search : new FormControl()
    })
  }

  form : FormGroup

  ngOnInit(): void {
    this.form.valueChanges.subscribe(

    )
  }



}
