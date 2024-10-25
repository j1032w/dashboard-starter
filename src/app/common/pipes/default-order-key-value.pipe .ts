import { KeyValuePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

const keepOrder = (a: any) => a;

// This pipe uses the angular key value pipe. but doesn't change order.
@Pipe({
  name: 'defaultOrderKeyValue'
})
export class DefaultOrderKeyValuePipe extends KeyValuePipe implements PipeTransform {
  override transform(value: any): any {
    return super.transform(value, keepOrder);
  }
}
