import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';


@Component({
  selector: 'app-historial-paciente',
  templateUrl: './historial-paciente.component.html',
  styleUrls: ['./historial-paciente.component.css']
})
export class HistorialPacienteComponent implements OnInit {
  pacienteForm: FormGroup;
  titulo = 'Registrar paciente';
  id: string | null;
  
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _pacienteService: PacienteService,
              private aRouter: ActivatedRoute) { 
    this.pacienteForm = this.fb.group({
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      nombres: ['', Validators.required],
      edad: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarPaciente() {
    const PACIENTE: Paciente = {
      nhc: this.pacienteForm.get('nhc')?.value,
      codigo: this.pacienteForm.get('codigo')?.value,
      apellidoPaterno: this.pacienteForm.get('apellidoPaterno')?.value,
      apellidoMaterno: this.pacienteForm.get('apellidoMaterno')?.value,
      nombres: this.pacienteForm.get('nombres')?.value,
      edad: this.pacienteForm.get('edad')?.value,
      sexo: this.pacienteForm.get('sexo')?.value,
      lugarNacimiento: this.pacienteForm.get('lugarNacimiento')?.value,
      fechaNacimiento: this.pacienteForm.get('fechaNacimiento')?.value,
      ocupacion: this.pacienteForm.get('ocupacion')?.value,
      direccion: this.pacienteForm.get('direccion')?.value,
      celular: this.pacienteForm.get('celular')?.value,
      antecedentesPatologicosFamiliares: this.pacienteForm.get('antecedentesPatologicosFamiliares')?.value,
      antecedentesPatologicosPersonales: this.pacienteForm.get('antecedentesPatologicosPersonales')?.value,
      atm: this.pacienteForm.get('atm')?.value,
      ganglioslinfaticos: this.pacienteForm.get('ganglioslinfaticos')?.value,
      respirador: this.pacienteForm.get('respirador')?.value,
      otrosExamenExtraOral: this.pacienteForm.get('otrosExamenExtraOral')?.value,
      labios: this.pacienteForm.get('labios')?.value,
      lengua: this.pacienteForm.get('lengua')?.value,
      paladar: this.pacienteForm.get('paladar')?.value,
      pisoDeLaBoca: this.pacienteForm.get('pisoDeLaBoca')?.value,
      mucosaYugal: this.pacienteForm.get('mucosaYugal')?.value,
      encias: this.pacienteForm.get('encias')?.value,
      fechaUltimaVisita: this.pacienteForm.get('fechaUltimaVisita')?.value,
      habitos: this.pacienteForm.get('habitos')?.value,
      protesis: this.pacienteForm.get('protesis')?.value,
      cepillo: this.pacienteForm.get('cepillo')?.value,
      hilo: this.pacienteForm.get('hilo')?.value,
      enjuague: this.pacienteForm.get('enjuague')?.value,
      frecuenciaCepillado: this.pacienteForm.get('frecuenciaCepillado')?.value,
      sangreEncias: this.pacienteForm.get('sangreEncias')?.value,
      higieneDental: this.pacienteForm.get('higieneDental')?.value,
      problemaTratamiento: this.pacienteForm.get('problemaTratamiento')?.value,
      observaciones: this.pacienteForm.get('observaciones')?.value,
      motivoConsulta: this.pacienteForm.get('motivoConsulta')?.value,
      examenClinico: this.pacienteForm.get('examenClinico')?.value,
      diagnostico: this.pacienteForm.get('diagnostico')?.value,

    }

    if(this.id !== null){
      this._pacienteService.editarPaciente(this.id, PACIENTE).subscribe(data => {
        this.toastr.success('El paciente fue actualizado con exito!', 'Paciente Actualizado!');
        this.router.navigate(['/listaPacientes']);
      })
    } else {
      console.log(PACIENTE);
      this._pacienteService.guardarPaciente(PACIENTE).subscribe(data => {
      this.toastr.success('El paciente fue registrado con exito!', 'Paciente Registrado!');
      this.router.navigate(['/listaPacientes']);
      }, error => {
      console.log(error);
      this.pacienteForm.reset();
      })
    }
  }


  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar paciente';
      this._pacienteService.obtenerPaciente(this.id).subscribe(data => {
        this.pacienteForm.setValue({
          apellidoPaterno: data.apellidoPaterno,
          apellidoMaterno: data.apellidoMaterno,
          nombres: data.nombres,
          edad: data.edad,
        })
      })
    }
  }
}
