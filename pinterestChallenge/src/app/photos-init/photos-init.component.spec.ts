import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosInitComponent } from './photos-init.component';

describe('PhotosInitComponent', () => {
  let component: PhotosInitComponent;
  let fixture: ComponentFixture<PhotosInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
