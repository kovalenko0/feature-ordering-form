import { Component } from '@angular/core'
import { TreeBranch, createTreeRoot } from '../../utils/containers/tree'
import { Feature, FeatureSet } from '../../entities/feature'
import { FeaturesStorageService } from '../features-storage.service'
import { FeaturesOrderStorage } from '../features-order-storage'
import { HttpClient } from '@angular/common/http'
import { FormEditorService } from '../feature-tree-editor-service/';

interface AppState {
  features: 1
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private featuresStorage: FeaturesStorageService,
    private client: HttpClient
  ) {
    this.features = this.featuresStorage.getAvailableFeatures()
    this.orderFormStore = new FeaturesOrderStorage()
  }

  public mode: 'edit' | 'order' = 'edit'

  public features: TreeBranch<FeatureSet, Feature>

  public orderFormStore: FeaturesOrderStorage

  public editorService: FormEditorService | null = null

  public editForm() {
    this.mode = 'edit'
    this.editorService = new FormEditorService(this.featuresStorage)
  }

  public previewForm() {
    this.mode = 'order'
    this.orderFormStore = new FeaturesOrderStorage()
  }
}
