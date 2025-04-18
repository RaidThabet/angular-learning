import {Component, Input} from '@angular/core';

@Component({
  // any button or anchor tag element that has the appButton attribute on it should be controller by this component
  selector: 'button[appButton], a[appButton]',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
}
