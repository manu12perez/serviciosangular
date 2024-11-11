import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { PersonasstandaloneComponent } from './components/personasstandalone/personasstandalone.component';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillafuncionsimpleComponent } from './components/plantillafuncionsimple/plantillafuncionsimple.component';
import { PlantillafuncionmultipleComponent } from './components/plantillafuncionmultiple/plantillafuncionmultiple.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"libreria", component:LibreriaComponent},
  {path:"personas", component:PersonasapiComponent},
  {path:"personasstandalone", component:PersonasstandaloneComponent},
  {path:"coches", component:CochesComponent},
  {path:"plantillas", component:PlantillafuncionsimpleComponent},
  {path:"plantillasmultiple", component:PlantillafuncionmultipleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
