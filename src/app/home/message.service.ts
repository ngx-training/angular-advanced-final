import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // Observable string source
  private listener = new Subject<string>();

  // Observable string stream
  listener$ = this.listener.asObservable();

  // Service message commands
  sendMessage(message: string) {
    this.listener.next(message);
  }
}
