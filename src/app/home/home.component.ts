import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MessageService } from './message.service';
import { ModalService } from '../shared/modal/modal.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  message = 'INIT';
  name = 'START_';
  reply = '';

  @ViewChild('child')
  private child: InfoBoxComponent;

  constructor(
    private messageService: MessageService,
    private hostElement: ViewContainerRef,
    private modal: ModalService
  ) {}

  changeChild() {
    this.message = new Date().toISOString();
    this.name += 'X';
  }

  processReply(event) {
    this.reply = event;
  }

  processReplyFromCode() {
    this.child.reply('Send from parent via CODE');
  }

  sendMessage() {
    this.messageService.sendMessage('Send from parent via service');
  }

  openModal() {
    const modal = this.modal.open(
      { message: this.name, title: 'My name is', type: 'primary' },
      this.hostElement
    );

    modal.close.subscribe(_ => {
      console.log('MODAL closed');
    });

    modal.cancel.subscribe(_ => {
      console.log('MODAL cancelled');
    });
  }

  openModalGlobal() {
    this.modal
      .openGlobal({
        title: 'Global Error',
        message: 'Please contact the support',
        type: 'warn'
      })
      .subscribe(modal => {
        modal.close.subscribe(() => console.log('Global MODAL closed'));
      });
  }
}
