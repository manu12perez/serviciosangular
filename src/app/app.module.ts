import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { ServiceComics } from '../service/service.comics';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from '../service/service.personas';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { PersonasstandaloneComponent } from './components/personasstandalone/personasstandalone.component';
import { ServiceCohes } from '../service/service.coches';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillafuncionsimpleComponent } from './components/plantillafuncionsimple/plantillafuncionsimple.component';
import { ServicePlantillas } from '../service/service.plantillas';
import { PlantillafuncionmultipleComponent } from './components/plantillafuncionmultiple/plantillafuncionmultiple.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    HomeComponent,
    MenuComponent,
    LibreriaComponent,
    PersonasapiComponent,
    CochesComponent,
    PlantillafuncionsimpleComponent,
    PlantillafuncionmultipleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PersonasstandaloneComponent

  ],
  providers: [ServiceComics, ServicePersonas, provideHttpClient(), ServiceCohes, ServicePlantillas],
  bootstrap: [AppComponent]
})
export class AppModule { }