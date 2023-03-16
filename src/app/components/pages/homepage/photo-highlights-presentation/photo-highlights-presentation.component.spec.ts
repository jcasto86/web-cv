import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoHighlightsPresentationComponent } from './photo-highlights-presentation.component';

describe('PhotoHighlightsPresentationComponent', () => {
  let component: PhotoHighlightsPresentationComponent;
  let fixture: ComponentFixture<PhotoHighlightsPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoHighlightsPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoHighlightsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
