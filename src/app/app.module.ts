import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { TreeViewComponent } from './tree-view/tree-view.component'
import { FeaturesStorageService } from './features-storage.service';
import { OrderFormComponent } from './order-form/order-form.component';
import { ShopClientService } from './shop-client.service';
import { EditableTreeViewComponent } from './editable-tree-view/editable-tree-view.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    OrderFormComponent,
    EditableTreeViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    FeaturesStorageService,
    ShopClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
