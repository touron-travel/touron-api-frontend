import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVisaComponent } from './edit-visa.component';

describe('EditVisaComponent', () => {
  let component: EditVisaComponent;
  let fixture: ComponentFixture<EditVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
