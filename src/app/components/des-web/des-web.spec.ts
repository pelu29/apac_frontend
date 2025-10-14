import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesWeb } from './des-web';

describe('DesWeb', () => {
  let component: DesWeb;
  let fixture: ComponentFixture<DesWeb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesWeb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesWeb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
