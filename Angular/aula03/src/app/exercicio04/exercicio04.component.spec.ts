import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio04Component } from './exercicio04.component';

describe('Exercicio04Component', () => {
  let component: Exercicio04Component;
  let fixture: ComponentFixture<Exercicio04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicio04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercicio04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
