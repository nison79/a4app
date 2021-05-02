import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry ,map} from 'rxjs/operators';


@Injectable()
export class DataService {

constructor(public http:HttpClient) { 

  console.log('data service connected')
}
  
getPosts() {
  return this.http
    .get('https://jsonplaceholder.typicode.com/posts')
    .pipe(map((res: any) => res));
}


}
