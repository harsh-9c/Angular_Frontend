import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHrChartMComponent } from './card-hr-chart-m.component';

describe('CardHrChartMComponent', () => {
  let component: CardHrChartMComponent;
  let fixture: ComponentFixture<CardHrChartMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardHrChartMComponent]
    });
    fixture = TestBed.createComponent(CardHrChartMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
