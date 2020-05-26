import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadGetinComponent } from './actividad-getin.component';

describe('ActividadGetinComponent', () => {
  let component: ActividadGetinComponent;
  let fixture: ComponentFixture<ActividadGetinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadGetinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadGetinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
