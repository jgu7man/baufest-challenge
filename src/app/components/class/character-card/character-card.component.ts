import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
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
    public api: ApiService
  ) { }

  ngOnInit(): void {
    this.randomEpisode()
  }

  async randomEpisode() {
    if ( this.character ) {
      const maxIndex = this.character.episode?.length - 1 || 1
      const randomIndex = Math.floor( Math.random() * maxIndex + 1 )
      
      this.episode = await this.api
        .getById<IEpisode>( 'episode', randomIndex )
        .pipe( first() ).toPromise()
    }
  }

  toggleCharacter( event: MatCheckboxChange ): void {
    if ( this.character ) {
      event.checked
        ? this.api.selectCharacter(this.character.id)
        : this.api.unselectCharacter(this.character.id)  
      
    }
  }

}
