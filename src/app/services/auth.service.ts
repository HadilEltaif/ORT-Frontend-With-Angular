import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import{CondidatsService} from './condidats.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Condidat} from'./../models/condidat';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public Condidats: Condidat[ ];
 
  public Condidat: Condidat;


  constructor(private router: Router,private CondidatService:CondidatsService ) {
    this.getCondidats();
   }
   
 
  public getCondidats():void{
    this.CondidatService.getCondidats().subscribe(
      (response:Condidat[])=>{
        
        this.Condidats=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
        return null;
      }
    );
  }
  
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['home']);
  }

  login({ email, password }: any): Observable<any> {

    
    for (let i = 0; i < this.Condidats?.length; i++) {
      if ((this.Condidats[i].nom===email||this.Condidats[i].email===email ||this.Condidats[i].pseudo===email) && this.Condidats[i].mot_de_passe=== password ) {
        this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: this.Condidats[i].nom, email:this.Condidats[i].pseudo });
    }
  }
    return throwError(new Error('Failed to login'));
  }
}

 