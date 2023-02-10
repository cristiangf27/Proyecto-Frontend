import { Component, OnInit } from '@angular/core';
import { Calificacion } from '../../domain/calificacion';
import { Router } from '@angular/router';
import { ServicioService } from '../../service/servicio.service';

@Component({
  selector: 'app-calificaciones-registro',
  templateUrl: './calificaciones-registro.component.html',
  styleUrls: ['./calificaciones-registro.component.scss']
})
export class CalificacionesRegistroComponent implements OnInit {

  calificacion: Calificacion = new Calificacion();
  calificaciones: any;

  constructor(private route: Router, private servicio: ServicioService) { }

  ngOnInit(): void {

    this.getCalificaciones()

  }

  regresar(){
    this.route.navigate(["principalLoggin"])
  }

  registro(){
    //console.log(this.calificacion)
    this.servicio.postCalificaciones(this.calificacion).subscribe(data => console.log(data));
    this.calificacion = new Calificacion();
    this.getCalificaciones()
  
  }

  getCalificaciones(){

    this.servicio.getCalificaciones().subscribe(data => this.calificaciones=data);
    
  }

}
