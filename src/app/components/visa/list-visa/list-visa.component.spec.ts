import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVisaComponent } from './list-visa.component';

describe('ListVisaComponent', () => {
  let component: ListVisaComponent;
  let fixture: ComponentFixture<ListVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
