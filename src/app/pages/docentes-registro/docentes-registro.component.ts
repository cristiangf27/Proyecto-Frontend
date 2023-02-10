import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Docente } from '../../domain/docente';
import { ServicioService } from '../../service/servicio.service';

@Component({
  selector: 'app-docentes-registro',
  templateUrl: './docentes-registro.component.html',
  styleUrls: ['./docentes-registro.component.scss']
})
export class DocentesRegistroComponent implements OnInit {

  docente: Docente = new Docente();
  docentes: any;
  
  constructor(private route: Router, private servicio: ServicioService) { }

  ngOnInit(): void {

    this.getDocentes();

  }

  regresar(){
    this.route.navigate(["principalLoggin"])
  }

  registro(){
    //console.log(this.docente)
    this.servicio.postDocentes(this.docente).subscribe(data => console.log(data));
    this.docente = new Docente();
    this.getDocentes();
    
  }

  getDocentes(){

    this.servicio.getDocentes().subscribe(data => this.docentes = data);

  }

}
