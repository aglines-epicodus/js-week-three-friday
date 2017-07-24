import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCharComponent } from './change-char.component';

describe('ChangeCharComponent', () => {
  let component: ChangeCharComponent;
  let fixture: ComponentFixture<ChangeCharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
