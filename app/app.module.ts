import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarPacienteComponent } from './components/registrar-paciente/registrar-paciente.component';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { LandingComponent } from './components/landing/landing.component';
import { HistorialPacienteComponent } from './components/historial-paciente/historial-paciente.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ListaDentistasComponent } from './components/lista-dentistas/lista-dentistas.component';
import { RegistrarDentistaComponent } from './components/registrar-dentista/registrar-dentista.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrarPacienteComponent,
    ListaPacientesComponent,
    LandingComponent,
    HistorialPacienteComponent,
    LoginComponent,
    SignupComponent,
    ListaDentistasComponent,
    RegistrarDentistaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
