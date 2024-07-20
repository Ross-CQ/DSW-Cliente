import { TestBed } from '@angular/core/testing';

import { ConsultaInventarioService } from './consulta-inventario.service';

describe('ConsultaInventarioService', () => {
  let service: ConsultaInventarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaInventarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
