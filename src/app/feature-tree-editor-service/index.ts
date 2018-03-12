import { Injectable, Inject } from '@angular/core'
import { FeaturesStorageService } from '../features-storage.service'
import { Feature, FeatureSet } from '../../entities/feature'
import { TreeBranch, TreeLeaf, findParent } from '../../utils/containers/tree'
import { validateObject, ObjectValidationResult } from '../../utils/validation';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ObservableValue } from '../../utils/observable-value';

type FeatureNode = TreeLeaf<FeatureSet, Feature>
type FeatureSetNode = TreeBranch<FeatureSet, Feature>
type FeatureTreeNode = FeatureNode | FeatureSetNode

export interface FeatureParameters {
  name: string,
  price: number
}

export interface FeatureSetParams {
  name: string
}

export type FeatureLocation =
  {
    before: FeatureSet | Feature
  } |
  {
    after: FeatureSet | Feature
  } |
  {
    into: FeatureSet
  }

export type FormState = (
  {
    type: 'view'
  } |
  {
    type: 'edit-feature'
    newItemParameters?: {
      parent: FeatureSetNode
    }
    editorState: FeatureEditorState
  } |
  {
    type: 'edit-feature-set',
    newItemParameters?: {
      parent: FeatureSetNode
    }
    editorState: FeatureSetEditorState
  }
)

export class FormEditorService {
  constructor(
    @Inject(FeaturesStorageService)
    private store: FeaturesStorageService
  ) { }

  public formState = new ObservableValue<FormState>({ type: 'view' })
  private get state() {
    return this.formState.get()
  }
  private set state(state: FormState) {
    this.formState.set(state)
  }

  public initiateFeatureEditing(featureNode: FeatureNode) {
    if (this.state.type === 'view') {
      this.state = {
        type: 'edit-feature',
        editorState: new FeatureEditorState(featureNode)
      }
    } else {
      throw new Error(`You can only switch to 'edit-feature' state from 'view' state`)
    }
  }

  public initiateFeatureSetEditing(featureSetNode: TreeBranch<FeatureSet, Feature>) {
    if (this.state.type === 'view') {
      this.state = {
        type: 'edit-feature-set',
        editorState: new FeatureSetEditorState(featureSetNode)
      }
    } else {
      throw new Error(`You can only switch to 'edit-feature-set' state from 'view' state`)
    }
  }

  public initiateNewFeatureCreation(parent: FeatureSetNode) {
    if (this.state.type === 'view') {
      this.state = {
        type: 'edit-feature',
        newItemParameters: {
          parent
        },
        editorState: new FeatureEditorState(null)
      }
    } else {
      throw new Error(`You can only switch to 'edit-feature' state from 'view' state`)
    }
  }

  public initiateNewFeatureSetCreation(parent: FeatureSetNode) {
    if (this.state.type === 'view') {
      this.state = {
        type: 'edit-feature-set',
        newItemParameters: {
          parent
        },
        editorState: new FeatureSetEditorState(null)
      }
    } else {
      throw new Error(`You can only switch to 'edit-feature-set' state from 'view' state`)
    }
  }

  public delete(node: FeatureTreeNode) {
    const parent = findParent(this.store.getAvailableFeatures(), node)
    parent.removeChild(node)
  }

  public cancelEditing() {
    if (
      this.state.type === 'edit-feature' ||
      this.state.type === 'edit-feature-set'
    ) {
      this.state = {
        type: 'view'
      }
    } else {
      throw new Error(`Can't call cancelEditing action when not in 'edit-feature' or 'edit-feature-set' states`)
    }
  }

  public saveChanges() {
    const state = this.state

    if (
      state.type === 'edit-feature' ||
      state.type === 'edit-feature-set'
    ) {
      const nextState = {
        type: 'view'
      } as FormState

      if (state.editorState.noInputDone()) {
        this.state = nextState
      } else {
        const originalNode = state.editorState.node
        if (originalNode != null) {
          if (state.type === 'edit-feature') {
            originalNode.content = state.editorState.getFeature()
          } else if (state.type === 'edit-feature-set') {
            originalNode.content = state.editorState.getFeatureSet()            
          }
        } else if (state.newItemParameters != null) {
          const newItemParameters = state.newItemParameters
          
          if (state.type === 'edit-feature') {
            newItemParameters.parent.addLeaf(state.editorState.getFeature())
          }
          if (state.type === 'edit-feature-set') {
            newItemParameters.parent.addBranch(state.editorState.getFeatureSet())
          }
        }
        this.state = nextState
      }
    } else {
      throw new Error(`Can't call saveChanges action when not in 'edit-feature' or 'edit-feature-set' states`)
    }
  }
}

const nameValidatorConfig = {
  check: (name: string) => name.length > 0 && name.length <= 100,
  error: 'Name should not be empty nor be longer than 100 character'
}

export class FeatureEditorState {
  constructor(public node: FeatureNode | null) {
    this.name = node ? node.content.name : ''
    this.price = node ? node.content.price : null
  }

  public name: string

  public price: number | null

  public getValidityState() {
    return validateObject<Feature>(
      {
        name: this.name,
        price: this.price
      },
      {
        name: nameValidatorConfig,
        price: {
          check: (p: number) => p > 0,
          error: 'Price should be higher than 0'
        }
      }
    )
  }

  public getFeature(): Feature {
    const validationResult = this.getValidityState() 
    if (validationResult.valid) {
      return validationResult.subject
    } else {
      throw new Error(`Can't create feature from provided input`)
    }
  }

  public noInputDone() {
    return this.name === '' && this.price == null
  }
}

export class FeatureSetEditorState {
  constructor(public node: FeatureSetNode | null) {
    this.name = node ? node.content.name : ''
  }

  public name: string

  public getValidityState() {
    return validateObject<FeatureSet>(
      { name: this.name },
      { name: nameValidatorConfig }
    )
  }

  public getFeatureSet(): FeatureSet {
    if (this.getValidityState().valid) {
      return {
        name: this.name
      } as FeatureSet
    } else {
      throw new Error(`Can't create feature set from provided input`)
    }
  }

  public noInputDone() {
    return this.name === ''
  }
}