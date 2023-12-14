import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ImmobilierComponent } from './immobilier/immobilier.component';
import { ImmobilierListComponent } from './immobilier-list/immobilier-list.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  // ... other routes
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: 'immobil', component: ImmobilierComponent },
{ path: 'liste', component: ImmobilierListComponent },

{ path: 'profile/:userId', component: ProfileComponent }, 
{ path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
