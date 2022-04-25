import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Recruteur} from'../../models/recruteur'
import {RecruteurService} from'../../services/recruteur.service'
import {  NgForm } from '@angular/forms';
@Component({
  selector: 'app-recruteurs',
  templateUrl: './recruteurs.component.html',
  styleUrls: ['./recruteurs.component.css']
})
export class RecruteursComponent implements OnInit {

  public recruteurs: Recruteur[];
  public editRecruteur: Recruteur;
  public deleteRecruteur: Recruteur;
  
  

  constructor(private recruteurService:RecruteurService ) { }

  ngOnInit() {
    this.getRecruteurs();
  }
  public getRecruteurs():void{
    this.recruteurService.getRecruteurs().subscribe(
      (response:Recruteur[])=>{
        this.recruteurs=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  public onAddRecruteur(addForm: NgForm): void {
    document.getElementById('add-Recruteur-form')?.click();
    this.recruteurService.addRecruteur(addForm.value).subscribe(
      (response: Recruteur) => {
        console.log(response);
        this.getRecruteurs();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateRecruteur(recruteur: Recruteur): void {
    this.recruteurService.updateRecruteur(recruteur).subscribe(
      (response: Recruteur) => {
        console.log(response);
        this.getRecruteurs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteRecruteur(RecruteurId: number): void {
    this.recruteurService.deleteRecruteur(RecruteurId).subscribe(
      (response: void) => {
        console.log(response);
        this.getRecruteurs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchRecruteurs(key: string): void {
    console.log(key);
    const results: Recruteur[] = [];
    for (const recruteur of this.recruteurs) {
      if (recruteur.prenom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || recruteur.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || recruteur.pseudo.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || recruteur.fonction.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(recruteur);
      }
    }
    this.recruteurs = results;
    if (results.length === 0 || !key) {
      this.getRecruteurs();
    }
  }

  public onOpenModal(recruteur: Recruteur, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';

    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
     
      button.setAttribute('data-target', '#addRecruteurModal');
    }
    if (mode === 'edit') {
      this.editRecruteur = recruteur;
      button.setAttribute('data-target', '#updateRecruteurModal');
    }
    if (mode === 'delete') {
      this.deleteRecruteur = recruteur;
      button.setAttribute('data-target', '#deleteRecruteurModal');
    }
   container?.appendChild(button);
    button.click();
  }

}
