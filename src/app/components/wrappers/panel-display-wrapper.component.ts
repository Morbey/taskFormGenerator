import {Component} from "@angular/core";
import {FieldWrapper} from "@ngx-formly/core";

@Component({
  selector: 'formly-wrapper-panel-display',
  template: '<div>{{ props.label }}</div>'
})

export class PanelDisplayFieldWrapper extends FieldWrapper {
}