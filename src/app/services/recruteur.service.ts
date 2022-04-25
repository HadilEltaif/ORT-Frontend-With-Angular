import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Recruteur} from '../models/recruteur'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RecruteurService {
  public getRecruteurById(RecruteurId:number):Observable<Recruteur>{
    return this.http.get<Recruteur>(`${this.apiServerUrl}/recruteur/find/${RecruteurId}`);
  }
  private apiServerUrl  =environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
public getRecruteurs():Observable<Recruteur[]>{
   return this.http.get<Recruteur[]>(`${this.apiServerUrl}/recruteur/all`);
 }
 public addRecruteur(recuteur:Recruteur):Observable<Recruteur>{
  return this.http.post<Recruteur>(`${this.apiServerUrl}/recruteur/add`,recuteur);
}
public updateRecruteur(recuteur:Recruteur):Observable<Recruteur>{
  return this.http.put<Recruteur>(`${this.apiServerUrl}/recruteur/update`,recuteur);
}
public deleteRecruteur(recuteurId:number):Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/recruteur/delete/${recuteurId}`);
}
}
