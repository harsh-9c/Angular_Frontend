import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmpLayoutComponent } from './card-emp-layout.component';

describe('CardEmpLayoutComponent', () => {
  let component: CardEmpLayoutComponent;
  let fixture: ComponentFixture<CardEmpLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardEmpLayoutComponent]
    });
    fixture = TestBed.createComponent(CardEmpLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
