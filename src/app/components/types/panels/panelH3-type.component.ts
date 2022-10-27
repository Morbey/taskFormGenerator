import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-type-panelH3',
  template: '<h3 class="h3">{{ props.label }}</h3>',
})
export class PanelH3FieldType extends FieldType<FieldTypeConfig> {}
