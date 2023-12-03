import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BehaviorSubject, map, merge, Observable, reduce, scan} from "rxjs";

@Component({
    selector: 'app-merge',
    templateUrl: './merge.component.html',
    styleUrls: ['./merge.component.css']
})
export class MergeComponent {


    form : FormGroup;

    var1$ = new BehaviorSubject(0)
    var2$ = new BehaviorSubject(0)
    merged$= new Observable<number>()
    scanned$= new Observable<number>()
    reduced$= new Observable<number>();



    terminateFirstStream(){
        this.var1$.complete()
    }

    terminateSecondStream(){
        this.var2$.complete()
    }

    constructor() {
        this.form = new FormGroup({
            field1 : new FormControl(),
            field2 : new FormControl()
        });

        this.form.get("field1")!.valueChanges!.subscribe(
            (value)=>{
                if (value){
                    this.var1$.next(value)
                }
            }
        );


        this.form.get("field2")!.valueChanges!.subscribe(
            (value) => {
                if (value) {
                    this.var2$.next(value)
                }
            }
        );



        this.merged$ =merge(this.var1$,this.var2$).pipe(
            map(value => value)
        )

        this.scanned$ = this.merged$.pipe(
            scan((x,y)=>{
                console.log("x",x)
                console.log("y",y)
                if(y)
                    return x+y
                return x
            }))
        this.reduced$ = this.merged$.pipe(
            reduce((x,y)=>{
                if(y)
                    return x+y
                return x
            }))

    }




}
