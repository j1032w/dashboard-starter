import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'camelCase' })
export class CamelCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/^\w|[A-Z]|\b\w/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }
}
