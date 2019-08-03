import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RateResponseExchange } from '../model/RateResponseExchange';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

  getExchange() {
    return this.http.get<RateResponseExchange>(
      'http://data.fixer.io/api/latest?access_key=33b23d6e01efe285daf21f65e1124757'
    );
  }

  getRateForExchange(rate: string): number {
    const rates = this.localStorageService.getRates();
    return rates[rate];
  }
}
