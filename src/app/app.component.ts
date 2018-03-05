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

  public features: TreeBranch<FeatureSet, Feature>

  public orderFormStore: FeaturesOrderStorage

  public responseURL: string | null

  public serverError: boolean = false

  public submit() {
    this
      .client
      .post(
        'https://preprod.paymeservice.com/api/generate-sale',
        {
          seller_payme_id: 'MPL14985-68544Z1G- SPV5WK2K-0WJWHC7N',
          sale_price: this.orderFormStore.getTotalPrice(),
          currency: 'USD',
          product_name: 'Payment for files',
          installments: '1',
          language: 'en'
        }
      )
      .subscribe(
        (result: any) => {
          this.responseURL = result.sale_url
          this.serverError = false
        },
        (error: any) => {
          this.serverError = true
        }
      )
  }
}
