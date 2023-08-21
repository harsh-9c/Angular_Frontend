import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLayoutMComponent } from './card-layout-m.component';

describe('CardLayoutMComponent', () => {
  let component: CardLayoutMComponent;
  let fixture: ComponentFixture<CardLayoutMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLayoutMComponent]
    });
    fixture = TestBed.createComponent(CardLayoutMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
