export interface Feature {
  name: string
  price: number
}

export interface FeatureSet {
  name: string
  featureSet: (
    {
      type: 'feature',
      item: Feature
    } |
    {
      type: 'feature-set',
      item: FeatureSet
    }
  )[]
}

export interface AppState {
  featureSet: FeatureSet
}

export interface EditorState {
  
}
