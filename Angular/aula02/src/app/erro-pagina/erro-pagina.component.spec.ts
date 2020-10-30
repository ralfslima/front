import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroPaginaComponent } from './erro-pagina.component';

describe('ErroPaginaComponent', () => {
  let component: ErroPaginaComponent;
  let fixture: ComponentFixture<ErroPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
