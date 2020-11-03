import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio03Component } from './exercicio03.component';

describe('Exercicio03Component', () => {
  let component: Exercicio03Component;
  let fixture: ComponentFixture<Exercicio03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicio03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercicio03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
