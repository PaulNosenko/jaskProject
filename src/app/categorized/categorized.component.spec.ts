import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizedComponent } from './categorized.component';

describe('CategorizedComponent', () => {
  let component: CategorizedComponent;
  let fixture: ComponentFixture<CategorizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
