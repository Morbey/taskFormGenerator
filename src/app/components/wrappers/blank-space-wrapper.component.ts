import {Component} from "@angular/core";
import {FieldWrapper} from "@ngx-formly/core";

@Component({
  selector: 'formly-wrapper-blank-space',
  template: '<div><br></div>'
})

export class BlankSpaceFieldWrapper extends FieldWrapper {
}