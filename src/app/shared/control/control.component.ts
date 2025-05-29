import {
  Component, contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  Input,
  ViewEncapsulation
} from '@angular/core';

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
  private el = inject(ElementRef); // Angular gives access to the host element of the component
  // @ContentChild("input") private control: ElementRef<HTMLInputElement | HTMLTextAreaElement> | undefined;
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>("input");

  onClick() {
    console.log("clicked!!");
    console.log(this.el);
    console.log("test input value -> ", this.control()?.nativeElement.value)
  }
}
