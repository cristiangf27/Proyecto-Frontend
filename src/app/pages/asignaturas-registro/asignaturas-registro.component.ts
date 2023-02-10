import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asignatura } from '../../domain/asignatura';
import { ServicioService } from '../../service/servicio.service';

@Component({
  selector: 'app-asignaturas-registro',
  templateUrl: './asignaturas-registro.component.html',
  styleUrls: ['./asignaturas-registro.component.scss']
})
export class AsignaturasRegistroComponent implements OnInit {

  asignatura: Asignatura = new Asignatura();
  asignaturas: any;

  constructor(private route: Router, private servicio: ServicioService) { }

  ngOnInit(): void {

    this.getAsignatura();
  
  }

  regresar(){
    this.route.navigate(["principalLoggin"])
  }

  registro(){
    //console.log(this.asignatura)
    this.servicio.postAsignatura(this.asignatura).subscribe(data => console.log(data));
    this.asignatura = new Asignatura();
    this.asignaturas = []
    this.getAsignatura();

  }

  getAsignatura(){

    this.servicio.getAsignatura().subscribe(data => this.asignaturas = data);

  }

}
