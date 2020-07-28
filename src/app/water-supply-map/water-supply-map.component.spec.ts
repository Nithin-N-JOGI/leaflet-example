import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterSupplyMapComponent } from './water-supply-map.component';

describe('WaterSupplyMapComponent', () => {
  let component: WaterSupplyMapComponent;
  let fixture: ComponentFixture<WaterSupplyMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterSupplyMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterSupplyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
