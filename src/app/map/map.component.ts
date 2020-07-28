import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { ShapeService } from '../_services/shape.service';
import { PopUpService } from '../_services/pop-up.service';

import { icon, Marker } from 'leaflet';
import { MarkerService } from '../_services/marker.service';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  private map;
  private filtered;
  private filtered1;
  private states;
  private dummi=[];

  constructor(private markerService: MarkerService,private shapeService: ShapeService, private popupService: PopUpService) {
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map);
    this.shapeService.getStateShapes().subscribe(states => {
      this.dummi = states.features;//
    
      
    });

  }

 






  private initMap(): void {
    this.map = L.map('map', {
      center: [ 15.3173, 75.7139 ],
      zoom: 5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
  private initStatesLayer() {
    this.states= this.filtered; 
    const stateLayer = L.geoJSON(this.states, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.8,
        fillColor: '#6DB65B'
      }),
      onEachFeature: (feature, layer) => (
  layer.on({
    mouseover: (e) => (this.highlightFeature(e)),
    mouseout: (e) => (this.resetFeature(e)),
  
  })
)
    });

    this.map.addLayer(stateLayer);
    
  }

  private highlightFeature(e)  {
    const layer = e.target;
    layer.setStyle({
      weight: 10,
      opacity: 1.0,
      color: '#DFA612',
      fillOpacity: 1.0,
      fillColor: '#FAE042',
      
    });
    layer.bindPopup(this.popupService.makeCapitalPopup(e,"color"));
  }

  private resetFeature(e)  {
    const layer = e.target;
    layer.setStyle({
      weight: 3,
      opacity: 0.5,
      color: '#008f68',
      fillOpacity: 0.8,
      fillColor: '#6DB65B'
    });
  }
 myFunc(){//run m
alert('myfun');
    this.filtered = this.dummi.filter(d=>d.properties.Ward_No < 20.0 ); 
   
     alert(this.filtered.length);
     this.states= this.dummi; 
    this.initStatesLayer();
   
  }
  private initStatesLayerA() {
    this.states= this.filtered1; 
    const stateLayer = L.geoJSON(this.states, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.8,
        fillColor: '#6DB65B'
      }),
      onEachFeature: (feature, layer) => (
  layer.on({
    mouseover: (e) => (this.highlightFeature(e)),
    mouseout: (e) => (this.resetFeature(e)),
  
  })
)
    });

    this.map.addLayer(stateLayer);
    
  }

  private highlightFeatureA(e)  {
    const layer = e.target;
    layer.setStyle({
      weight: 10,
      opacity: 1.0,
      color: '#DFA612',
      fillOpacity: 1.0,
      fillColor: '#FAE042',
      
    });
    layer.bindPopup(this.popupService.makeCapitalPopup(e,"color"));
  }

  private resetFeatureA(e)  {
    const layer = e.target;
    layer.setStyle({
      weight: 3,
      opacity: 0.5,
      color: '#008f68',
      fillOpacity: 0.8,
      fillColor: '#6DB65B'
    });
  }
  myFuncA(){//run m
    alert('myfunA');
        
         this.filtered1 = this.dummi.filter(d=>d.properties.Ward_No > 20 && d.properties.Ward_No < 60.0 );
         
         alert(this.filtered1.length);
        
        this.initStatesLayerA();
       
      }
  }

