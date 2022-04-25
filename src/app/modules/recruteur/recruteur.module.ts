import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruteurRoutingModule } from './recruteur-routing.module';
import { HeaderrComponent } from './components/headerr/headerr.component';
import { FooterrComponent } from './components/footerr/footerr.component';
import { HomerComponent } from './components/homer/homer.component';
import { CreateOffreComponent } from './components/create-offre/create-offre.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderrComponent,
    FooterrComponent,

    HomerComponent,
    CreateOffreComponent
  ],
  imports: [
    CommonModule,
    RecruteurRoutingModule,
    HttpClientModule,
    FormsModule
    
  ]
})
export class RecruteurModule { }
