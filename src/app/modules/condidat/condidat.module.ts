import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondidatRoutingModule } from './condidat-routing.module';
import { HeadercComponent } from './components/headerc/headerc.component';
import { FootercComponent } from './components/footerc/footerc.component';

import { HomecComponent } from './components/homec/homec.component';


@NgModule({
  declarations: [
    HeadercComponent,
    FootercComponent,
   
    HomecComponent
  ],
  imports: [
    CommonModule,
    CondidatRoutingModule
    
  ]
})
export class CondidatModule { }
