import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyOutComponent } from './money-out.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('MoneyOutComponent', () => {
  let component: MoneyOutComponent;
  let fixture: ComponentFixture<MoneyOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ MoneyOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
