import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondidatComponent } from 'src/app/components/condidat/condidat.component';
import { ListoffreComponent } from 'src/app/components/listoffre/listoffre.component';
import { RecruteurComponent } from 'src/app/components/recruteur/recruteur.component';
import { CreateOffreComponent } from './components/create-offre/create-offre.component';
import { HomerComponent } from './components/homer/homer.component';

const routes: Routes = [{path:'',component:HomerComponent,
children:[
  {path:'offres',component:ListoffreComponent},
  {path:'condidat',component:CondidatComponent},
  {path:'recruteur',component:RecruteurComponent},
  {path:'createOffre',component:CreateOffreComponent},
  { path: '',   redirectTo: '/homer/recruteur', pathMatch: 'full' },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruteurRoutingModule { }
