import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhoneComponent } from './list-phone.component';

describe('ListComponent', () => {
  let component: ListPhoneComponent;
  let fixture: ComponentFixture<ListPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
