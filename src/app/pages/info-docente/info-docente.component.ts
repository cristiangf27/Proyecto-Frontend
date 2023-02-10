import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-docente',
  templateUrl: './info-docente.component.html',
  styleUrls: ['./info-docente.component.scss']
})
export class InfoDocenteComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.route.navigate(['principal'])
  }

}
