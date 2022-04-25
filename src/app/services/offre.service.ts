import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Offre} from '../models/offre'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

   private apiServerUrl =environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
public getOffres():Observable<Offre[]>{
   return this.http.get<Offre[]>(`${this.apiServerUrl}/offre/all`);
 }
 public addOffre(offre:Offre):Observable<Offre>{
  return this.http.post<Offre>(`${this.apiServerUrl}/offre/add`,offre);
}
public updateOffre(offre:Offre):Observable<Offre>{
  return this.http.put<Offre>(`${this.apiServerUrl}/offre/update`,offre);
}
public deleteOffre(offreId:number):Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/offre/delete/${offreId}`);
}
}
