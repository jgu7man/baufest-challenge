import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import { IList, ListClass } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  api: string = environment.server

  constructor (
    private _http: HttpClient,
  ) { }

  get( listClass: ListClass, page?: number ): Observable<IList> {
    let pageQuery = page ? `?page=${page}` : ''
    return this._http.get<IList>(`${this.api}/${listClass}${pageQuery}`)
  }
}
