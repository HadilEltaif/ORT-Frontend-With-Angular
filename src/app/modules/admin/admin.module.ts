import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminnComponent } from './components/adminn/adminn.component';

import { FooteradComponent } from './components/footerad/footerad.component';
import { HeaderadComponent } from './components/headerad/headerad.component';

@NgModule({
  declarations: [
    AdminnComponent,
   
    FooteradComponent,
    HeaderadComponent,
   
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
   
  
  ]
})
export class AdminModule { }
