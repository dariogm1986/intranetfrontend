import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

import { environment } from 'src/environments/environment';

import { loginForm } from '../interfaces/login-form.interfaces';
import { registerForm } from '../interfaces/register-form.interfaces';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient,
              private router: Router) { }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/actualidad');
  }

  validarToken():Observable<boolean>{
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${base_url}/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((resp: any) =>{
        localStorage.setItem('token', resp.token)
      }),
      map(resp => true),
        catchError( error => of(false))
    );
  }

  crearUsuario(formData: registerForm){

    return this.http.post(`${base_url}/usuarios`, formData)
                .pipe(
                  tap((resp: any) =>{
                    localStorage.setItem('token', resp.token)
                  })
                );
  }

  login(formData: loginForm){

    return this.http.post(`${base_url}/login`, formData)
                .pipe(
                  tap((resp: any) =>{
                    localStorage.setItem('token', resp.token)
                  })
                );
  }

}
