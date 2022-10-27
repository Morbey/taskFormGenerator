import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-type-panelH2',
  template: '<h2 class="h2">{{ props.label }}</h2>',
})
export class PanelH2FieldType extends FieldType<FieldTypeConfig> {}
