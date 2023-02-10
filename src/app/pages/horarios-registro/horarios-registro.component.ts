import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Horario } from '../../domain/horario';
import { ServicioService } from '../../service/servicio.service';

@Component({
  selector: 'app-horarios-registro',
  templateUrl: './horarios-registro.component.html',
  styleUrls: ['./horarios-registro.component.scss']
})
export class HorariosRegistroComponent implements OnInit {

  horario: Horario = new Horario();
  horarios: any;

  constructor(private route: Router, private servicio: ServicioService) { }

  ngOnInit(): void {

    this.getHorarios();
  }

  regresar(){
    this.route.navigate(["principalLoggin"])
  }

  registro(){
    //console.log(this.horario)
    this.servicio.postHorario(this.horario).subscribe(data => console.log(data));
    this.horario = new Horario();
    this.getHorarios();

  }

  getHorarios(){

    this.servicio.getHorario().subscribe(data => this.horarios = data);

  }

}
