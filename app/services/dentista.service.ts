import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dentista } from '../models/dentista';

@Injectable({
  providedIn: 'root'
})
export class DentistaService {
  url = 'http://localhost:4000/api/dentistas/';

  constructor(private http: HttpClient) { }

  getDentistas(): Observable<any> {
    return this.http.get(this.url);
  }

  guardarDentista(dentista: Dentista): Observable<any> {
    return this.http.post(this.url, dentista);
  }
  
  eliminarDentista(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  obtenerDentista(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarDentista(id: string, dentista: Dentista): Observable<any>{
    return this.http.put(this.url + id, dentista);
  }
}
