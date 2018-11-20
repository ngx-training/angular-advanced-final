import { HomeComponent } from './home.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MessageService } from './message.service';
import { HostElementService } from '../shared/modal/host/host-element.service';
import { ModalService } from '../shared/modal/modal.service';
import { SharedModule } from '../shared/shared.module';
import { InfoBoxComponent } from './info-box/info-box.component';
import { InfoItemComponent } from './info-item/info-item.component';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HomeComponent, InfoBoxComponent, InfoItemComponent],
      providers: [MessageService, HostElementService, ModalService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('GIVEN the app is started', () => {
    it('THEN the home component should be defined', () => {
      expect(component).toBeDefined();
    });
  });
});
