import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyInComponent } from './money-in.component';

describe('MoneyInComponent', () => {
  let component: MoneyInComponent;
  let fixture: ComponentFixture<MoneyInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
