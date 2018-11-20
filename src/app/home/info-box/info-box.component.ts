import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit, OnChanges, OnDestroy {
  private _name: string;
  private subscription: Subscription;

  @Input()
  message: string;

  @Input()
  set name(value: string) {
    this._name = value.toLowerCase();
  }

  get name(): string {
    return this._name;
  }

  @Output()
  replyToParent = new EventEmitter<string>();

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.listener$.subscribe(msg => (this.message = msg));
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes.message) {
      console.log('changes.message', changes.message.currentValue);
    }

    if (changes.name) {
      console.log('changes.name', changes.name.currentValue);
    }

    if (changes.message && changes.name) {
      console.log('Message AND Name changed');
    }
  }

  ngOnDestroy() {
    // tslint:disable-next-line:no-unused-expression
    this.subscription && this.subscription.unsubscribe();
  }

  reply(message?: string) {
    this.replyToParent.emit(message || 'Message from Child');
  }
}
