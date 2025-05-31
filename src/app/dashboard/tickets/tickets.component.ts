import { Component } from '@angular/core';
import {NewTicketComponent} from './new-ticket/new-ticket.component';
import {Ticket} from './ticket.model';
import {TicketComponent} from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  imports: [
    NewTicketComponent,
    TicketComponent
  ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[]  = [];

  onAdd(newTicket: { title: string; text: string }) {
    const ticket: Ticket = {
      title: newTicket.title,
      request: newTicket.text,
      id: Math.random().toString(),
      status: "open"
    }

    this.tickets.push(ticket);
  }
}
