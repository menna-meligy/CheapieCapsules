import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { DemandersComponent } from './demanders/demanders.component';
import { RegisterpharmacistsComponent } from './registerpharmacists/registerpharmacists.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    routingComponents,
    HomeComponent,
    ServicesComponent,
    SuppliersComponent,
    DemandersComponent,
    RegisterpharmacistsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
