import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Dentista } from 'src/app/models/dentista';
import { DentistaService } from 'src/app/services/dentista.service';

@Component({
  selector: 'app-lista-dentistas',
  templateUrl: './lista-dentistas.component.html',
  styleUrls: ['./lista-dentistas.component.css']
})
export class ListaDentistasComponent implements OnInit {
  listDentistas: Dentista[] = [];

  constructor(private _dentistaService: DentistaService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerDentistas();
  }


  obtenerDentistas() {
    this._dentistaService.getDentistas().subscribe(data => {
      console.log(data);
      this.listDentistas = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarDentista(id: any) {
    this._dentistaService.eliminarDentista(id).subscribe(data => {
      this.toastr.error('El dentista fue eliminado con exito' ,'Dentista Eliminado');
      this.obtenerDentistas();
    }, error => {
      console.log(error);
    })
  }
}
