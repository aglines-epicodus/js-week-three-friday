import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcharComponent } from './listchar.component';

describe('ListcharComponent', () => {
  let component: ListcharComponent;
  let fixture: ComponentFixture<ListcharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
