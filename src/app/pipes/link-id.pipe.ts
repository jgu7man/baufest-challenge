import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkId'
})
export class LinkIdPipe implements PipeTransform {

  transform(link: string, ...args: unknown[]): number {
    return +link.substring(link.lastIndexOf('/') + 1, link.length);
  }

}
