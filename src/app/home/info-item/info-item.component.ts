import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss']
})
export class InfoItemComponent implements OnInit {
  private _messageValue: string;

  @Output()
  messageChange = new EventEmitter<string>();

  @Input()
  get message() {
    return this._messageValue;
  }

  set message(val) {
    this._messageValue = val;
    this.messageChange.emit(this._messageValue);
  }

  constructor() {}

  ngOnInit() {}
}
