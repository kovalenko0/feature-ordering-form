import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { TreeViewComponent } from './tree-view/tree-view.component'
import { FeaturesStorageService } from './features-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    FeaturesStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
