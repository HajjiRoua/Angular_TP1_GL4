import { Component } from '@angular/core';
import {ProductsService} from "./services/products.service";
import {BehaviorSubject, Observable, scan, switchMap} from "rxjs";
import {Product} from "./model/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


    numberOfProducts = new BehaviorSubject<number>(0);

    disabled: boolean = false;
    products$ : Observable<Product[]>;

    constructor(
        private productService : ProductsService
    ) {
        this.products$=this.numberOfProducts.pipe(
            switchMap((value)=> this.productService.getProducts(12,value)),
            scan((previous,cur)=>[
                ...previous,...cur
            ])
        )
    }

    loadMore(){
        const numberProducts = this.numberOfProducts.value + 12;
        if (numberProducts<=100){
            this.numberOfProducts.next(numberProducts)
        }else {
            console.log("test")
            this.numberOfProducts.complete();
            this.disabled=true;
        }
    }




}
