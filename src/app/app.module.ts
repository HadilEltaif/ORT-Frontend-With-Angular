import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SigninComponent } from './components/signin/signin.component';
import { OffreComponent } from './components/offre/offre.component';
import { SignupComponent } from './components/signup/signup.component';
import { ListoffreComponent } from './components/listoffre/listoffre.component';
import { CondidatComponent } from './components/condidat/condidat.component';
import { ListcondidatComponent } from './components/listcondidat/listcondidat.component';
import { CondidatsComponent } from './components/condidats/condidats.component';
import {CondidatsService} from './services/condidats.service'
import {RecruteurService} from './services/recruteur.service'
import {AdminService} from './services/admin.service'
import {OffreService} from './services/offre.service'
import { FormsModule } from '@angular/forms';

import { RecruteurprofileComponent } from './components/recruteurprofile/recruteurprofile.component';
import { RecruteurComponent } from './components/recruteur/recruteur.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ListrecruteurComponent } from './components/listrecruteur/listrecruteur.component';
import { RecruteursComponent } from './components/recruteurs/recruteurs.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { SiginadComponent } from './components/siginad/siginad.component';
import { SigninreComponent } from './components/signinre/signinre.component';
import { SignuprComponent } from './components/signupr/signupr.component';

 

@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    HeaderComponent,
    SigninComponent,
    OffreComponent,
    SignupComponent,
    ListoffreComponent,
    CondidatComponent,
    ListcondidatComponent,
    CondidatsComponent,
   
    RecruteurprofileComponent,
  
    RecruteurComponent,
    NotFoundComponent,
    ContactUsComponent,
  
    ListrecruteurComponent,
    RecruteursComponent,
    ForgetPasswordComponent,
    SiginadComponent,
    SigninreComponent,
    SignuprComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  AppRoutingModule,
  NgbModule,
  FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [CondidatsService,
    RecruteurService,
    AdminService,
    OffreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
