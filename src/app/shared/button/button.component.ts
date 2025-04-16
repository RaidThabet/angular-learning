import {Component, Input} from '@angular/core';

@Component({
  selector: 'button[appButton]', // any button element that has the appButton attribute on it should be controller by this component
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
}
