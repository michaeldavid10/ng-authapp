import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectecComponent } from './protectec.component';

describe('ProtectecComponent', () => {
  let component: ProtectecComponent;
  let fixture: ComponentFixture<ProtectecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
