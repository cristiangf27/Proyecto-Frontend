import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from '../../domain/registro';
import { ServicioService } from '../../service/servicio.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  registro: Registro = new Registro();

  constructor(private route: Router, private servicio: ServicioService) { }

  ngOnInit(): void {
  }

  registrarse(){
    //console.log(this.registro)
    this.servicio.postRegistro(this.registro).subscribe(data => console.log(data));
    this.route.navigate(['sesion'])
    
  }

  regresar(){
    this.route.navigate(['sesion'])
  }

}
