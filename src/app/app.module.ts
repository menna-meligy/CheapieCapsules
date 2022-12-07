import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { DemandersComponent } from './demanders/demanders.component';
import { RegisterpharmacistsComponent } from './registerpharmacists/registerpharmacists.component';
import { MedicinesformComponent } from './medicinesform/medicinesform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RigesterComponent } from './routes/register/rigester.component';
import { AuthInterceptor } from './auth.interceptor';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { UserOrderComponent } from './demanders/user-order/user-order.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfiermationComponent } from './confiermation/confiermation.component';
import { GiverComponent } from './giver/giver.component';
import { BuyerComponent } from './buyer/buyer.component';
@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    routingComponents,
    HomeComponent,
    RigesterComponent,
    ServicesComponent,
    SuppliersComponent,
    DemandersComponent,
    RegisterpharmacistsComponent,
    MedicinesformComponent,
    UserOrderComponent,
    ConfiermationComponent,
    GiverComponent,
    BuyerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    MatChipsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      maxOpened: 1,
    }),
    MatSelectModule,
    MatDatepickerModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  entryComponents: [ConfiermationComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
