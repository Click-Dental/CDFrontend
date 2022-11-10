import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';


@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {
  listPacientes: Paciente[] = [];

  constructor(private _pacienteService: PacienteService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerPacientes();
  }


  obtenerPacientes() {
    this._pacienteService.getPacientes().subscribe(data => {
      console.log(data);
      this.listPacientes = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarPaciente(id: any) {
    this._pacienteService.eliminarPaciente(id).subscribe(data => {
      this.toastr.error('El paciente fue eliminado con exito' ,'Paciente Eliminado');
      this.obtenerPacientes();
    }, error => {
      console.log(error);
    })
  }


}
