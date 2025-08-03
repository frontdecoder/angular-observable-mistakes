import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mistake3OverusingSubjectComponent } from './mistake3-overusing-subject.component';

describe('Mistake3OverusingSubjectComponent', () => {
  let component: Mistake3OverusingSubjectComponent;
  let fixture: ComponentFixture<Mistake3OverusingSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mistake3OverusingSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mistake3OverusingSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
