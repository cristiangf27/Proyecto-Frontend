import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { autentificacion } from '../../domain/singleton';
import { ServicioService } from '../../service/servicio.service';
import { inicioSesion } from '../../domain/inicioSesion';
import { NgxToastService } from 'ngx-toast-notifier';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  sesion: inicioSesion = new inicioSesion();

  constructor(private route: Router, private aut: autentificacion, private servicio: ServicioService, private ngxToastService: NgxToastService) { }

  ngOnInit(): void {
    if(this.aut.getUsuario()!=null){
      this.route.navigate(['principalLoggin'])
    }
  }

  regresar(){
    this.route.navigate(['principal'])
  }

  registro(){
    this.route.navigate(['registro'])
  }

  loggin(){
    if(this.sesion.correo!=""){
      this.servicio.getInicioSesion(this.sesion).subscribe(data => {
        console.log(data)
        if(data==null){
          this.addDanger();
        }else{
          this.aut.setUsuario(data)
          this.addSuccess();
          this.route.navigate(['principalLoggin'])
          
        }
      }, error => {
        if(error.status === 404){
          this.addDanger();
        }
      });
    }else{
      this.addWarning();
    }
  }

  addSuccess():void{
    this.ngxToastService.onSuccess('Alerta','Inicio de sesion con éxito')
  }

  addDanger():void{
    this.ngxToastService.onDanger('Alerta','Usuario y/o contraseña incorrecta')
  }

  addWarning():void{
    this.ngxToastService.onWarning('Alerta','Llene los campos faltantes')
  }
  
}
