import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-oferta',
  templateUrl: './info-oferta.component.html',
  styleUrls: ['./info-oferta.component.scss']
})
export class InfoOfertaComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.route.navigate(['principal'])
  }

}
