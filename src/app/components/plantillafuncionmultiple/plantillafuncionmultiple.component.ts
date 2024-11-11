import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantillas } from '../../../service/service.plantillas';
import { Plantilla } from '../models/Plantilla';

@Component({
  selector: 'app-plantillafuncionmultiple',
  templateUrl: './plantillafuncionmultiple.component.html',
  styleUrl: './plantillafuncionmultiple.component.css'
})
export class PlantillafuncionmultipleComponent implements OnInit {
  public funciones!: Array<string>;
  @ViewChild("selectfunciones") selectFunciones!: ElementRef;
  public empleados: Array<Plantilla>
  public funcionesSeleccionadas: Array<string>;

  constructor(private _service: ServicePlantillas) {
    this.empleados = new Array<Plantilla>;
    this.funcionesSeleccionadas = new Array<string>();
  }

  mostrarPlantilla(): void {
    let aux = new Array<string>;

    for (var option of this.selectFunciones.nativeElement.options) {
      if (option.selected == true) {
        aux.push(option.value);
      }
    }
    this.funcionesSeleccionadas = aux;


    this._service.getPlantillaFunciones(this.funcionesSeleccionadas).subscribe(response => {
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
