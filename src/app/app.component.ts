import { Component } from '@angular/core'
import { TreeBranch, createTreeRoot } from '../utils/containers/tree'
import { Feature, FeatureSet } from '../entities/feature'
import { FeaturesStorageService } from './features-storage.service'
import { FeaturesOrderStorage } from './features-order-storage'
import { HttpClient } from '@angular/common/http'

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
    this.orderFormStore = new FeaturesOrderStorage()
    this.features = this.featuresStorage.getAvailableFeatures()
    this.orderFormStore.selectFeature(this.featuresStorage.getAvailableFeatures().getChildren()[1])
  }

  public mode: 'edit' | 'order' = 'order'

  public features: TreeBranch<FeatureSet, Feature>

  public orderFormStore: FeaturesOrderStorage

  public editForm() {
    this.mode = 'edit'
  }

  public previewForm() {
    this.mode = 'order'
  }
}
