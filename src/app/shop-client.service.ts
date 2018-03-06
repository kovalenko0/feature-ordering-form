import { Injectable } from '@angular/core';
import { FeaturesOrderStorage } from './features-order-storage';
import { HttpClient } from '@angular/common/http';

export interface OrderSubmissionResponse {
  saleURL: string
}

@Injectable()
export class ShopClientService {

  constructor(
    private client: HttpClient
  ) { }

  public submitOrder(orderStore: FeaturesOrderStorage) {
    return new Promise<OrderSubmissionResponse>(
      (resolve, reject) => {
        this
          .client
          .post(
            'https://preprod.paymeservice.com/api/generate-sale',
            {
              seller_payme_id: 'MPL14985-68544Z1G- SPV5WK2K-0WJWHC7N',
              sale_price: orderStore.getTotalPrice(),
              currency: 'USD',
              product_name: 'Payment for files',
              installments: '1',
              language: 'en'
            }
          )
          .subscribe(
            (result: any) => resolve({
              saleURL: result.sale_url
            }),
            reject
          )
      }
    )
  }
}
