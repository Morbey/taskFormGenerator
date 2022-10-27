import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {PanelH3FieldWrapper} from "./components/wrappers/panelH3-wrapper.component";
import {PanelDisplayFieldWrapper} from "./components/wrappers/panel-display-wrapper.component";
import {BlankSpaceFieldWrapper} from "./components/wrappers/blank-space-wrapper.component";

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {
    S_WF_STATUS: 'as',
    S_VIRTUAL_Q: 'Dealing Triage',
    I_IS_RTA_FAX: 'SW_NA',
    S_ORIGINAL_CASE: '123'
  };
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'S_VIRTUAL_Q',
      wrappers: [PanelH3FieldWrapper],
      expressions: {
        'props.label': () => 'Case ' + this.model.S_VIRTUAL_Q
      }
    },
    {
      key: 'S_WF_STATUS',
      type: 'input',
      hide: true
    },
    {
      key: 'S_WF_STATUS',
      wrappers: [PanelDisplayFieldWrapper],
      props: {
        description: 'Show if S_WF_STATUS<>SW_NA'
      },
      expressions: {
        'props.label': () => 'STATUS: ' + this.model.S_WF_STATUS,
        'hide': () => this.model.S_WF_STATUS == "SW_NA"
      }
    },
    {
      key: 'S_ORIGINAL_CASE',
      wrappers: [PanelDisplayFieldWrapper],
      props: {
        description: 'Show always'
      },
      expressions: {
        'props.label': () => this.model.S_ORIGINAL_CASE ? 'Original CaseRef: ' + this.model.S_ORIGINAL_CASE : 'Original CaseRef:'
      }
    },
    {
      key: 'BLANK',
      wrappers: [BlankSpaceFieldWrapper]
    },
    {
      key: 'nested.story',
      type: 'textarea',
      props: {
        label: 'Some sweet story',
        placeholder:
            'It allows you to build and maintain your forms with the ease of JavaScript :-)',
        description: '',
      },
      expressions: {
        focus: 'formState.awesomeIsForced',
        'props.description': ({options: {formState}}) => {
          if (formState.awesomeIsForced) {
            return 'And look! This field magically got focus!';
          }

          return '';
        },
      },
    },
    {
      key: 'awesome',
      type: 'checkbox',
      props: {label: ''},
      expressions: {
        'props.disabled': 'formState.awesomeIsForced',
        'props.label': ({options: {formState}}) => {
          if (formState.awesomeIsForced) {
            return 'Too bad, formly is really awesome...';
          } else {
            return 'Is formly totally awesome? (uncheck this and see what happens)';
          }
        },
      },
    },
    {
      key: 'whyNot',
      type: 'textarea',
      props: {
        label: 'Why Not?',
        placeholder: 'Type in here... I dare you',
      },
      expressions: {
        hide: 'model.awesome',
        'props.placeholder': ({options: {formState}}) => {
          if (formState.awesomeIsForced) {
            return `Too bad... It really is awesome! Wasn't that cool?`;
          } else {
            return 'Type in here... I dare you';
          }
        },
        'props.disabled': 'formState.awesomeIsForced',
      },
    }
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}

/**  Copyright 2021 Formly. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */
