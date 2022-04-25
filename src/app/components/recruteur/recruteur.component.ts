import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Recruteur} from'../../models/recruteur'
import {RecruteurService} from'../../services/recruteur.service'
import {  NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recruteur',
  templateUrl: './recruteur.component.html',
  styleUrls: ['./recruteur.component.css']
})
export class RecruteurComponent implements OnInit {
  public editRecruteur: Recruteur;
  public deleteRecruteur: Recruteur;
  id:number;
  recruteur:Recruteur;
  constructor(private route :ActivatedRoute,private RecruteursService:RecruteurService) { }
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getRecruteurById(this.id);
  }
  public getRecruteurById(RecruteurId: number):void{
    this.RecruteursService.getRecruteurById(1).subscribe(
      (response:Recruteur)=>{
        this.recruteur=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }


  

 
 
  public onUpdateRecruteur(Recruteur: Recruteur): void {
    this.RecruteursService.updateRecruteur(Recruteur).subscribe(
      (response: Recruteur) => {
        console.log(response);
        this.getRecruteurById(21);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteRecruteur(RecruteurId: number): void {
    this.RecruteursService.deleteRecruteur(RecruteurId).subscribe(
      (response: void) => {
        console.log(response);
  
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModal(Recruteur: Recruteur, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';

    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
     
      button.setAttribute('data-target', '#addRecruteurModal');
    }
    if (mode === 'edit') {
      this.editRecruteur = Recruteur;
      button.setAttribute('data-target', '#updateRecruteurModal');
    }
    if (mode === 'delete') {
      this.deleteRecruteur = Recruteur;
      button.setAttribute('data-target', '#deleteRecruteurModal');
    }
   container?.appendChild(button);
    button.click();
  }

}
