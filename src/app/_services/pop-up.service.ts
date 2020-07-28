import { Injectable } from '@angular/core';
import { ShapeService } from '../_services/shape.service';


@Injectable({
  providedIn: 'root'
})

export class PopUpService {

  constructor() { }

  makeCapitalPopup(data: any,data1: any): string {
    
    return `` +
      `<div>${data1}: ${data}</div>` 
      //  `<div>Capital: ${data1.distance}</div>` 
      // `<div>Population: ${ data.distance }</div>`
      
  }
}