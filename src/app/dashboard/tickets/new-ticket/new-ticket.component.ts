import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit, output,
  Output,
  viewChild,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ButtonComponent} from '../../../shared/button/button.component';
import {ControlComponent} from '../../../shared/control/control.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild("form") form: ElementRef<HTMLFormElement> | undefined; // we can't pass a css selector like '.classname'
  // private form = viewChild.required<ElementRef<HTMLFormElement>>("form"); // should work fine inside ngOnInit function
  // @ViewChildren(ButtonComponent) buttons: ElementRef<ButtonComponent>[] | undefined; // variation of ViewChild

  // @Output() add = new EventEmitter<{title: string; text: string}>();
  enteredTitle = "";
  enteredText = "";

  add = output<{title: string; text: string}>();
  ngOnInit(): void {
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    // guaranteed to have access to elements that have been selected with viewChild, unless they have been selected by a bad locator
    console.log("AFTER VIEW INIT");
    console.log(this.form?.nativeElement);
  }


  onSubmit() {
    this.add.emit({title: this.enteredTitle, text: this.enteredText});
    // this.form?.nativeElement.reset();
    this.enteredText = "";
    this.enteredTitle = "";
  }
}
