import {Component, OnInit, ViewChild} from '@angular/core';
import {UserStatService} from '../../services/user-stat.service';
import {BaseComponent} from '../../base-component/base.component';
import {TicketInterface} from '../../types/TicketInterface';
import {TicketService} from '../../services/ticket.service';
import {FormGroup, ValidatorFn} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserInterface} from '../../types/UserInterface';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'ticket-add-edit-ticket',
  templateUrl: './add-edit-ticket.component.html',
  styleUrls: ['./add-edit-ticket.component.css']
})
export class AddEditTicketComponent extends BaseComponent implements OnInit {
  @ViewChild('ngForm') ngForm: FormGroup;
  public ticket: TicketInterface = <any>{};
  public users: UserInterface[];

  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    super();
    this.userService.getAll().subscribe((usersFromServer) => {
      this.users = usersFromServer;
    });
    Validators.required
  }

  public submitTicket() {

  }

  ngOnInit() {
  }

}
