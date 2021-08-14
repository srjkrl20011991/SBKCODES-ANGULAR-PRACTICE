import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { MultiplyPipe } from './multiply.pipe';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { DirectivePracticeComponent } from './components/directives/directive-practice/directive-practice.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    ExponentialStrengthPipe,
    MultiplyPipe,
    PropertyBindingComponent,
    EventBindingComponent,
    DirectivePracticeComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
