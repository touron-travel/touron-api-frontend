import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVisaComponent } from './create-visa.component';

describe('CreateVisaComponent', () => {
  let component: CreateVisaComponent;
  let fixture: ComponentFixture<CreateVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
