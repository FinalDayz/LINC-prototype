import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartUpsPage } from './start-ups.page';

describe('StartUpsPage', () => {
  let component: StartUpsPage;
  let fixture: ComponentFixture<StartUpsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartUpsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartUpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
