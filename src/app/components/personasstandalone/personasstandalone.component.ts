import { Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../../service/service.personas';
import { Persona } from '../models/Persona';
import { NgFor, NgIf } from '@angular/common'

@Component({
  selector: 'app-personasstandalone',
  templateUrl: './personasstandalone.component.html',
  styleUrl: './personasstandalone.component.css',
  standalone: true,
  imports: [NgFor],
  // imports: [NgIf],
})
export class PersonasstandaloneComponent implements OnInit {
  public personas!: Array<Persona>;

  constructor(
    private _service: ServicePersonas
  ) { }

  // ngOnInit(): void {
  //   this._service.getPersonas().subscribe(response => {
  //     console.log("Leyendo");
  //     this.personas = response;
  //   })
  // }

  ngOnInit(): void {
    this._service.getPersonasPromesa().then(response => {
      this.personas = response
    })
  }
}
