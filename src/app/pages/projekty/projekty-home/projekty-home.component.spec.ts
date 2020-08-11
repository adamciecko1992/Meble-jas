import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektyHomeComponent } from './projekty-home.component';

describe('ProjektyHomeComponent', () => {
  let component: ProjektyHomeComponent;
  let fixture: ComponentFixture<ProjektyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjektyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
