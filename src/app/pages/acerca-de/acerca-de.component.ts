import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { autentificacion } from '../../domain/singleton';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit {

  constructor(private route: Router, private aut: autentificacion) { }

  ngOnInit(): void {
  }

  regresar(){
    if(this.aut.getUsuario()!=null){
      this.route.navigate(['principalLoggin'])
    }else{
      this.route.navigate(['principal'])
    }
  }
}
