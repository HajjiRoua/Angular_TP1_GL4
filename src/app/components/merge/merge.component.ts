import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
import { BehaviorSubject, Observable, map, merge, reduce, scan } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent   {

  field1 = new FormControl()
  field2 = new FormControl()

  var1$ = new BehaviorSubject(0)
  var2$ = new BehaviorSubject(0)

  merged$= new Observable<number>
  scanned$= new Observable<number>
  reduced$= new Observable<number>

  TerminateFirstStream(){
    this.var1$.complete()
  }
  TerminateSecondStream(){
    this.var2$.complete()
  }

  ChangeFirstStream(){
    if(this.field1.value)
    this.var1$.next(this.field1.value)
  }

  ChangeSecondStream(){
    if(this.field2.value)
    this.var2$.next(this.field2.value)
  }

  constructor(){
    this.merged$ =merge(this.var1$,this.var2$).pipe(
      map((x,y)=>x+y) 
    )
    this.scanned$ = this.merged$.pipe(
      scan((x,y)=>{
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
