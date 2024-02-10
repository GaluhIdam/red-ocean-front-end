import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestDocumentationComponent } from './latest-documentation.component';

describe('LatestDocumentationComponent', () => {
  let component: LatestDocumentationComponent;
  let fixture: ComponentFixture<LatestDocumentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestDocumentationComponent]
    });
    fixture = TestBed.createComponent(LatestDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
