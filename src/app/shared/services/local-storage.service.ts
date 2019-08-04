import { Injectable } from '@angular/core';
import { RateResponseExchange } from '../model/RateResponseExchange';
import { isNull } from 'util';

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

  private isPresent(): boolean {
    return !isNull(localStorage.getItem(this.localStorageTTL));
  }

  isValid(): boolean {
    if (this.isPresent()) {
      console.log('present');
      const now = new Date().getTime();
      const ttl = Number(localStorage.getItem(this.localStorageTTL)) * 1000;
      const difference = now - ttl;
      const ok = Math.floor(difference / 1000 / 60);
      console.log('OK?', ok);
      return (ok < 10);
    }
    console.log('no present');
    return false;

  }

  getRates() {
    return JSON.parse( localStorage.getItem(this.localStorageKey) );
  }

}
