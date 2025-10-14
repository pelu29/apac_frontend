export interface Producto{
    nombre:string;
    precio:number;
    stock:number;
}

export class ProductoModel{

    public desc:number = 10;

    constructor(
        public nombre:string,
        public precio:number,
        public stock:number,
    ){}

    tieneStock():boolean{
        return this.stock>0;
    }

    aplicarDescuento(porcentaje:number):void{
        this.precio = this.precio - (this.precio * porcentaje) / 100;
    }
}