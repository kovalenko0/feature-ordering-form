import { Injectable } from '@angular/core';
import { Feature, FeatureSet } from '../entities/feature';
import { TreeBranch } from '../utils/containers/tree';

@Injectable()
export class FeaturesStorageService {
  constructor() {
    const features = [
      {
        name: 'File system drivers',
        features: [
          {
            name: 'NTFS',
          },
          {
            name: 'Fat32',
          },
          {
            name: 'ext4',
          }
        ]
      },
      {
        name: 'Multimedia features',
        features: [
          {
            name: 'Audio drivers',
          },
          {
            name: 'Video drivers',
            features: [
              {
                name: 'NVIDIA 10x'
              },
              {
                name: 'NVIDIA 9x'
              },
              {
                name: 'AMD desktop graphics'
              }
            ]
          }
        ]
      }
    ]

    this.features = createTreeFromFeatures(features)
  }

  private features: TreeBranch<FeatureSet, Feature>

  public getAvailableFeatures() {
    return this.features
  }
}

function createTreeFromFeatures(features: any[], tree?: TreeBranch<FeatureSet, Feature>) {
  const branch = tree || new TreeBranch<FeatureSet, Feature>({ name: 'Additional OS features' })
  
  features.forEach(feature => {
    if (feature.features != null) {
      const newBranch = branch.addBranch({
        name: feature.name
      })
      createTreeFromFeatures(feature.features, newBranch)
    } else {
      branch.addLeaf({
        name: feature.name,
        price: getRandomPrice()
      })
    }
  })

  return branch
}

function getRandomPrice() {
  return +(Math.random() * 10 + 5).toFixed(2)
}