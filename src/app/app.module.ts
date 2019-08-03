import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { InputControlComponent } from './shared/components/input-control/input-control.component';
import { MoneyInComponent } from './shared/components/money-in/money-in.component';
import { MoneyOutComponent } from './shared/components/money-out/money-out.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InputControlComponent,
    MoneyInComponent,
    MoneyOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
