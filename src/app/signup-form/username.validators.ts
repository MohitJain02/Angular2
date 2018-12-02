import { AbstractControl, ValidationErrors } from "@angular/forms";

export class userNameValidators
{
    static canNotContainSpace(control : AbstractControl) : ValidationErrors | null
    {
        if((control.value as string).indexOf(' ') >= 0)
        {
            return {canNotContainSpace : true};
        }
        return null;
    }

    static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null>
    {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'mohit')
                     resolve({shouldBeUnique : true});
                else
                     resolve(null);
            }, 2000);
        });
    }
}