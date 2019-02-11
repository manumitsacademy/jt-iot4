import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietylistComponent } from './societylist.component';

describe('SocietylistComponent', () => {
  let component: SocietylistComponent;
  let fixture: ComponentFixture<SocietylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
