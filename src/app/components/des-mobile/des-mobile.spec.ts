import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesMobile } from './des-mobile';

describe('DesMobile', () => {
  let component: DesMobile;
  let fixture: ComponentFixture<DesMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesMobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesMobile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
