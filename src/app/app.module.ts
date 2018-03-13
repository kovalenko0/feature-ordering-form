import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app/app.component'
import { TreeViewComponent } from './tree-view/tree-view.component'
import { FeaturesStorageService } from './features-storage.service'
import { OrderFormComponent } from './order-form/order-form.component'
import { ShopClientService } from './shop-client.service'
import { EditableTreeViewComponent } from './editable-tree-view/editable-tree-view.component'
import { FeatureTreeEditorFormComponent } from './feature-tree-editor-form/feature-tree-editor-form.component'
import { FormEditorService } from './feature-tree-editor-service'
import { InlineFeatureEditorComponent } from './editable-tree-view/inline-feature-editor/inline-feature-editor.component'
import { NumericInputComponent } from './form-elements/numeric-input/numeric-input.component'
import { InlineFeatureSetEditorComponent } from './editable-tree-view/inline-feature-set-editor/inline-feature-set-editor.component'


@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    OrderFormComponent,
    EditableTreeViewComponent,
    FeatureTreeEditorFormComponent,
    InlineFeatureEditorComponent,
    InlineFeatureSetEditorComponent,
    NumericInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    FeaturesStorageService,
    ShopClientService,
    FormEditorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
