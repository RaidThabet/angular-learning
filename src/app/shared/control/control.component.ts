import {Component, input, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ControlComponent {
  label = input.required<string>();
  protected readonly input = input;
}
