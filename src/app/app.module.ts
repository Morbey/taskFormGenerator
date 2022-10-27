import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';

import {AppComponent} from './app.component';
import {PanelH1FieldWrapper} from "./components/wrappers/panelH1-wrapper.component";
import {PanelH2FieldWrapper} from "./components/wrappers/panelH2-wrapper.component";
import {PanelH3FieldWrapper} from "./components/wrappers/panelH3-wrapper.component";
import {BlankSpaceFieldWrapper} from "./components/wrappers/blank-space-wrapper.component";
import {PanelDisplayFieldWrapper} from "./components/wrappers/panel-display-wrapper.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        {name: 'required', message: 'This field is required'},
      ],
      wrappers: [
        {name: 'panelH1', component: PanelH1FieldWrapper},
        {name: 'panelH2', component: PanelH2FieldWrapper},
        {name: 'panelH3', component: PanelH3FieldWrapper},
        {name: 'panel-display', component: PanelDisplayFieldWrapper},
        {name: 'blank-space', component: BlankSpaceFieldWrapper}
      ]
    }),
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, PanelH1FieldWrapper, PanelH2FieldWrapper, PanelH3FieldWrapper, PanelDisplayFieldWrapper, BlankSpaceFieldWrapper],
})
export class AppModule {
}

/**  Copyright 2021 Formly. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */
