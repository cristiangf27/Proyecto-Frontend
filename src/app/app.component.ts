import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { autentificacion } from './domain/singleton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private route: Router, private aut: autentificacion){}

  title = 'ProyectoEscuela';
  sesion = "Iniciar Sesion"

  ngOnInit(): void {
    if(this.aut.getUsuario()!=null){
      this.sesion="Cerrar Sesion"
    }else{
      this.sesion = "Iniciar Sesion"
    }
  }
  
  inicio(){
    if(this.aut.getUsuario()!=null){
      this.route.navigate(['principalLoggin'])
    }else{
      this.route.navigate(['principal'])
    }
  }

  inicioSesion(){
    if(this.sesion == "Cerrar Sesion"  ){
      location.reload();
      this.route.navigate(['principal'])
    }else{
      this.route.navigate(['sesion'])
    }
    if(this.aut.getUsuario()!=null){
       this.sesion="Cerrar Sesion"
    }else{
       this.sesion = "Iniciar Sesion"
    }
  }

  acercade(){
    this.route.navigate(['acercaDe'])
      if(this.aut.getUsuario()!=null){
      this.sesion="Cerrar Sesion"
    }else{
      this.sesion = "Iniciar Sesion"
    }
  }
}
