import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgProviderComponent } from './bg-provider.component';

describe('BgProviderComponent', () => {
  let component: BgProviderComponent;
  let fixture: ComponentFixture<BgProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
