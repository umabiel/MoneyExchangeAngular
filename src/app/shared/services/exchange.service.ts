import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RateResponseExchange } from '../model/RateResponseExchange';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  constructor(private http: HttpClient) {}

  getExchange() {
    return this.http.get<RateResponseExchange>(
      'http://data.fixer.io/api/latest?access_key=33b23d6e01efe285daf21f65e1124757'
    );
  }
}
