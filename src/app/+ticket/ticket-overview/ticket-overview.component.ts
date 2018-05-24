import {Component, NgZone, OnInit} from '@angular/core';
import {TicketInterface} from '../../types/TicketInterface';
import {TicketService} from '../../services/ticket.service';


@Component({
  selector: 'ticket-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.css']
})
export class TicketOverviewComponent implements OnInit {
  public myTickets: TicketInterface[];


  public updateTickets(val: { tickets: TicketInterface[], searchTerm: string }) {
    if (val.searchTerm === '') {
      this.loadAll();
    } else {
      this.myTickets = val.tickets;
    }
  }

  public loadAll() {
    this.ticketService.getAll().subscribe((val) => {
      this.myTickets = val;
      console.log(val);
    });
  }

  constructor(private ticketService: TicketService) {
    this.loadAll();
  }


  public deleteTicket(ticket: TicketInterface) {
    this.ticketService.delete(ticket._id).subscribe((val) => {

    });
  }

  ngOnInit() {
  }

}
