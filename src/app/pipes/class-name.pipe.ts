import { Pipe, PipeTransform } from '@angular/core';
import { ListClass } from '../models/list.model';

@Pipe({
  name: 'classNamePipe'
})
export class ListClassPipe implements PipeTransform {

  transform(value: ListClass, plural: boolean = false): string {
    return plural
      ? PluralListClassMap.get( value ) || ''
      : SingleListClassMap.get( value ) || ''
  }

}

export const SingleListClassMap = new Map<ListClass, string>( [
  ['character', 'Personaje'],
  ['episode', 'Episodio'],
  ['location', 'Ubicacion']
] )

export const PluralListClassMap = new Map<ListClass, string>( [
  ['character', 'Personajes'],
  ['episode', 'Episodios'],
  ['location', 'Ubicaciones']
])
