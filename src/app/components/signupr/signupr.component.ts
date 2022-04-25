import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { CondidatsService } from 'src/app/services/condidats.service';
import {  NgForm } from '@angular/forms';
import {Recruteur} from'../../models/recruteur'
import { HttpErrorResponse } from '@angular/common/http';
import { RecruteurService } from 'src/app/services/recruteur.service';

@Component({
  selector: 'app-signupr',
  templateUrl: './signupr.component.html',
  styleUrls: ['./signupr.component.css']
})
export class SignuprComponent implements OnInit {

  faLock = faLock;
  constructor(private recruteursService:RecruteurService) { }

  ngOnInit(): void {
  }
  public onAddRecruteur(addForm: NgForm): void {
    document.getElementById('add-condidat-form')?.click();
    this.recruteursService.addRecruteur(addForm.value).subscribe(
      (response: Recruteur) => {
        console.log(response);
        
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


}
