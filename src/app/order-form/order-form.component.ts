import { Component, OnInit, Input } from '@angular/core';
import { FeaturesOrderStorage } from '../features-order-storage';
import { TreeBranch, TreeNode } from '../../utils/containers/tree';
import { FeatureSet, Feature } from '../../entities/feature';
import { ShopClientService } from '../shop-client.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  constructor(
    private client: ShopClientService
  ) { }

  @Input()
  public orderFormStore: FeaturesOrderStorage

  @Input()
  public features: TreeBranch<FeatureSet, Feature>

  public responseURL: string | null

  public serverError: boolean = false

  public busy: boolean = false

  public get disabled() {
    return this.busy
  }

  public submit() {
    this.serverError = false
    this.busy = true

    this
      .client
      .submitOrder(this.orderFormStore)
      .then(result => this.responseURL = result.saleURL)
      .catch(() => this.serverError = true)
      .then(() => this.busy = false)
  }

  public preview: string | null = null

  public showPreview(node: TreeNode<FeatureSet, Feature>) {
    this.preview = `Preview of ${node.content.name}` 
  }
}
