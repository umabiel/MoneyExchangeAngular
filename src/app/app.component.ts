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

  constructor(
    private exchangeService: ExchangeService,
    private locaStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.exchangeService.getExchange().subscribe((res: RateResponseExchange) => {
      this.rate = res;
      this.locaStorageService.saveStorage(res);
      console.log('RATE ', this.exchangeService.getRateForExchange('USD'));
    });
  }

  getmoney(money: number) {
    this.money = money;
  }

  calculate() {
    const rate = this.exchangeService.getRateForExchange('USD');
    console.log(rate * this.money);
    const result = (rate * this.money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.resultExchange = result;
  }

}
