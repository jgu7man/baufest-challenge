import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable, of } from 'rxjs';
import { IList, IQueries, ListClass } from '../models/list.model';
import { catchError } from 'rxjs/operators';
import { ICharacter } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api: string = environment.server
  public selected: number[] = []

  constructor (
    private _http: HttpClient,
  ) { }

  get( listClass: ListClass, {page, name}: IQueries ): Observable<IList> {
    let pageQuery = page ? `page=${ page }` : ''
    let nameQuery = name ? `name=${name}` : ''
    return this._http.get<IList>( `${ this.api }/${ listClass }?${ nameQuery }${nameQuery ? '&' : '' }${ pageQuery }` )
      .pipe( catchError( error => { throw of(error) }) )
  }

  getById<ClassType>( clasification: ListClass, id: number, ): Observable<ClassType> {
    return this._http.get<ClassType>( `${ this.api }/${clasification}/${ id }` )
      .pipe(
        catchError( error => {
          console.error( error )
          throw of(undefined)
        })
      )
  }

  get selecterCount(): number {
    return this.selected.length
  }

  selectCharacter( id: number ) {
    if (this.selecterCount < 3)
      this.selected.push( id )
  }

  unselectCharacter( id: number ) {
    const index = this.selected.indexOf( id )
    if (index >= 0)
      this.selected.splice( index, 1 )
  }

  compareCharacters(charactersQueried: string) {
    
    return this._http.get<ICharacter[]>( `${ this.api }/character/${ charactersQueried }` )
      .pipe(
        catchError( error => {
          console.error( error )
          throw of(undefined)
        })
      )
  }

}
