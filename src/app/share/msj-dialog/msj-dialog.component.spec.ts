import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjDialogComponent } from './msj-dialog.component';

describe('MsjDialogComponent', () => {
  let component: MsjDialogComponent;
  let fixture: ComponentFixture<MsjDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
