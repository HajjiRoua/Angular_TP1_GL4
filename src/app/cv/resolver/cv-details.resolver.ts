import { ResolveFn } from '@angular/router';
import {Cv} from "../model/cv";
import {inject} from "@angular/core";
import {CvService} from "../services/cv.service";
import {of} from "rxjs";

export const cvDetailsResolver: ResolveFn<Cv |null> = (route, state) => {

    const cvService = inject(CvService);
    const id = route.params['id'];
    if (isNaN(+id)) {
        console.log(`Product id was not a number: ${id}`);
        return of(null);
    }
    console.log(id)
    return cvService.getCvById(id)


};
