import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from '../../domain/estudiante';
import { ServicioService } from '../../service/servicio.service';

@Component({
  selector: 'app-estudiante-registro',
  templateUrl: './estudiante-registro.component.html',
  styleUrls: ['./estudiante-registro.component.scss']
})
export class EstudianteRegistroComponent implements OnInit {

  estudiante: Estudiante = new Estudiante();
  estudiantes: any;

  constructor(private route: Router, private servicio: ServicioService) { }

  ngOnInit(): void {

    this.getEstudiantes();

  }

  regresar(){
    this.route.navigate(["principalLoggin"])
  }

  registro(){
    //console.log(this.estudiante)
    this.servicio.postEstudiante(this.estudiante).subscribe(data => console.log(data));
    this.estudiante = new Estudiante();
    this.getEstudiantes();
  }

  getEstudiantes(){

    this.servicio.getEstudiante().subscribe(data => this.estudiantes = data);
    
  }

}
