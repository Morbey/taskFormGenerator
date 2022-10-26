import {Component} from "@angular/core";
import {FieldWrapper} from "@ngx-formly/core";

@Component({
  selector: 'formly-wrapper-panelH1',
  template: '<h1 class="h1">{{ props.label }}</h1>'
})

export class PanelH1FieldWrapper extends FieldWrapper {
}