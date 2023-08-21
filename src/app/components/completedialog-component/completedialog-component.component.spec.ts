import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedialogComponentComponent } from './completedialog-component.component';

describe('CompletedialogComponentComponent', () => {
  let component: CompletedialogComponentComponent;
  let fixture: ComponentFixture<CompletedialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedialogComponentComponent]
    });
    fixture = TestBed.createComponent(CompletedialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
