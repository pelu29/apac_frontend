import { Component } from '@angular/core';
import { Producto,ProductoModel } from '../../models/user.model';
import { Api } from '../../services/api';


@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

  constructor(private api : Api){}

  data:Producto[]=[];
  molde:Producto = new ProductoModel("Laptop",12,100);
  molde2 = new ProductoModel("pcGamer",100,10);
  

  objeto:Producto = {
    nombre:"laptop",
    precio:12,
    stock:100,
  }
  
  mensaje(){
    console.log(this.molde2.desc = 1000);
  }

}
