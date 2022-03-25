import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, from, Subscription } from 'rxjs';
import { finalize, first, mergeMap, pluck, scan } from 'rxjs/operators';
import { ICharacter } from 'src/app/models/character.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit, OnDestroy {

  public results$ = new BehaviorSubject<ICharacter[]>( [] )
  private allEpisodes: string[] = []
  public sharedEpisodes: string[] = []
  readonly columns: string[] = [ 'name', 'episode', 'air_date', 'appears' ]
  public matcherEnds: boolean = false

  private _paramsSubscription: Subscription

  constructor (
    private _route: ActivatedRoute,
    private _api: ApiService,
    public location: Location
  ) { 
    this._paramsSubscription = this._route.queryParams.pipe(
      pluck('chars'),
      mergeMap( characters => this._api.compareCharacters( characters ).pipe(first()) ),
      mergeMap( results => {
        this.results$.next( results )
        return from( results ).pipe(
          pluck( 'episode' ),
          mergeMap( episodeList => from( episodeList ) ),
          scan( ( a: string[], c: string ) => {
            if ( this.allEpisodes.includes( c ) ) this.sharedEpisodes.push( c )
            this.allEpisodes = [ ...a, c ]
            return this.allEpisodes
          }, [] ),
          finalize(() => this.matcherEnds = true)
        )
      } ),
    ).subscribe()
  }

  ngOnInit(): void {
  }

  charactersList(linkList: string[]) {
    return linkList.map( link => {
      return +link.substring(link.lastIndexOf('/') + 1, link.length)
    })
  }

  ngOnDestroy(): void {
    this._paramsSubscription?.unsubscribe()
    this._api.selected = []
  }

}
