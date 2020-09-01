import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTourComponent } from './list-tour.component';

describe('ListTourComponent', () => {
  let component: ListTourComponent;
  let fixture: ComponentFixture<ListTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
