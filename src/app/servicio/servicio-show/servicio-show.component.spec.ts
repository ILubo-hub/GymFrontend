import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioShowComponent } from './servicio-show.component';

describe('ServicioShowComponent', () => {
  let component: ServicioShowComponent;
  let fixture: ComponentFixture<ServicioShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
