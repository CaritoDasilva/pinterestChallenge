import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureInitComponent } from './picture-init.component';

describe('PictureInitComponent', () => {
  let component: PictureInitComponent;
  let fixture: ComponentFixture<PictureInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
