import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyInComponent } from './money-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('MoneyInComponent', () => {
  let component: MoneyInComponent;
  let fixture: ComponentFixture<MoneyInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
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
