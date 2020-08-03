import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainabiltyComponent } from './sustainabilty.component';

describe('SustainabiltyComponent', () => {
  let component: SustainabiltyComponent;
  let fixture: ComponentFixture<SustainabiltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SustainabiltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SustainabiltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
