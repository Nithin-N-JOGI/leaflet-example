import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MarkerService } from './_services/marker.service';
import { HttpClientModule } from '@angular/common/http';
import { PopUpService } from './_services/pop-up.service';
import { ShapeService } from './_services/shape.service';
import { BorewellMapComponent } from './borewell-map/borewell-map.component';
import { WaterSupplyMapComponent } from './water-supply-map/water-supply-map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BorewellMapComponent,
    WaterSupplyMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [MarkerService,
    PopUpService,
    ShapeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
