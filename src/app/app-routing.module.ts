import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CondidatsComponent } from './components/condidats/condidats.component';
import { RecruteursComponent } from './components/recruteurs/recruteurs.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ListoffreComponent } from './components/listoffre/listoffre.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { AuthadGuard } from './guards/authad.guard';
import { AuthGuard } from './guards/auth.guard';
import { SiginadComponent } from './components/siginad/siginad.component';
import { SigninreComponent } from './components/signinre/signinre.component';
import { CondidatComponent } from './components/condidat/condidat.component';
import { SignuprComponent } from './components/signupr/signupr.component';
import { AuthreGuard } from './guards/authre.guard';
const ROUTES:Routes=[
  {path:'home',component:HeaderComponent},
  {path:'admin',
  canActivate:[AuthadGuard]
    ,loadChildren:()=>import('./modules/admin/admin.module').then((m)=>m.AdminModule)},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'siginad',component:SiginadComponent},
  {path:'signinre',component:SigninreComponent},
  {path:'condidat',component:CondidatComponent},
  {path:'homec',canActivate:[AuthGuard],loadChildren:()=>import('./modules/condidat/condidat.module').then((m)=>m.CondidatModule)},
  {path:'homer',canActivate:[AuthreGuard],loadChildren:()=>import('./modules/recruteur/recruteur.module').then((m)=>m.RecruteurModule)},
   
  {path:'signup',component:SignupComponent},
    {path:'signupr',component:SignuprComponent},
    {path:'signin',component:SigninComponent},
    {path:'offres',component:ListoffreComponent}, 
     { path: '',   redirectTo: '/home', pathMatch: 'full' },

    {path:'**',component:NotFoundComponent}


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
