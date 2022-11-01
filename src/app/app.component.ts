import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IPE Form translator into Task Form';
  // Object to save the response returned from the service.
  myresponse: any;

  // Url to fetch the employee records from the spring application.
  readonly APP_URL = 'http://localhost:8080';

  constructor(private _http: HttpClient) { }

  // Method to fetch all employees from the database table.
  getAllAttributes() {
    this._http.get(this.APP_URL + '/attributes').subscribe(
        data => {
          this.myresponse = data;
        },
        error => {
          console.log('Error occurred', error);
        }
    );
  }

  form = new FormGroup({});
  model: any = {
    S_WF_STATUS: 'as',
    S_VIRTUAL_Q: 'Dealing Triage',
    I_IS_RTA_FAX: 'SW_NA',
    S_ORIGINAL_CASE: '123',
  };
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'S_VIRTUAL_Q',
      type: 'H3',
      expressions: {
        'props.label': () => 'Case ' + this.model.S_VIRTUAL_Q,
      },
    },
    {
      key: 'S_WF_STATUS',
      type: 'input',
      hide: true,
    },
    {
      key: 'S_WF_STATUS',
      type: 'panel',
      props: {
        description: 'Show if S_WF_STATUS<>SW_NA',
      },
      expressions: {
        'props.label': () => 'STATUS: ' + this.model.S_WF_STATUS,
        hide: () => this.model.S_WF_STATUS == 'SW_NA',
      },
    },
    {
      key: 'S_ORIGINAL_CASE',
      type: 'panel',
      props: {
        description: 'Show always',
      },
      expressions: {
        'props.label': () =>
            this.model.S_ORIGINAL_CASE
                ? 'Original CaseRef: ' + this.model.S_ORIGINAL_CASE
                : 'Original CaseRef:',
      },
    },
    {
      key: 'BLANK',
      type: 'blank',
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
    },
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
