import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Condidat } from 'src/app/models/condidat';
import { CondidatsService } from 'src/app/services/condidats.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-condidat',
  templateUrl: './condidat.component.html',
  styleUrls: ['./condidat.component.css']
})
export class CondidatComponent implements OnInit {
  id:number;
  condidat:Condidat;
  constructor(private route :ActivatedRoute,private condidatsService:CondidatsService) { }
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getCondidatById(this.id);
  }
  public getCondidatById(condidatId: number):void{
    this.condidatsService.getCondidatById(1).subscribe(
      (response:Condidat)=>{
        this.condidat=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  public editCondidat: Condidat;
  public deleteCondidat: Condidat;

  

 
 
  public onUpdateCondidat(condidat: Condidat): void {
    this.condidatsService.updateCondidat(condidat).subscribe(
      (response: Condidat) => {
        console.log(response);
        this.getCondidatById(1);
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
  
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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
