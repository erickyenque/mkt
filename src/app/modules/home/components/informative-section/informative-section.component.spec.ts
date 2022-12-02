import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativeSectionComponent } from './informative-section.component';

describe('InformativeSectionComponent', () => {
  let component: InformativeSectionComponent;
  let fixture: ComponentFixture<InformativeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformativeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformativeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
