import { QuillModules } from "ngx-quill";

export class QuillEditorUtil {
  static getDefaultOps() {
    return [{ insert: 'Add a description' }];
  }

  static getDefaultModuleOptions(): QuillModules {
    return {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        ['link'],
        ['clean'],
      ],
    };
  }

  static getModuleOptionsWithMedia(): QuillModules {
    return {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        ['link', 'image', 'video'],
        ['clean']
      ],
    };
  }

  static isContentEmpty(delta: { ops: Array<{ [id: string]: string | Object }> }) {
    return delta
      && delta.ops
      && delta.ops[0].insert.toString().trim() === ''
      && delta.ops.length < 2 ? true : false;
  }
}
