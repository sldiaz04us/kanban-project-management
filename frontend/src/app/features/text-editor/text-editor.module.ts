import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { QuillModule } from 'ngx-quill';

import { TextEditorComponent } from './components/text-editor/text-editor.component';



@NgModule({
  declarations: [
    TextEditorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuillModule
  ],
  exports: [TextEditorComponent]
})
export class TextEditorModule { }
