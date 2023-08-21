import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVrChartComponent } from './card-vr-chart.component';

describe('CardVrChartComponent', () => {
  let component: CardVrChartComponent;
  let fixture: ComponentFixture<CardVrChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardVrChartComponent]
    });
    fixture = TestBed.createComponent(CardVrChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
