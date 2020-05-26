import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPagadoListComponent } from './plan-pagado-list.component';

describe('PlanPagadoListComponent', () => {
  let component: PlanPagadoListComponent;
  let fixture: ComponentFixture<PlanPagadoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanPagadoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanPagadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
