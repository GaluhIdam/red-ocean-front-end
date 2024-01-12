import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectStackComponent } from './card-project-stack.component';

describe('CardProjectStackComponent', () => {
  let component: CardProjectStackComponent;
  let fixture: ComponentFixture<CardProjectStackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProjectStackComponent]
    });
    fixture = TestBed.createComponent(CardProjectStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
