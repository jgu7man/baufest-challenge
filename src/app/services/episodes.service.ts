import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { IEpisode } from '../models/episode.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  api: string = environment.server

  constructor (
    private _http: HttpClient
  ) { }

  async getById( id: number ) {
    return this._http.get<IEpisode>( `${ this.api }/episode/${ id }` )
      .pipe(
        catchError( error => {
          return of(undefined)
        })
      ).toPromise()
  }
}
