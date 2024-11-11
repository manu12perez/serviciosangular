import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantillas } from '../../../service/service.plantillas';
import { Plantilla } from '../models/Plantilla';

@Component({
  selector: 'app-plantillafuncionsimple',
  templateUrl: './plantillafuncionsimple.component.html',
  styleUrl: './plantillafuncionsimple.component.css'
})
export class PlantillafuncionsimpleComponent implements OnInit {
  public funciones!: Array<string>;
  @ViewChild("selectfuncion") selectFuncion!: ElementRef;
  public empleados: Array<Plantilla>

  constructor(private _service: ServicePlantillas) {
    this.empleados = new Array<Plantilla>
  }

  mostrarPlantilla(): void {
    let funcion = this.selectFuncion.nativeElement.value; 
    console.log("hola")
    this._service.getPlantillaFuncion(funcion).subscribe(response => {
      console.log(response)
      this.empleados = response;
    })

  }

  ngOnInit(): void {
    this._service.getFunciones().subscribe(response => {
      console.log(response);
      this.funciones = response;
    })
  }
}
