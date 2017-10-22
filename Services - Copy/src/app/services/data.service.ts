import { BadInput } from './../error-handling/bad-input';
import { NotFoundError } from './../error-handling/not-found-error';
import { AppError } from './../error-handling/app-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
 
  constructor( private url : string,private http:Http) {

   }
  getAll(){
   return this.http.get(this.url)
   .map(response => response.json())
   .catch(this.HandleError)
  }
  create(post){
    return this.http.post(this.url, JSON.stringify(post))
    .map(response => response.json())
    .catch(this.HandleError);
  }
  udate(post){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead:true}))
    .map(response => response.json())
    .catch(this.HandleError);
  }
  delete(id){
    return this.http.delete(this.url + '/' + id)
    .map(response => response.json())
    .catch(this.HandleError);
    }

    private HandleError(error:Response){
      if(error.status === 400)
        return Observable.throw(new BadInput(error))
      if(error.status === 404)
      return Observable.throw(new NotFoundError(error))
     return Observable.throw(new AppError(error));
    }
}
