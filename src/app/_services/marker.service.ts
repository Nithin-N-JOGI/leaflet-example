import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { Map } from 'leaflet';
import { PopUpService } from '../_services/pop-up.service';
import * as turf from '@turf/turf'
import 'leaflet-routing-machine';




import { MapComponent } from '../map/map.component';
import { formattedError } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  capitals: string = '/assets/data/Mysore_Wards_1.geojson';

 
  constructor(private http: HttpClient, private popupService: PopUpService) {
  }

  
 

  makeCapitalMarkers(map:  L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      
  
    //   L.Routing.control({
    //     waypoints: [
    //       L.latLng(14.1670, 75.0403),
    //         L.latLng(14.2145, 74.9087)
            
    //     ]            

      
       
    // }).addTo(map);

    
    // const  latlngs = [ [14.2145, 74.9087], [14.1670, 75.0403]];
    // const  polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

    var latlngs: [number, number][] = [
      [14.2145, 74.9087],
      [14.1670, 75.0403]
     
  ];
  var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
  
      const from = [14.2145, 74.9087];
      const to = [14.1670, 75.0403];
      const fm = L.marker([14.2145, 74.9087]).addTo(map);
      const too = L.marker([14.1670, 75.0403]).addTo(map);
  
      var distance = turf.distance(from, to);
      
      var z = Math.floor(distance);

      var end = turf.point([-77, 39]);
 
      var greatCircle = turf.greatCircle(from, to);
       
      //addToMap
      var addMap = [from, to, greatCircle];

      // addMap.addTo(map);
    
      const  m = (z * 1000 );
      fm.bindPopup(this.popupService.makeCapitalPopup(z,'location Name'));
      too.bindPopup(this.popupService.makeCapitalPopup(m,'Talaguppa'));
    
    });
  }
 
}