import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-money-out',
  templateUrl: './money-out.component.html',
  styleUrls: ['./money-out.component.css']
})
export class MoneyOutComponent implements OnInit {

  @Input() placeholder: string;
  @Input() type: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}
