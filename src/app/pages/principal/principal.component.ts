import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  inicioSesion(){
    this.route.navigate(["sesion"]);
  }

  estudiante(){
    this.route.navigate(['infoEstudiante']);
  }

  matricula(){
    this.route.navigate(['infoMatricula']);
  }

  docente(){
    this.route.navigate(['infoDocente']);
  }

  modalidad(){
    this.route.navigate(['infomodalidad']);
  }

  oferta(){
    this.route.navigate(['infooferta']);
  }

}
