import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';

import {PanelH1FieldWrapper} from './components/wrappers/panelH1-wrapper.component';
import {PanelH2FieldWrapper} from './components/wrappers/panelH2-wrapper.component';
import {PanelH3FieldWrapper} from './components/wrappers/panelH3-wrapper.component';
import {BlankSpaceFieldWrapper} from './components/wrappers/blank-space-wrapper.component';
import {PanelDisplayFieldWrapper} from './components/wrappers/panel-display-wrapper.component';
import {BlankSpaceFieldType} from './components/types/divs/blank-space-type.component';
import {PanelDisplayFieldType} from './components/types/panels/panel-display-type.component';
import {PanelH1FieldType} from './components/types/panels/panelH1-type.component';
import {PanelH2FieldType} from './components/types/panels/panelH2-type.component';
import {PanelH3FieldType} from './components/types/panels/panelH3-type.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
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
        {name: 'blank-space', component: BlankSpaceFieldWrapper},
      ],
      types: [
        {name: 'blank', component: BlankSpaceFieldType},
        {name: 'panel', component: PanelDisplayFieldType},
        {name: 'H1', component: PanelH1FieldType},
        {name: 'H2', component: PanelH2FieldType},
        {name: 'H3', component: PanelH3FieldType},
      ],
    }),
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: []
})
export class AppModule {
}

/**  Copyright 2021 Formly. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */
