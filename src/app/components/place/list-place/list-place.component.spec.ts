import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlaceComponent } from './list-place.component';

describe('ListPlaceComponent', () => {
  let component: ListPlaceComponent;
  let fixture: ComponentFixture<ListPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
