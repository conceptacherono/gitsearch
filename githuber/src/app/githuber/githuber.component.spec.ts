import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithuberComponent } from './githuber.component';

describe('GithuberComponent', () => {
  let component: GithuberComponent;
  let fixture: ComponentFixture<GithuberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithuberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithuberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
