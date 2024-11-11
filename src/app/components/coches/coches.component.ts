import { Component, OnInit } from '@angular/core';
import { ServiceCohes } from '../../../service/service.coches';
import { Coche } from '../models/Coche';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrl: './coches.component.css'
})
export class CochesComponent implements OnInit{
  public coches!: Array<Coche>

  constructor(private _service: ServiceCohes){ }

  ngOnInit(): void {
    this._service.getCoches().subscribe(response => {
      this.coches = response;
    })
  }

}
