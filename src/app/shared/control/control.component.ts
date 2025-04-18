import {Component, HostBinding, HostListener, input, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  // these will be added as attributes to the element
  host: {
    class: "control",
    "(click)": "onClick()"
  }
})
export class ControlComponent {
  // !! Not recommended
  // @HostBinding("class") className = "control"; // add className as an attribute to the host element and bind to the class property
  // @HostListener("click") onClick() {
  //   console.log("clicked!!")
  // }
  label = input.required<string>();

  onClick() {
    console.log("clicked!!")
  }
}
