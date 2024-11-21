import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/login.interface';
import { Observable } from 'rxjs';
import { Sesion } from '../interfaces/sesion.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl + "usuario";

  constructor(private http: HttpClient) { }

  login(request: Login): Observable<Sesion> {
    return this.http.post<Sesion>(`${this.baseUrl}`, request);
  }
}
