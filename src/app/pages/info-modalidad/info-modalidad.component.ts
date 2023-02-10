import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-modalidad',
  templateUrl: './info-modalidad.component.html',
  styleUrls: ['./info-modalidad.component.scss']
})
export class InfoModalidadComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.route.navigate(['principal'])
  }

}
