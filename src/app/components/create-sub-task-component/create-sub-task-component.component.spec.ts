import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubTaskComponentComponent } from './create-sub-task-component.component';

describe('CreateSubTaskComponentComponent', () => {
  let component: CreateSubTaskComponentComponent;
  let fixture: ComponentFixture<CreateSubTaskComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSubTaskComponentComponent]
    });
    fixture = TestBed.createComponent(CreateSubTaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
