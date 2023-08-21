import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVrEComponent } from './card-vr-e.component';

describe('CardVrEComponent', () => {
  let component: CardVrEComponent;
  let fixture: ComponentFixture<CardVrEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardVrEComponent]
    });
    fixture = TestBed.createComponent(CardVrEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
