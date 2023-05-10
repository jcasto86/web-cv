import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';


import { AuthResponse, Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }


  constructor(private http: HttpClient) { }

  registro(name: string, email: string, password: string) {

    const url = `${this.baseUrl}/auth/new`;
    const body = { email, password, name };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(response => {
          if (response.ok) {
            localStorage.setItem('token', response.token!);
          }
        }),
        map(response => response.ok),
        catchError(err => of(err.error.msg))
      );
  }

  addJobPosition(logoHref: string, logoSrc: string, logoAltText: string, position: string, startDate: Date, endDate: Date, city: string, remote: boolean, description: string) {

    const url = `${this.baseUrl}/auth/add-job-position`;
    const body = {
      logoHref, logoSrc, logoAltText, position, startDate, endDate, city, remote, description
    };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(response => {
          if (response.ok) {
            localStorage.setItem('token', response.token!);
          }
        }),
        map(response => response.ok),
        catchError(err => of(err.error.msg))
      );
  }

  login(email: string, password: string) {

    const url = `${this.baseUrl}/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(response => {
          console.log('Auth Service response: ', response);
          if (response.ok) {
            localStorage.setItem('token', response.token!);
          }
        }),
        map(response => response.ok),
        catchError(err => of(err.error.msg))
      );
  }

  validarToken(): Observable<boolean> {

    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, { headers })
      .pipe(
        map(resp => {
          localStorage.setItem('token', resp.token!);
          this._usuario = {
            name: resp.name!,
            uid: resp.uid!,
            email: resp.email!
          }

          return resp.ok;
        }),
        catchError(err => of(false))
      );
  }

  logout() {
    localStorage.clear();
  }
}
