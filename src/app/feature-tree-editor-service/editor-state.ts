import { FeatureSet, Feature } from "../../entities/feature";
import { TreeNode, TreeLeaf, TreeBranch } from "../../utils/containers/tree";

export enum StateType {
  ViewFeatures,
  CreateNewFeature,
  CreateNewFeatureSet,
  EditFeature,
  EditFeatureSet,
  ConfirmDeleteItem,
  ConfirmCancelEditing
}

export class EditorStateContainer {
  private state: StateDetails = { type: StateType.ViewFeatures }

  public get currentState() {
    return this.state
  }

  private haveUnsavedInput(state: StateDetails) {
    return (
      state.type === StateType.EditFeature &&
      (
        state.newName !== '' ||
        state.newPrice != null
      )
    ) ||
    (
      state.type === StateType.EditFeatureSet &&
      state.newName !== ''
    )
  }

  private stateTransitionRules = [
    {
      when: state => state.type === StateType.ViewFeatures,
      allow: [
        StateType.CreateNewFeature,
        StateType.CreateNewFeatureSet,
        StateType.ConfirmDeleteItem,
        StateType.EditFeature,
        StateType.EditFeatureSet
      ]
    },
    {
      when: state => !this.haveUnsavedInput(state),
      allow: [
        StateType.ViewFeatures
      ]
    },
    {
      when: state => this.haveUnsavedInput(state),
      allow: [
        StateType.ConfirmCancelEditing
      ]
    },
    {
      when: state => (
        state.type === StateType.ConfirmDeleteItem &&
        !state.gotUserConfirmation
      ),
      allow: [
        StateType.ViewFeatures
      ]
    }
  ] as {
    when: (state: StateDetails) => boolean,
    allow: StateType[]
  }[]

  public switchState() {

  }
}

export type StateDetails =
  ViewFeatures |
  CreateNewFeature |
  CreateNewFeatureSet |
  EditFeature |
  EditFeatureSet |
  ConfirmCancelEditing |
  ConfirmDeleteItem

export interface ViewFeatures {
  type: StateType.ViewFeatures
}

export interface ConfirmCancelEditing {
  type: StateType.ConfirmCancelEditing,
  gotUserConfirmation: boolean,
  previousState: StateDetails
}

export interface ConfirmDeleteItem {
  type: StateType.ConfirmDeleteItem,
  gotUserConfirmation: boolean
}

export interface CreateNewFeature {
  type: StateType.CreateNewFeature
  newName: string
  newPrice: number | null
}

export interface CreateNewFeatureSet {
  type: StateType.CreateNewFeature
  newName: string
}

export interface EditFeature {
  type: StateType.EditFeature
  originalFeature: TreeLeaf<FeatureSet, Feature>
  newName: string,
  newPrice: number | null
}

export interface EditFeatureSet {
  type: StateType.EditFeatureSet
  originalFeatureSet: TreeBranch<FeatureSet, Feature>
  newName: string
}
