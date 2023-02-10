import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-estudiante',
  templateUrl: './info-estudiante.component.html',
  styleUrls: ['./info-estudiante.component.scss']
})
export class InfoEstudianteComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.route.navigate(['principal'])
  }

}
