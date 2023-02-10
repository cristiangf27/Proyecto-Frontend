import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Matricula } from '../../domain/matricula';
import { ServicioService } from '../../service/servicio.service';

@Component({
  selector: 'app-matriculas-registro',
  templateUrl: './matriculas-registro.component.html',
  styleUrls: ['./matriculas-registro.component.scss']
})
export class MatriculasRegistroComponent implements OnInit {

  matricula: Matricula = new Matricula();
  matriculas: any;

  constructor(private route: Router, private servicio: ServicioService) { }

  ngOnInit(): void {

    this.getMatriculas();

  }

  regresar(){
    this.route.navigate(["principalLoggin"])
  }

  registro(){
    //console.log(this.matricula)
    this.servicio.postMatriculas(this.matricula).subscribe(data => console.log(data));
    this.matricula = new Matricula();
    this.getMatriculas();

  }

  getMatriculas(){

    this.servicio.getMatriculas().subscribe(data => this.matriculas = data);
  
  }

}
