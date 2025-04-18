import {Component, input, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  // these will be added as attributes to the element
  host: {
    class: "control"
  }
})
export class ControlComponent {
  label = input.required<string>();
  protected readonly input = input;
}
