import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategclComponent } from './categcl.component';

describe('CategclComponent', () => {
  let component: CategclComponent;
  let fixture: ComponentFixture<CategclComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategclComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
