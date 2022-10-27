import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-blank',
  template: '<div><br></div>',
})
export class BlankSpaceFieldType extends FieldType<FieldTypeConfig> {}
