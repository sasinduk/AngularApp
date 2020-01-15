import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentLoadImagesComponent } from './document-load-images.component';

describe('DocumentLoadImagesComponent', () => {
  let component: DocumentLoadImagesComponent;
  let fixture: ComponentFixture<DocumentLoadImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentLoadImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentLoadImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
