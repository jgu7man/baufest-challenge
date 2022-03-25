import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { distinct, map, mergeMap } from 'rxjs/operators';
import { ICharacter } from 'src/app/models/character.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character-thumbnail',
  templateUrl: './character-thumbnail.component.html',
  styleUrls: ['./character-thumbnail.component.css']
})
export class CharacterThumbnailComponent implements OnInit, OnDestroy {

  private _url = new BehaviorSubject<string | undefined>(undefined);
  @Input() set url(url: string | undefined) { this._url.next(url); }
  get url() { return this._url.getValue()}
  private _urlSubs?: Subscription

  public character$?: Observable<ICharacter | undefined>

  constructor (
    private _api: ApiService
  ) { 
    this.character$ = this._url.pipe(
      distinct(),
      map( url => {
       return  url?.substr( url.lastIndexOf( '/' ) + 1 )
      } ),
      mergeMap( id => {
        return this._api.getById<ICharacter>('character', +id!)
      } )
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._urlSubs?.unsubscribe()
  }

}
