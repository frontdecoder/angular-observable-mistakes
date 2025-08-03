import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mistake1UnsubscribeComponent } from './mistake1-unsubscribe.component';

describe('Mistake1UnsubscribeComponent', () => {
  let component: Mistake1UnsubscribeComponent;
  let fixture: ComponentFixture<Mistake1UnsubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mistake1UnsubscribeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mistake1UnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
