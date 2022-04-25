import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Admin} from '../models/admin'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiServerUrl =environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
public getAdmins():Observable<Admin[]>{
   return this.http.get<Admin[]>(`${this.apiServerUrl}/administrateur/all`);
 }
}
