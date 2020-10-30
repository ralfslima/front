import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente03Component } from './componente03.component';

describe('Componente03Component', () => {
  let component: Componente03Component;
  let fixture: ComponentFixture<Componente03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
