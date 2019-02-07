import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myChk'
})
export class MyChkPipe implements PipeTransform
{
  transform( value: any, Param: any): any
  {
    var int: number = value;
     if(Param == 'Prime')
      {
        var i:number, flag = 0;
        for(i = 2; i <= int/2; ++i)
        {
            // condition for nonprime number
            if(int%i == 0)
            {
                flag = 1;
                break;
            }
        }
    
        if (int == 1) 
        {
          return("1 is neither a prime nor a composite number.");
        }
        else 
        {
            if (flag == 0)
              return("It is a prime number.");
            else
              return("It is not a prime number.");
        }

      }
     if(Param == 'Perfect')
      {
         var rem:any, sum = 0, i:number
         for (i = 1; i <= (int - 1); i++)
           {
             rem = int % i;
             {
               sum = sum + i;
             }
           }
         if (sum == int)
            return("It is perfect number");
         else
            return("It is not a perfect number");

      }
     if(Param == 'Even')
      {
        if(int % 2 == 0)
          return("It is prime number");
        else
          return("It is not prime number");
      }
     if(Param == 'Odd')
      {
        if(int % 2 == 0)
          return("It is not Odd number");
        else
          return("It is Odd number");
      }
      
   }

}
