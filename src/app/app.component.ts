import {
  Component,
  HostBinding,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { SettingsService } from './settings/settings.service';
import { fadeInAnimation } from './core/animations/fade-in-animation';
import { HostElementService } from './shared/modal/host/host-element.service';

@Component({
  animations: [fadeInAnimation],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class')
  currentTheme = 'light';
  title = 'app';

  constructor(
    private settingsService: SettingsService,
    hostElementService: HostElementService,
    hostElement: ViewContainerRef
  ) {
    hostElementService.setHost(hostElement);
  }

  ngOnInit() {
    this.settingsService.themeChanged$.subscribe(
      theme => (this.currentTheme = theme)
    );
  }

  // change the animation state
  getRouteAnimation(outlet: any) {
    return '';
    // return new Date().toString();
  }
}
