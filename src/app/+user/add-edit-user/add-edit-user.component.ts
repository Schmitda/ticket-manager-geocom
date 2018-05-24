import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from '../../messages/services/message.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'ticket-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              private route: ActivatedRoute,
              private messageService: MessageService) {
  }


  public saveUser() {

  }


}
