import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {CvService} from "../services/cv.service";
import {Cv} from "../model/cv";
import {share} from "rxjs";

export const cvListResolver: ResolveFn<Cv[]> = (route, state) => {

    const cvService = inject(CvService)

    return cvService.getCvs().pipe(share());
};
