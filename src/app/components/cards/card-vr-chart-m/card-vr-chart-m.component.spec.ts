import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVrChartMComponent } from './card-vr-chart-m.component';

describe('CardVrChartMComponent', () => {
  let component: CardVrChartMComponent;
  let fixture: ComponentFixture<CardVrChartMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardVrChartMComponent]
    });
    fixture = TestBed.createComponent(CardVrChartMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
