import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

const routes: Routes = [
  { path: '', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }// si el usuario pone en la barra un nombre que no existe, angular redirige a la ruta raiz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
