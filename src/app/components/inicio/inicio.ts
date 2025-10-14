import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inicio',
  imports: [NgbCarouselModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  constructor(private router:Router){}

  navegar(ruta:string){
    this.router.navigate([`/${ruta}`])
  }
  
}
