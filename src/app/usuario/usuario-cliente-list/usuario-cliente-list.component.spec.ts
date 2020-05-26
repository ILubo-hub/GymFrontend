import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioClienteListComponent } from './usuario-cliente-list.component';

describe('UsuarioClienteListComponent', () => {
  let component: UsuarioClienteListComponent;
  let fixture: ComponentFixture<UsuarioClienteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioClienteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioClienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
