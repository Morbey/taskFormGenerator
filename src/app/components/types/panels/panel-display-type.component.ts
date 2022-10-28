import {Component} from '@angular/core';
import {FieldType, FieldTypeConfig} from '@ngx-formly/core';

@Component({
  selector: 'formly-field-panel',
  template: '<div>{{ props.label }}</div>',
})
export class PanelDisplayFieldType extends FieldType<FieldTypeConfig> {
}
