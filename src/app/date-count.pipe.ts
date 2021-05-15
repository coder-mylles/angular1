
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime)
    const secondsInDay = 86400;
    const secondsInHour = 3600;
    const hoursInDay = 24;
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInDay;
    var hourCounter = (dateCounter % 1);
    var hours = hourCounter * hoursInDay;
    var finalTime:any = Math.floor(dateCounter) +" day(s) " + hours + " hour(s) "  ;
    



    if (dateCounter >= 1 && value < todayWithNoTime){
      return finalTime;
    }else{
      return 0;
    }
  }

}