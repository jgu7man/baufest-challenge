import { Pipe, PipeTransform } from '@angular/core';
import { ClassType, ListClass } from '../models/list.model';
import { ICharacter } from '../models/character.model';
import { IEpisode } from '../models/episode.model';
import { ILocation } from '../models/locations.model';

@Pipe({ name: 'asCharacter' })
export class AsCharacterPipe implements PipeTransform {

  transform( value: ClassType, ...args: any[] ) {
    return value as ICharacter
  }

}

@Pipe( { name: 'asLocation' } )
export class AsLocationPipe implements PipeTransform {

  transform( value: ClassType, ...args: any[] ) {
    return value as ILocation
  }

}

@Pipe( { name: 'asEpisode' } )
export class AsEpisodePipe implements PipeTransform {

  transform( value: ClassType, ...args: any[] ) {
    return value as IEpisode
  }

}
