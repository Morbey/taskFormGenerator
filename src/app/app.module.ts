import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';

import {AppComponent} from './app.component';
import {DescriptionFieldType} from './components/fieldTypes/description-field.type';
import {PanelH1FieldWrapper} from "./components/wrappers/panelH1-wrapper.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        {name: 'required', message: 'This field is required'},
      ],
      types: [
        {
          name: 'description',
          component: DescriptionFieldType,
          wrappers: ['form-field'],
        },
      ],
      wrappers: [
        {name: 'panelH1', component: PanelH1FieldWrapper}
      ]
    }),
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, DescriptionFieldType, PanelH1FieldWrapper],
})
export class AppModule {
}

/**  Copyright 2021 Formly. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */
