import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPayComponent } from './usuario-pay.component';

describe('UsuarioPayComponent', () => {
  let component: UsuarioPayComponent;
  let fixture: ComponentFixture<UsuarioPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
