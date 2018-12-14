import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcareComponent } from './icare.component';

describe('IcareComponent', () => {
  let component: IcareComponent;
  let fixture: ComponentFixture<IcareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
