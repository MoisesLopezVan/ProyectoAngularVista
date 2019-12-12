import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  
  private apiRoot = 'http://ec2-54-89-219-3.compute-1.amazonaws.com/api/v1/'

  constructor(private http: HttpClient) {
  }
  
  getUser(auth_token): Observable<any> {
    let token = localStorage.getItem('Token')
    console.log(token);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Token ' + token);
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token' + auth_token
      })
    }
    return this.http.get(this.apiRoot+'alumno/alumno_lista/',  {headers: headers});
  } 

  getAllUser(): Observable<any> {
    let token = localStorage.getItem('Token')
    console.log(token);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Token ' + token);
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Authorization': 'Token' + auth_token
      })
    }
    return this.http.get(this.apiRoot+'alumno/alumno_lista/', {headers: headers});
  } 

  create(data): Observable<any>{
    let token = localStorage.getItem('Token')
    console.log(token);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Token ' + token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
      })
    }
    return this.http.post(this.apiRoot+'alumno/alumno_create/',data, {headers: headers});
  }
  
  filtrarBusqueda(id,data): Observable<any>{
    let token = localStorage.getItem('Token')
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Token ' + token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
      })
    }
    return this.http.get(this.apiRoot+'alumno/alumno_busqueda/'+ id, {headers: headers});
  }
  
  obtenerid(id): Observable<any>{
    let token = localStorage.getItem('Token')
    console.log(token);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Token ' + token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
      })
    }
    return this.http.get(this.apiRoot+'alumno/alumno_lista/'+ id, {headers: headers});
  }

  detail(id,data): Observable<any>{
    let token = localStorage.getItem('Token')
    console.log(token);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Token ' + token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
      })
    }
    return this.http.put(this.apiRoot+'alumno/alumno_detail/'+ id,data, {headers: headers});
  }

  delete(id): Observable<any>{
    let token = localStorage.getItem('Token')
    console.log(token);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Token ' + token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
      })
    }
    return this.http.delete(this.apiRoot+'alumno/alumno_delete/'+ id, {headers: headers});
  }

}
