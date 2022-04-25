import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {OffreService} from 'src/app/services/offre.service';
import {  NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Offre } from 'src/app/models/offre';
@Component({
  selector: 'app-create-offre',
  templateUrl: './create-offre.component.html',
  styleUrls: ['./create-offre.component.css']
})
export class CreateOffreComponent implements OnInit {

 
  constructor(private offreService:OffreService ) { }

  ngOnInit(): void {
  }
  public onAddOffre(addForm: NgForm): void {
    document.getElementById('add-condidat-form')?.click();
    this.offreService.addOffre(addForm.value).subscribe(
      (response: Offre) => {
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
