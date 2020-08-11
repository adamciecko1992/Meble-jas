import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertyHomeComponent } from './oferty-home.component';

describe('OfertyHomeComponent', () => {
  let component: OfertyHomeComponent;
  let fixture: ComponentFixture<OfertyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
