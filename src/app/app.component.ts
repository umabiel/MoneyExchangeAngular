import { Component, OnInit } from '@angular/core';
import { ExchangeService } from './shared/services/exchange.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { RateResponseExchange } from './shared/model/RateResponseExchange';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private money: number;
  public rate: RateResponseExchange = { base: '', rates: [] };
  public resultExchange: string;

  private exRate: number;

  constructor(
    private exchangeService: ExchangeService,
    private locaStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.getRates();
  }

  private getRates() {
    this.exchangeService.getExchange().subscribe((res: RateResponseExchange) => {
      this.rate = res;
      this.locaStorageService.saveStorage(res);
      this.exRate = this.exchangeService.getRateForExchange('USD');
    });
  }

  getmoney(money: number) {
    this.money = money;
  }

  calculate() {
    if (this.locaStorageService.isValid()) {
      console.log('Valid');
      const result = (this.exRate * this.money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      this.resultExchange = result;

    } else {
      console.log('no valid');
      this.locaStorageService.removeStorage();
      this.getRates();

      const result = (this.exRate * this.money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      this.resultExchange = result;
    }
  }

}
