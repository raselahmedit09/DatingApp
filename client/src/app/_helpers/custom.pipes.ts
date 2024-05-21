import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'dateFormatPipe'
})

export class dateFormatPipe implements PipeTransform {

    constructor() { }

    transform(value: string | Date, hasTimeStamp: boolean = false) {
        var datePipe = new DatePipe("en-US");
        if (hasTimeStamp)
            return datePipe.transform(value, 'MM-dd-yyyy');
        else
            return datePipe.transform(value, 'MM-dd-yyyy');
    }
}
