import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExchangeService } from './exchange.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { RateResponseExchange } from '../model/RateResponseExchange';

describe('ExchangeService', () => {

  let httpMock: HttpTestingController;
  let exchangeService: ExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExchangeService]
    });

    exchangeService = TestBed.get(ExchangeService);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('should be created', () => {
    const service: ExchangeService = TestBed.get(ExchangeService);
    expect(service).toBeTruthy();
  });

  it('getExchange() should http GET RatesExchange', () => {

    const rates: RateResponseExchange = {
      success: true,
      timestamp: 1564941306,
      base: 'EUR',
      date: new Date('2019-08-04'),
      rates: []
    };

    exchangeService.getExchange().subscribe((res) => {
      expect(res).toEqual(rates);
    });

    const req = httpMock.expectOne('http://data.fixer.io/api/latest?access_key=33b23d6e01efe285daf21f65e1124757');
    expect(req.request.method).toEqual('GET');
    req.flush(rates);

    httpMock.verify();
  });

});
