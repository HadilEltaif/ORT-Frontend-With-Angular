import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Condidat } from 'src/app/models/condidat';
import { CondidatsService } from 'src/app/services/condidats.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 faLock = faLock;
  constructor(private condidatsService:CondidatsService) { }

  ngOnInit(): void {
  }
  public onAddCondidat(addForm: NgForm): void {
    document.getElementById('add-condidat-form')?.click();
    this.condidatsService.addCondidat(addForm.value).subscribe(
      (response: Condidat) => {
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
