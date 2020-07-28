import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { Map } from 'leaflet';
import { PopUpService } from '../_services/pop-up.service';
import * as turf from '@turf/turf'



import { MapComponent } from '../map/map.component';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  capitals: string = '/assets/data/Mysore_Wards_1.geojson';

  // static ScaledRadius(val: number, maxVal: number): number {
  //   return 20 * (val / maxVal);
  // }

  constructor(private http: HttpClient, private popupService: PopUpService) {
  }

  // makeCapitalMarkers(map: L.Map): void {
  //   this.http.get(this.capitals).subscribe((res: any) => {
  //     for (const c of res.features) {
  //       const lat = c.geometry.coordinates[0];
  //       const lon = c.geometry.coordinates[1];
  //       const circle = L.circleMarker([lon, lat]).addTo(map);
  //     }
  //   });
  // }

  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      
  

      
  
      const from = [14.2145, 74.9087];
      const to = [14.1670, 75.0403];
      const fm = L.marker([14.2145, 74.9087]).addTo(map);
      const too = L.marker([14.1670, 75.0403]).addTo(map);
  
      var distance = turf.distance(from, to);
      
      var z = Math.floor(distance);
     
     
      
      const  m = (z * 1000 );
      fm.bindPopup(this.popupService.makeCapitalPopup(z,'location Name'));
      too.bindPopup(this.popupService.makeCapitalPopup(m,'Talaguppa'));
    
    });
  }
  // makeCapitalMarkers(map: L.Map): void {
  //   this.http.get(this.capitals).subscribe((res: any) => {
  //     const number = Math.max(distance);
  
  //     var from = [77.675726, 13.0114];
  //     var to = [77.559736, 13.059818];
    
  
  //     var distance = turf.distance(from, to);
  
  
  //     const lat = 77.675726;
  //     const lon = 13.0114;
  //     const marker = L.marker([lon, lat]).addTo(map);
  //     marker.bindPopup(this.popupService.makeCapitalPopup(distance));
   
  //     const la = 77.559736;
  //     const lo = 13.059818;
  //     const ma = L.marker([lo, la]).addTo(map);
  //     alert(distance);
  //   });
  // }
  
}