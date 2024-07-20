import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFichaComponent } from './consultar-ficha.component';

describe('ConsultarFichaComponent', () => {
  let component: ConsultarFichaComponent;
  let fixture: ComponentFixture<ConsultarFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarFichaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
