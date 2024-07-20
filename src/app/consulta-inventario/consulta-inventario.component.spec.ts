import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaInventarioComponent } from './consulta-inventario.component';

describe('ConsultaInventarioComponent', () => {
  let component: ConsultaInventarioComponent;
  let fixture: ComponentFixture<ConsultaInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaInventarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
