import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondidatComponent } from 'src/app/components/condidat/condidat.component';
import { ListoffreComponent } from 'src/app/components/listoffre/listoffre.component';
import { HomecComponent } from './components/homec/homec.component';

const routes: Routes = [
{path:'',component:HomecComponent,
children:[
  {path:'offres',component:ListoffreComponent},
  {path:'condidat',component:CondidatComponent},
  { path: '',   redirectTo: '/homec/offres', pathMatch: 'full' },
]}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondidatRoutingModule { }
