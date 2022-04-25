import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Condidat} from '../models/condidat'
import { environment } from 'src/environments/environment';
@Injectable({
  
  providedIn: 'root'
})
export class CondidatsService {
  private apiServerUrl =environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
public getCondidats():Observable<Condidat[]>{
   return this.http.get<Condidat[]>(`${this.apiServerUrl}/condidat/all`);
 }
 public getCondidatById(condidatId:number):Observable<Condidat>{
  return this.http.get<Condidat>(`${this.apiServerUrl}/condidat/find/${condidatId}`);
}
 public addCondidat(condidat:Condidat):Observable<Condidat>{
  return this.http.post<Condidat>(`${this.apiServerUrl}/condidat/add`,condidat);
}
public updateCondidat(condidat:Condidat):Observable<Condidat>{
  return this.http.put<Condidat>(`${this.apiServerUrl}/condidat/update`,condidat);
}
public deleteCondidat(condidatId:number):Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/condidat/delete/${condidatId}`);
}
}
