import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public inbox: MessageService, public router: Router) { }

  ngOnInit() {
  }

}
