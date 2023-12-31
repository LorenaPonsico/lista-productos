import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent {
  listProductos: Producto[] = []; // clase Producto

  constructor( private _productoService: ProductoService, private toastr: ToastrService){}

  ngOnInit(): void { // cuando se inicialice el componente
    this.obtenerProducto();
  }

  obtenerProducto() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data
    }, error => {
      console.log(error)
    })
  }

  eliminarProducto(id:any) {
    this._productoService.eliminarProducto(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito', 'Producto Eliminado')
      this.obtenerProducto();
    }, error => {
      console.log(error);
    })
  }

  crearProducto(){
    
  }




}

