import {Component} from '@angular/core';
import {FieldType, FieldTypeConfig} from '@ngx-formly/core';

@Component({
  selector: 'formly-type-panelH1',
  template: '<h1 class="h1">{{ props.label }}</h1>',
})
export class PanelH1FieldType extends FieldType<FieldTypeConfig> {
}
