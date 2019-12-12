import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  private apiRoot = 'http://ec2-54-89-219-3.compute-1.amazonaws.com/api/v1/'
  constructor(private http: HttpClient) {
  }
  
  login(username:string, password:string): Observable<any> {
   let data = {
     username: username,
     password: password
   }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.post(this.apiRoot+'login/', data, httpOptions);

  //  return this.http.post('', data ,httpOptions);
  } 
}
