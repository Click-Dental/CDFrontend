import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Dentista } from 'src/app/models/dentista';
import { DentistaService } from 'src/app/services/dentista.service';

@Component({
  selector: 'app-registrar-dentista',
  templateUrl: './registrar-dentista.component.html',
  styleUrls: ['./registrar-dentista.component.css']
})
export class RegistrarDentistaComponent implements OnInit {
  dentistaForm: FormGroup;
  titulo = 'Registrar dentista';
  id: string | null;
  
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _dentistaService: DentistaService,
              private aRouter: ActivatedRoute) { 
    this.dentistaForm = this.fb.group({
      nombre: ['', Validators.required],
      especialidad: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarDentista() {
    const DENTISTA: Dentista = {
      nombre: this.dentistaForm.get('nombre')?.value,
      especialidad: this.dentistaForm.get('especialidad')?.value,
    }

    if(this.id !== null){
      this._dentistaService.editarDentista(this.id, DENTISTA).subscribe(data => {
        this.toastr.success('El dentista fue actualizado con exito!', 'Dentista Actualizado!');
        this.router.navigate(['/dentistas']);
      })
    } else {
      console.log(DENTISTA);
      this._dentistaService.guardarDentista(DENTISTA).subscribe(data => {
      this.toastr.success('El dentista fue registrado con exito!', 'Dentista Registrado!');
      this.router.navigate(['/dentistas']);
      }, error => {
      console.log(error);
      this.dentistaForm.reset();
      })
    }
  }


  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar dentista';
      this._dentistaService.obtenerDentista(this.id).subscribe(data => {
        this.dentistaForm.setValue({
          nombre: data.nombre,
          especialidad: data.especialidad,
        })
      })
    }
  }

}
