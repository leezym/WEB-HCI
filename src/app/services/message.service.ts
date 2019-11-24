import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  state: string;
  messages: string[] = [];

  new_state(state: string): void {
    this.state = state;
  }

  clear_states(): void {
    this.state = 'Ingresar';
  }

  add_message(message: string): void {
    this.messages.push(message);
  }

  clear_messages(): void {
    this.messages = [];
  }

  constructor() { }
}
