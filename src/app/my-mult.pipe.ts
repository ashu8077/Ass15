import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, Param: any): number
  {
    var Multipication:any = value * Param;
    return Multipication;
  }

}
