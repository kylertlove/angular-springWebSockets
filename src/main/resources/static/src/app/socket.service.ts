import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Injectable()
export class SocketService {
  private sockAddress = '/gs-guide-websocket';
  private socket;
  private stompClient;
  isConnected: Boolean;

  constructor() { }

  connect() {
    this.socket = new SockJS(this.sockAddress);
    this.stompClient = Stomp.over(this.socket);

    this.stompClient.connect( {}, (frame) => {

      console.log('Connected: ' + frame);
        this.stompClient.subscribe('/topic/greetings', (greeting) => {
            console.log('Show Return', greeting);
        });
    });
  }

  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log('Disconnected');
}

sendName() {
  this.stompClient.send('/app/hello', {}, 'Sending Message from Angular -> Java Controller');
}

}
