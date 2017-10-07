
import { AbstractControl, ValidationErrors } from "@angular/forms/forms";

export class UsernameValidator {
 static   cannotCantainSpace(control:AbstractControl) : ValidationErrors |null {
     
    if((control.value as string).indexOf(' ') >=0)
        return {cannotCantainSpace:true};

        return null;
 }

 static userNameShouldUnique(control:AbstractControl): Promise<ValidationErrors | null>{
     return new Promise((resolve, reject)=>{
         setTimeout(() => {
            if(control.value === "tanveer")
                resolve({userNameShouldUnique:true});
            else 
                resolve(null);
         }, 800);
        
     })

     }
 }
   

