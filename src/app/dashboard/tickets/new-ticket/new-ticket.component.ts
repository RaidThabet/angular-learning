import {Component, ElementRef, viewChild, ViewChild, ViewChildren} from '@angular/core';
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
export class NewTicketComponent {
  // @ViewChild("form") form: ElementRef<HTMLFormElement> | undefined; // we can't pass a css selector like '.classname'
  private form = viewChild<ElementRef<HTMLFormElement>>("form")
  // @ViewChildren(ButtonComponent) buttons: ElementRef<ButtonComponent>[] | undefined; // variation of ViewChild

  onSubmit(title: string, ticketText: string) {
    console.log("Submitted " + title + " " + ticketText);
    this.form()?.nativeElement.reset();
  }
}
