import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import{AdminService} from './admin.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Admin} from'./../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthadService {

  public admins: Admin[ ];
 
  public admin: Admin;


  constructor(private router: Router,private adminService:AdminService ) {
    this.getAdmins();
   }
   
 
  public getAdmins():void{
    this.adminService.getAdmins().subscribe(
      (response:Admin[])=>{
        
        this.admins=response;
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
    this.router.navigate(['siginad']);
  }

  login({ email, password }: any): Observable<any> {

    
    for (let i = 0; i < this.admins?.length; i++) {
      if ((this.admins[i].nom===email ||this.admins[i].pseudo===email )&&this.admins[i].mot_de_passe ===password ) {
        this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: this.admins[i].nom, email:this.admins[i].pseudo  });
    }
  }
    return throwError(new Error('Failed to login'));
  }
}
