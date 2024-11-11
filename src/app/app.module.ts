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

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    HomeComponent,
    MenuComponent,
    LibreriaComponent,
    PersonasapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [ServiceComics, ServicePersonas, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }