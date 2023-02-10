import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-matriculas',
  templateUrl: './info-matriculas.component.html',
  styleUrls: ['./info-matriculas.component.scss']
})
export class InfoMatriculasComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.route.navigate(['principal'])
  }

}
