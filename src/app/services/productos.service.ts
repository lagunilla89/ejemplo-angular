import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(private Http: HttpClient)
  {

     this.cargarProductos();
  }


  private cargarProductos()
  {
      this.Http.get("https://angular-html-86a18.firebaseio.com/productos_idx.json")
          .subscribe( (resp: Producto[]) =>
            {
              console.log(resp);
              
              setTimeout(() => {
                this.cargando = false;  
              }, 2000);
              
              this.productos=resp;
            }   );

      
  }

}
