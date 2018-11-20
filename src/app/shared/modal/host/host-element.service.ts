import { Injectable, ViewContainerRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';

Injectable({
  providedIn: 'root'
});
export class HostElementService {
  private _hostElement = new ReplaySubject<ViewContainerRef>();
  hostElement$ = this._hostElement.asObservable();

  setHost(hostElement: ViewContainerRef): void {
    this._hostElement.next(hostElement);
  }
}
