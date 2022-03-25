import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable, of } from 'rxjs';
import { IList, ListClass } from '../models/list.model';
import { IEpisode } from '../models/episode.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api: string = environment.server

  constructor (
    private _http: HttpClient,
  ) { }

  get( listClass: ListClass, page?: number ): Observable<IList> {
    let pageQuery = page ? `?page=${page}` : ''
    return this._http.get<IList>( `${ this.api }/${ listClass }${ pageQuery }` )
      .pipe( catchError( error => { throw of(error) }) )
  }

  getById<ClassType>( clasification: ListClass, id: number, ): Observable<ClassType> {
    return this._http.get<ClassType>( `${ this.api }/${clasification}/${ id }` )
      .pipe(
        catchError( error => {
          throw of(undefined)
        })
      )
  }

}
