import { Injectable } from '@angular/core';
import { RateResponseExchange } from '../model/RateResponseExchange';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private localStorageKey = '_ExchangeStorage';
  private localStorageTTL = '_ExchamgeStorageTTL';
  constructor() { }

  saveStorage(state: RateResponseExchange) {
    localStorage.setItem(this.localStorageTTL, state.timestamp.toString());
    localStorage.setItem(this.localStorageKey, JSON.stringify( state.rates ) );
  }

  removeStorage() {
    localStorage.removeItem(this.localStorageKey);
    localStorage.removeItem(this.localStorageTTL);
  }

  getRates() {
    return JSON.parse( localStorage.getItem(this.localStorageKey) );
  }

}
