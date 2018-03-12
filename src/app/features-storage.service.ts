import { Injectable } from '@angular/core';
import { Feature, FeatureSet } from '../entities/feature';
import { TreeBranch, serializeTree, deserializeTree } from '../utils/containers/tree';

const dummyFeatures = [
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


@Injectable()
export class FeaturesStorageService {
  constructor() {

    this.features = this.load()
    this.features.stateUpdated.subscribe(state => localStorage.setItem(
      'feature-set',
      serializeTree(
        this.features,
        node => JSON.stringify(node),
        node => JSON.stringify(node)
      )
    ))
  }

  private load(): TreeBranch<FeatureSet, Feature> {
    const serialized = localStorage.getItem('feature-set')

    if (!serialized) {
      return createTreeFromFeatures(dummyFeatures)
    } else {
      return deserializeTree(serialized, node => JSON.parse(node), node => JSON.parse(node))
    }
  }

  private features: TreeBranch<FeatureSet, Feature>

  public getAvailableFeatures() {
    return this.features
  }
}

function createTreeFromFeatures(features: any[], tree?: TreeBranch<FeatureSet, Feature>) {
  const branch = tree || new TreeBranch<FeatureSet, Feature>({ name: 'Additional OS features' }, null)
  
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