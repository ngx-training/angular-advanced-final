import {
  ComponentFactoryResolver,
  Injectable,
  ViewContainerRef
} from '@angular/core';

import { ModalComponent } from './modal.component';
import { ModalData } from './modal.model';
import { HostElementService } from './host/host-element.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private hostElementService: HostElementService
  ) {}

  open(data: ModalData, host: ViewContainerRef): ModalComponent {
    data.type = data.type || 'primary';
    return this.createModal(data, host);
  }

  openGlobal(data: ModalData): Observable<ModalComponent> {
    return this.hostElementService.hostElement$.pipe(
      map(host => this.createModal(data, host))
    );
  }

  private createModal(data: ModalData, host: ViewContainerRef): ModalComponent {
    host.clear();

    const modalFactory = this.componentFactoryResolver.resolveComponentFactory(
      ModalComponent
    );
    const modal = host.createComponent(modalFactory);

    modal.instance.modal = data;
    modal.instance.close.subscribe(() => modal.destroy());
    modal.instance.cancel.subscribe(() => modal.destroy());

    return modal.instance;
  }
}
