import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, Param:string): number
  {
    var Addition:any = value + Param;
    return Addition;
  }

}
