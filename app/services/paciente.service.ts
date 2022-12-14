import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  url = 'http://localhost:4000/api/pacientes/';

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<any> {
    return this.http.get(this.url);
  }

  guardarPaciente(paciente: Paciente): Observable<any> {
    return this.http.post(this.url, paciente);
  }
  
  eliminarPaciente(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  obtenerPaciente(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarPaciente(id: string, paciente: Paciente): Observable<any>{
    return this.http.put(this.url + id, paciente);
  }
}