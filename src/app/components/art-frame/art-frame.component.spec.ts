import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArtFrameComponent} from './art-frame.component';

describe('ArtFrameComponent', () => {
  let component: ArtFrameComponent;
  let fixture: ComponentFixture<ArtFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtFrameComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
