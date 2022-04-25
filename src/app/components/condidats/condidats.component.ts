import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Condidat} from'../../models/condidat'
import {CondidatsService} from'../../services/condidats.service'
import {  NgForm } from '@angular/forms';
@Component({
  selector: 'app-condidats',
  templateUrl: './condidats.component.html',
  styleUrls: ['./condidats.component.css']
})
export class CondidatsComponent implements OnInit {
  public condidats: Condidat[];
  public editCondidat: Condidat;
  public deleteCondidat: Condidat;

  

  constructor(private condidatsService:CondidatsService ) { }

  ngOnInit() {
    this.getCondidats();
  }
  public getCondidats():void{
    this.condidatsService.getCondidats().subscribe(
      (response:Condidat[])=>{
        this.condidats=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  public onAddCondidat(addForm: NgForm): void {
    document.getElementById('add-condidat-form')?.click();
    this.condidatsService.addCondidat(addForm.value).subscribe(
      (response: Condidat) => {
        console.log(response);
        this.getCondidats();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateCondidat(condidat: Condidat): void {
    this.condidatsService.updateCondidat(condidat).subscribe(
      (response: Condidat) => {
        console.log(response);
        this.getCondidats();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCondidat(condidatId: number): void {
    this.condidatsService.deleteCondidat(condidatId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCondidats();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchCondidats(key: string): void {
    console.log(key);
    const results: Condidat[] = [];
    for (const condidat of this.condidats) {
      if (condidat.prenom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || condidat.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || condidat.pseudo.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || condidat.fonction.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(condidat);
      }
    }
    this.condidats = results;
    if (results.length === 0 || !key) {
      this.getCondidats();
    }
  }

  public onOpenModal(condidat: Condidat, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';

    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
     
      button.setAttribute('data-target', '#addCondidatModal');
    }
    if (mode === 'edit') {
      this.editCondidat = condidat;
      button.setAttribute('data-target', '#updateCondidatModal');
    }
    if (mode === 'delete') {
      this.deleteCondidat = condidat;
      button.setAttribute('data-target', '#deleteCondidatModal');
    }
   container?.appendChild(button);
    button.click();
  }
 

}
