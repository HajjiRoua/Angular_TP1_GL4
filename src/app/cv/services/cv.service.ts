import { catchError, map, Observable, Subject, tap } from 'rxjs';
import { Cv } from '../model/cv';
import { Injectable } from '@angular/core';
import { MES_CONSTANTES } from '../../config/constantes.config';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { addCvDto } from '../model/addCv';

@Injectable({ providedIn: 'root' })
export class CvService {
  private selectCvSubject = new Subject<Cv>();
  selectCv$ = this.selectCvSubject.asObservable();
  cvs: Cv[] = [];

  defaultCv: Cv[] = [
    new Cv(1, 'sellaouti', 'aymen', 'as.jpg'),
    new Cv(2, 'sellaouti', 'skander', 'cv.png'),
    new Cv(3, 'Bouhaha', 'Aymen', ''),
    new Cv(4, 'Frikha', 'Ahmed', ''),
    new Cv(5, 'Hajji', 'Roua', ''),
    new Cv(6, 'Hassoun', 'Karam', ''),
  ];

  constructor(private httpClient: HttpClient) {}

  getCvs(): Observable<Cv[]> {
    return this.httpClient.get<Cv[]>(MES_CONSTANTES.url);
  }

  setCvs(cvs: Cv[]) {
    this.cvs = cvs;
  }

  getDefaultCvs() {
    return this.defaultCv;
  }

  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }

  getCvById(id: string) {
    return this.httpClient.get(MES_CONSTANTES.url + '/' + id);
  }

  deleteCv(id: string) {
    return this.httpClient.delete(MES_CONSTANTES.url + '/' + id);
  }

  findByName(name: string): Observable<Cv[]> {
    const filter = {
      where: {
        name: {
          like: `%${name}%`,
        },
      },
    };
    const urlWithFilter =
      MES_CONSTANTES.url +
      `/?filter=${encodeURIComponent(JSON.stringify(filter))}`;

    return this.httpClient.get<Cv[]>(urlWithFilter);
  }

  updateCv(body: Cv): Observable<Cv> {
    return this.httpClient.put<Cv>(MES_CONSTANTES.url, body);
  }
  addCv(body: addCvDto): Observable<Cv> {
    return this.httpClient.post<Cv>(MES_CONSTANTES.url, body);
  }
}
