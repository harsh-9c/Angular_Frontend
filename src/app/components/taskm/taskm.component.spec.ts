import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmComponent } from './taskm.component';

describe('TaskmComponent', () => {
  let component: TaskmComponent;
  let fixture: ComponentFixture<TaskmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskmComponent]
    });
    fixture = TestBed.createComponent(TaskmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
