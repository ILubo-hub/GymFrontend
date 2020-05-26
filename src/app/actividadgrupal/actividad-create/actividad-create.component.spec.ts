import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadCreateComponent } from './actividad-create.component';

describe('ActividadCreateComponent', () => {
  let component: ActividadCreateComponent;
  let fixture: ComponentFixture<ActividadCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
