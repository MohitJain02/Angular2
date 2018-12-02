import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name : 'summary'
})

export class SummaryPipe implements PipeTransform
{
    transform(value : string, limit? : number)
    {
        if(!value)
        {
            console.log("value can not be null");
            return null;
        }

        let actualLimit = (limit) ? limit : 50;

        return value.substr(0, actualLimit) + '.....';
    }
}