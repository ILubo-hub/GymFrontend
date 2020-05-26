import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanShowComponent } from './plan-show.component';

describe('PlanShowComponent', () => {
  let component: PlanShowComponent;
  let fixture: ComponentFixture<PlanShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
