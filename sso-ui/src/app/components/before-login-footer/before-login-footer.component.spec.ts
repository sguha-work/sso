import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeLoginFooterComponent } from './before-login-footer.component';

describe('BeforeLoginFooterComponent', () => {
  let component: BeforeLoginFooterComponent;
  let fixture: ComponentFixture<BeforeLoginFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeLoginFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeLoginFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
