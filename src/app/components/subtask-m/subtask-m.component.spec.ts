import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtaskMComponent } from './subtask-m.component';

describe('SubtaskMComponent', () => {
  let component: SubtaskMComponent;
  let fixture: ComponentFixture<SubtaskMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubtaskMComponent]
    });
    fixture = TestBed.createComponent(SubtaskMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
