import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHrChartComponent } from './card-hr-chart.component';

describe('CardHrChartComponent', () => {
  let component: CardHrChartComponent;
  let fixture: ComponentFixture<CardHrChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardHrChartComponent]
    });
    fixture = TestBed.createComponent(CardHrChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
