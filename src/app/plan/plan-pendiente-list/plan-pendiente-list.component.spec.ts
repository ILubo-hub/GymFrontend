import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPendienteListComponent } from './plan-pendiente-list.component';

describe('PlanPendienteListComponent', () => {
  let component: PlanPendienteListComponent;
  let fixture: ComponentFixture<PlanPendienteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanPendienteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanPendienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
