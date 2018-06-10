import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteUserProfileComponent } from './site-user-profile.component';

describe('SiteUserProfileComponent', () => {
  let component: SiteUserProfileComponent;
  let fixture: ComponentFixture<SiteUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
