import {Component} from "@angular/core";
import {FieldWrapper} from "@ngx-formly/core";

@Component({
  selector: 'formly-wrapper-panelH1',
  template: '<h3 class="h3">{{ props.label }}</h3>'
})

export class PanelH3FieldWrapper extends FieldWrapper {
}