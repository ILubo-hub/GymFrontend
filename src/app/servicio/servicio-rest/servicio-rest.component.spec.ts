import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioRestComponent } from './servicio-rest.component';

describe('ServicioRestComponent', () => {
  let component: ServicioRestComponent;
  let fixture: ComponentFixture<ServicioRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
