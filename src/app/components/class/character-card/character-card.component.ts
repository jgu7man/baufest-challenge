import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ICharacter } from 'src/app/models/character.model';
import { IEpisode } from 'src/app/models/episode.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input() character?: ICharacter
  episode?: IEpisode
  
  constructor (
    private _api: ApiService
  ) { }

  ngOnInit(): void {
    this.randomEpisode()
  }

  async randomEpisode() {
    if ( this.character ) {
      const maxIndex = this.character.episode.length - 1
      const randomIndex = Math.floor( Math.random() * maxIndex )
      // const episode = this.character.episode[ randomIndex ]
      
      this.episode = await this._api
        .getById<IEpisode>( 'episode', randomIndex )
        .pipe( first() ).toPromise()
    }
  }

}
