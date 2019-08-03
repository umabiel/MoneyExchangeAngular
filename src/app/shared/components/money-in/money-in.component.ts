import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-money-in',
  templateUrl: './money-in.component.html',
  styleUrls: ['./money-in.component.css']
})
export class MoneyInComponent implements OnInit {

  @Input() placeholder: string;
  @Input() type: string;
  @Input() set value(value: number) {
    this.changeInput(value);
  }

  @Output() moneyInputEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  changeInput(money: number) {
    this.moneyInputEvent.emit(money);
  }

}
