import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mistake2NestedSubscribeComponent } from './mistake2-nested-subscribe.component';

describe('Mistake2NestedSubscribeComponent', () => {
  let component: Mistake2NestedSubscribeComponent;
  let fixture: ComponentFixture<Mistake2NestedSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mistake2NestedSubscribeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mistake2NestedSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
