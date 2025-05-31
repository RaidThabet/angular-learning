import {Component, input, output, signal} from '@angular/core';
import {Ticket} from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  complete =  output<string>();
  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((prev) => !prev); // Similiar to useState in React
  }

  onMarkAsCompleted() {
    this.complete.emit(this.data().id);
  }
}
