import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ToggleComponent } from './toggle/toggle.component';
import { LoginComponent } from './routes/login/login.component';
import { RigesterComponent } from './routes/register/rigester.component';
import { PasswordComponent } from './routes/password/password.component';
import { ChartComponent } from './routes/chart/chart.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { DemandersComponent } from './demanders/demanders.component';
import { RegisterpharmacistsComponent } from './registerpharmacists/registerpharmacists.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'chart' , component:ChartComponent },
  {path:'toggle' , component:ToggleComponent },
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RigesterComponent},
  {path:'services' , component:ServicesComponent},
  {path:'suppliers' , component:SuppliersComponent},
  {path:'demanders' , component:DemandersComponent},
  {path:'registerpharmacists' , component:RegisterpharmacistsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NavbarComponent,ToggleComponent, LoginComponent,RigesterComponent, PasswordComponent];
