import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { from, Observable } from 'rxjs';
import { mergeMap, scan } from 'rxjs/operators';
import { IEpisode } from '../models/episode.model';

@Pipe({
  name: 'epLinks'
})
export class EpLinkPipe implements PipeTransform {

  constructor (
    private _http: HttpClient
  ){}

  transform( links: string[], ...args: unknown[] ): Observable<IEpisode[]> {
    return from( links ).pipe(
      mergeMap( link => this._http.get<IEpisode>( link ) ),
      scan<IEpisode, IEpisode[]>((a, c) =>[...a, c], [])
    )
    
  }

}
