import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkforceMComponent } from './workforce-m.component';

describe('WorkforceMComponent', () => {
  let component: WorkforceMComponent;
  let fixture: ComponentFixture<WorkforceMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkforceMComponent]
    });
    fixture = TestBed.createComponent(WorkforceMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
