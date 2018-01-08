import { Component } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isConnect = false;
  constructor(public sockService: SocketService) {
  }

  connect() {
    this.sockService.connect();
    this.isConnect = true;
  }

  sendMessage() {
    this.sockService.sendName();
  }
}
