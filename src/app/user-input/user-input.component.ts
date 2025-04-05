import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {InvestmentInput} from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment: string = "0";
  enteredAnnualInvestment: string = "0";
  enteredExpectedReturn: string = "5";
  enteredDuration: string = "10";

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn
    })
  }
}
