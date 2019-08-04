import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeService } from './exchange.service';

describe('ExchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ExchangeService = TestBed.get(ExchangeService);
    expect(service).toBeTruthy();
  });
});
