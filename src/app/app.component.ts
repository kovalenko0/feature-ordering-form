import { Component } from '@angular/core';
import { TreeBranch, createTreeRoot } from '../utils/containers/tree';
import { Feature } from '../entities/feature';
import { FeatureGroupUIProps, FeatureUIProps } from './tree-view/tree-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const features: Feature[] = [
      {
        name: 'File system drivers',
        extendable: true,
        options: [
          {
            name: 'NTFS',
            extendable: false
          },
          {
            name: 'Fat32',
            extendable: false
          },
          {
            name: 'ext4',
            extendable: false
          }
        ]
      },
      {
        name: 'Multimedia features',
        extendable: true,
        options: [
          {
            name: 'Audio drivers',
            extendable: false
          },
          {
            name: 'Video drivers',
            extendable: false
          }
        ]
      }
    ]

    this.features = createTreeFromFeatures(features)
  }

  public features: TreeBranch<FeatureGroupUIProps, FeatureUIProps>
}

function createTreeFromFeatures(features: Feature[], tree?: TreeBranch<FeatureGroupUIProps, FeatureUIProps>) {
  const branch = tree || new TreeBranch<FeatureGroupUIProps, FeatureUIProps>({ name: 'Additional OS features', icon: null, selected: false })
  
  features.forEach(feature => {
    if (feature.extendable) {
      const newBranch = branch.addBranch({
        name: feature.name,
        selected: false,
        icon: null
      })
      createTreeFromFeatures(feature.options, newBranch)
    } else {
      branch.addLeaf({
        name: feature.name,
        selected: false,
        icon: null
      })
    }
  })

  return branch
}
