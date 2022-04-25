import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Offre} from'../../models/offre'
import {OffreService} from'../../services/offre.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listoffre',
  templateUrl: './listoffre.component.html',
  styleUrls: ['./listoffre.component.css']
})
export class ListoffreComponent implements OnInit {

 public offres: Offre[];
  public offre: Offre;


  constructor(private offreService:OffreService ,private router:Router) { }

  ngOnInit() {
    this.getOffres();
  }
  public getOffres():void{
    this.offreService.getOffres().subscribe(
      (response:Offre[])=>{
        this.offres=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  pastuler(){
    this.router.navigate(['../signin'])
  }
  public searchOffres(key: string): void {
    console.log(key);
    const results: Offre[] = [];
    for (const offre of this.offres) {
      if (offre.region.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || offre.domaine.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || offre.titre.toLowerCase().indexOf(key.toLowerCase()) !== -1
     ) {
        results.push(offre);
      }
    }
    this.offres = results;
    if (results.length === 0 || !key) {
      this.getOffres();
    }
  }


}
