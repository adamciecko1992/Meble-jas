import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WideNavComponent } from './wide-nav.component';

describe('WideNavComponent', () => {
  let component: WideNavComponent;
  let fixture: ComponentFixture<WideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
