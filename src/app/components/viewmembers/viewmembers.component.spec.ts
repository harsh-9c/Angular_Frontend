import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmembersComponent } from './viewmembers.component';

describe('ViewmembersComponent', () => {
  let component: ViewmembersComponent;
  let fixture: ComponentFixture<ViewmembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewmembersComponent]
    });
    fixture = TestBed.createComponent(ViewmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
