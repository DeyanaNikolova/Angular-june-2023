import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasyComponent } from './lasy.component';

describe('LasyComponent', () => {
  let component: LasyComponent;
  let fixture: ComponentFixture<LasyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LasyComponent]
    });
    fixture = TestBed.createComponent(LasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
