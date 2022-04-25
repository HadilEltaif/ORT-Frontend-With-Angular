import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondidatsComponent } from 'src/app/components/condidats/condidats.component';
import { RecruteursComponent } from 'src/app/components/recruteurs/recruteurs.component';
import { AdminnComponent } from './components/adminn/adminn.component';

const routes: Routes = [
  {path:'',component:AdminnComponent,
children:[
  {path:'candidats',component:CondidatsComponent},
  {path:'recruteurs',component:RecruteursComponent},
  { path: '',   redirectTo: '/admin/candidats', pathMatch: 'full' },
]},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
