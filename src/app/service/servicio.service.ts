import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignatura } from '../domain/asignatura';
import { Calificacion } from '../domain/calificacion';
import { Docente } from '../domain/docente';
import { Estudiante } from '../domain/estudiante';
import { Horario } from '../domain/horario';
import { Matricula } from '../domain/matricula';
import { Registro } from '../domain/registro';
import { inicioSesion } from '../domain/inicioSesion';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  getInicioSesion(sesion: inicioSesion) {
    let url = "http://localhost:3000/registro/login"
    return this.http.post<any>(url, sesion);
  }

  getAsignatura() {
    let url = "http://localhost:3000/asignatura"
    return this.http.get<any>(url);
  }

  postAsignatura(asignatura: Asignatura){

    let url = "http://localhost:3000/asignatura";
    return this.http.post<any>(url, asignatura);

  }

  getCalificaciones() {
    let url = "http://localhost:3000/calificaciones"
    return this.http.get<any>(url);
  }

  postCalificaciones(calificacion: Calificacion){

    let url = "http://localhost:3000/calificaciones";
    return this.http.post<any>(url, calificacion);

  }

  getDocentes() {
    let url = "http://localhost:3000/docentes"
    return this.http.get<any>(url);
  }

  postDocentes(docente: Docente){

    let url = "http://localhost:3000/docentes";
    return this.http.post<any>(url, docente);

  }

  getEstudiante() {
    let url = "http://localhost:3000/estudiantes"
    return this.http.get<any>(url);
  }

  postEstudiante(estudiante: Estudiante){

    let url = "http://localhost:3000/estudiantes";
    return this.http.post<any>(url, estudiante);

  }

  getHorario() {
    let url = "http://localhost:3000/horario"
    return this.http.get<any>(url);
  }

  postHorario(horario: Horario){

    let url = "http://localhost:3000/horario";
    return this.http.post<any>(url, horario);

  }

  getMatriculas() {
    let url = "http://localhost:3000/matricula"
    return this.http.get<any>(url);
  }

  postMatriculas(matricula: Matricula){

    let url = "http://localhost:3000/matricula";
    return this.http.post<any>(url, matricula);

  }

  getRegistro() {
    let url = "http://localhost:3000/registro"
    return this.http.get<any>(url);
  }

  postRegistro(registro: Registro){

    let url = "http://localhost:3000/registro";
    return this.http.post<any>(url, registro);

  }

}
