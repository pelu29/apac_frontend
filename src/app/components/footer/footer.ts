import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  constructor(private router:Router){}

  navegar(ruta:string){
    this.router.navigate([`/${ruta}`])
  }

}
