import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EntornoRestauranteComponent } from './components/entorno-restaurante/entorno-restaurante.component';
import { EspecialesComponent } from './components/especiales/especiales.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { PuestosComponent } from './components/puestos/puestos.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';

const routes: Routes = [
  {path: 'seguridad', component: SeguridadComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'administracion', component: AdministracionComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'login', component: LogInComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'mesas', component: MesasComponent},
  {path: 'puestos', component: PuestosComponent},
  {path: 'especiales', component: EspecialesComponent}
  // {path: 'entorno-restaurante', component: EntornoRestauranteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComps =
[
  SeguridadComponent, RestaurantesComponent,
  ClientesComponent,ProveedoresComponent,
  AdministracionComponent, ReportesComponent,
  LogInComponent, EntornoRestauranteComponent,
  EspecialesComponent, EmpleadosComponent,
  MesasComponent, PuestosComponent
];