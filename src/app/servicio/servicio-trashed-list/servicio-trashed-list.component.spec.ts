import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioTrashedListComponent } from './servicio-trashed-list.component';

describe('ServicioTrashedListComponent', () => {
  let component: ServicioTrashedListComponent;
  let fixture: ComponentFixture<ServicioTrashedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioTrashedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioTrashedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
