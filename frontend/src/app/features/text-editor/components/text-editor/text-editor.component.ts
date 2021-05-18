import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { defaultQuillEditorOptions } from '@features/text-editor/config/quill-editor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent {
  @Input() form: FormGroup;
  @Input() textEditorOptions = defaultQuillEditorOptions;

  constructor() { }

}
