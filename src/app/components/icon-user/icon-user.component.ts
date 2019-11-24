import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-icon-user',
  templateUrl: './icon-user.component.html',
  styleUrls: ['./icon-user.component.css']
})
export class IconUserComponent implements OnInit {

  user: User;

  constructor(public router: Router, private service: UsersService) { }

  ngOnInit() {
  }

}
