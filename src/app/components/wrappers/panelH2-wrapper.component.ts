import {Component} from "@angular/core";
import {FieldWrapper} from "@ngx-formly/core";

@Component({
  selector: 'formly-wrapper-panelH1',
  template: '<h2 class="h2">{{ props.label }}</h2>'
})

export class PanelH2FieldWrapper extends FieldWrapper {
}