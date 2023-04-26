import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({name: 'camelCase'})
export class CamelCasePipe implements PipeTransform {
  transform(input: string): string {
    return _.camelCase(input);
  }
}
