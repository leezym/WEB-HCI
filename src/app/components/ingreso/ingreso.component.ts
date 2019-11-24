import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { User } from '../../classes/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  constructor(public inbox: MessageService, private service: UsersService) { }

  ngOnInit() {
    this.update();
  }

  update(): void {
    this.inbox.new_state('Ingresar');
  }

}
