import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadGetoutComponent } from './actividad-getout.component';

describe('ActividadGetoutComponent', () => {
  let component: ActividadGetoutComponent;
  let fixture: ComponentFixture<ActividadGetoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadGetoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadGetoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
