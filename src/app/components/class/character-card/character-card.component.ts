import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/character.model';
import { IEpisode } from 'src/app/models/episode.model';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input() character?: ICharacter
  episode?: IEpisode
  
  constructor (
    private _episodes: EpisodesService
  ) { }

  ngOnInit(): void {
    this.randomEpisode()
  }

  async randomEpisode() {
    if ( this.character ) {
      const maxIndex = this.character.episode.length - 1
      const randomIndex = Math.floor( Math.random() * maxIndex )
      // const episode = this.character.episode[ randomIndex ]
      
      this.episode = await this._episodes.getById(randomIndex)
    }
  }

}
