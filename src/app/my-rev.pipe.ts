import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform
 {

     transform(value: string): string
      {
         let temp: string = "";
        if (value)
         {
           temp = value.split('').reverse().join('');
           return temp;
         }
      }
    
  }


