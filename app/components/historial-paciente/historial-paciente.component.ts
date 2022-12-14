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
      nhc: ['', Validators.required],
      codigo: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      nombres: ['', Validators.required],
      edad: ['', Validators.required],
      sexo: ['', Validators.required],
      lugarNacimiento: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      ocupacion: ['', Validators.required],
      direccion: ['', Validators.required],
      celular: ['', Validators.required],

      antecedentesPatologicosFamiliares: ['', Validators.required],
      antecedentesPatologicosPersonales: [''],
      atm: ['', Validators.required],
      ganglioslinfaticos: ['', Validators.required],
      respirador: ['', Validators.required],
      otrosExamenExtraOral: ['', Validators.required],
      labios: ['', Validators.required],
      lengua: ['', Validators.required],
      paladar: ['', Validators.required],
      pisoDeLaBoca: ['', Validators.required],
      mucosaYugal: ['', Validators.required],
      encias: ['', Validators.required],
      fechaUltimaVisita: ['', Validators.required],
      habitos: ['', Validators.required],
      protesis: ['', Validators.required],
      cepillo: ['', Validators.required],
      hilo: ['', Validators.required],
      enjuague: ['', Validators.required],
      frecuenciaCepillado: ['', Validators.required],
      sangreEncias: ['', Validators.required],
      higieneDental: ['', Validators.required],
      problemaTratamiento: ['', Validators.required],
      observaciones: ['', Validators.required],
      motivoConsulta: ['', Validators.required],
      examenClinico: ['', Validators.required],
      diagnostico: ['', Validators.required],
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
        this.router.navigate(['/listaPacientes']);
      })
    } else {
      console.log(PACIENTE);
      this._pacienteService.guardarPaciente(PACIENTE).subscribe(data => {
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
          nhc: data.nhc,
          codigo: data.codigo,
          apellidoPaterno: data.apellidoPaterno,
          apellidoMaterno: data.apellidoMaterno,
          nombres: data.nombres,
          edad: data.edad,
          sexo: data.sexo,
          lugarNacimiento: data.lugarNacimiento,
          fechaNacimiento: data.fechaNacimiento,
          ocupacion: data.ocupacion,
          direccion: data.direccion,
          celular: data.celular,
          antecedentesPatologicosFamiliares: data.antecedentesPatologicosFamiliares,
          antecedentesPatologicosPersonales: data.antecedentesPatologicosPersonales,
          atm: data.atm,
          ganglioslinfaticos: data.ganglioslinfaticos,
          respirador: data.respirador,
          otrosExamenExtraOral: data.otrosExamenExtraOral,
          labios: data.labios,
          lengua: data.lengua,
          paladar: data.paladar,
          pisoDeLaBoca: data.pisoDeLaBoca,
          mucosaYugal: data.mucosaYugal,
          encias: data.encias,
          fechaUltimaVisita: data.fechaUltimaVisita,
          habitos: data.habitos,
          protesis: data.protesis,
          cepillo: data.cepillo,
          hilo: data.hilo,
          enjuague: data.enjuague,
          frecuenciaCepillado: data.frecuenciaCepillado,
          sangreEncias: data.sangreEncias,
          higieneDental: data.higieneDental,
          problemaTratamiento: data.problemaTratamiento,
          observaciones: data.observaciones,
          motivoConsulta: data.motivoConsulta,
          examenClinico: data.examenClinico,
          diagnostico: data.diagnostico,
        })
      })
    }
  }
}