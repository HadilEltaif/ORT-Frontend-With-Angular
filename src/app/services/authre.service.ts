import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import{RecruteurService} from './recruteur.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Recruteur} from'./../models/recruteur';


@Injectable({
  providedIn: 'root'
})
export class AuthreService {

  
  public Recruteurs: Recruteur[ ];
 
  public Recruteur: Recruteur;


  constructor(private router: Router,private RecruteurService:RecruteurService ) {
    this.getRecruteurs();
   }
   
 
  public getRecruteurs():void{
    this.RecruteurService.getRecruteurs().subscribe(
      (response:Recruteur[])=>{
        
        this.Recruteurs=response;
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

    
    for (let i = 0; i < this.Recruteurs?.length; i++) {
      if ((this.Recruteurs[i].nom===email ||this.Recruteurs[i].pseudo===email )&&this.Recruteurs[i].mot_de_passe ===password ) {
        this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: this.Recruteurs[i].nom, email:this.Recruteurs[i].pseudo  });
    }
  }
    return throwError(new Error('Failed to login'));
  }
}
