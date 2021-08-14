import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply',
})
export class MultiplyPipe implements PipeTransform {
  transform(value: number, param: number = 1): number {
    return value * param;
  }
}
