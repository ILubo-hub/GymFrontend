import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadListUserComponent } from './actividad-list-user.component';

describe('ActividadListUserComponent', () => {
  let component: ActividadListUserComponent;
  let fixture: ComponentFixture<ActividadListUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadListUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
