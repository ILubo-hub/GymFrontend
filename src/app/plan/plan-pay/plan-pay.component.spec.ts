import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPayComponent } from './plan-pay.component';

describe('PlanPayComponent', () => {
  let component: PlanPayComponent;
  let fixture: ComponentFixture<PlanPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
