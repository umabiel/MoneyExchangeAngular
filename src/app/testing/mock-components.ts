import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-money-in',
  template: '<div></div>'
})
export class MoneyInComponentMock {
  @Input() placeholder: string;
}

@Component({
  selector: 'app-money-out',
  template: '<div></div>'
})
export class MoneyOutComponentMock {
  @Input() placeholder: string;
  @Input() value: string;
}

@Component({
  selector: 'app-footer',
  template: '<div></div>'
})
export class FooterComponentMock {
}
