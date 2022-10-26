import {Component} from "@angular/core";
import {FieldWrapper} from "@ngx-formly/core";

@Component({
  selector: 'formly-wrapper-panelH1',
  template: '' +
      '<div class="card">' +
        '<h1 class="card-header">Its time to party</h1>' +
        '<h1 class="card-header">{{ props.label }}</h1>' +
        '<div class="card-body">' +
          '<ng-container #fieldComponent></ng-container>' +
        '</div>' +
      '</div>',
})

export  class PanelH1FieldWrapper extends FieldWrapper {}