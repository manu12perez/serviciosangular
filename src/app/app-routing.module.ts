import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"libreria", component:LibreriaComponent},
  {path:"personas", component:PersonasapiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
