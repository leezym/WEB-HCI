import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/Ingreso', pathMatch: 'full'},
  { path: 'Ingreso', component: IngresoComponent },
  { path: 'Registro', component: RegistroComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'Information/:id', component: InformationComponent},
  { path: 'Profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
