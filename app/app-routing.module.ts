import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { RegistrarPacienteComponent } from './components/registrar-paciente/registrar-paciente.component';
import { LandingComponent } from './components/landing/landing.component';
import { HistorialPacienteComponent } from './components/historial-paciente/historial-paciente.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: 'inicio', component: LandingComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: 'historialPaciente/:id', component: HistorialPacienteComponent},
  { path: 'listaPacientes', component: ListaPacientesComponent },
  { path: 'registrarPaciente', component: RegistrarPacienteComponent },
  { path: 'editarPaciente/:id', component: RegistrarPacienteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
