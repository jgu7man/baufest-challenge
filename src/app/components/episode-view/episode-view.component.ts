import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap, pluck } from 'rxjs/operators';
import { IEpisode } from 'src/app/models/episode.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  templateUrl: './episode-view.component.html',
  styleUrls: ['./episode-view.component.css']
})
export class EpisodeViewComponent implements OnInit {

  public eid?: number 
  public episode$?: Observable<IEpisode>

  constructor (
    private _route: ActivatedRoute,
    private _api: ApiService,
    public location: Location
  ) { 
    this.episode$ = this._route.params.pipe(
      pluck('id'),
      mergeMap( eid => {
        this.eid = eid
        if (!this.eid) throw {text: 'La ruta no es válida'}
        return this._api.getById<IEpisode>( 'episode', this.eid )
      } )
    )
  }
  
  async ngOnInit() {
  }

}
