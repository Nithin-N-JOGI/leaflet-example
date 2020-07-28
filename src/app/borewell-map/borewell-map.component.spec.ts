import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorewellMapComponent } from './borewell-map.component';

describe('BorewellMapComponent', () => {
  let component: BorewellMapComponent;
  let fixture: ComponentFixture<BorewellMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorewellMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorewellMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
