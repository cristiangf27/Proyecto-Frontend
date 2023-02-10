import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-loggin',
  templateUrl: './principal-loggin.component.html',
  styleUrls: ['./principal-loggin.component.scss']
})
export class PrincipalLogginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  inicioSesion(){
    this.route.navigate(["sesion"]);
  }

  estudiante(){
    this.route.navigate(['estudiante']);
  }

  matricula(){
    this.route.navigate(['matricula']);
  }

  docente(){
    this.route.navigate(['docente']);
  }

  modalidad(){
    this.route.navigate(['asignatura']);
  }

  oferta(){
    this.route.navigate(['horario']);
  }
  
  calificaciones(){
    this.route.navigate(['calificacion']);
  }

}
