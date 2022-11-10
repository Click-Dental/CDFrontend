import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { RegistrarPacienteComponent } from './components/registrar-paciente/registrar-paciente.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: 'inicio', component: LandingComponent},
  { path: '', component: ListaPacientesComponent },
  { path: 'registrarPaciente', component: RegistrarPacienteComponent },
  { path: 'editarPaciente/:id', component: RegistrarPacienteComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
