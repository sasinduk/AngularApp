import { CommonModule } from '@angular/common';
import { DocumentLoadImagesComponent } from './document-load-images.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DocumentLoadImagesComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'documents/load-images', component: DocumentLoadImagesComponent }
    ]),
  ]
})
export class DocumentModule { }
