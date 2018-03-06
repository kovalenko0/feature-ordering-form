import { Injectable } from '@angular/core'
import { FeaturesStorageService } from './features-storage.service'
import { Feature, FeatureSet } from '../entities/feature'
import { TreeBranch } from '../utils/containers/tree'
import { validateObject, ObjectValidationResult } from '../utils/validation';

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
  } | {
    into: FeatureSet
  }

@Injectable()
export class FormEditorService {
  constructor(
    private store: FeaturesStorageService
  ) { }

  public addChildFeature(params: FeatureParameters, location: TreeBranch<FeatureSet, Feature>) {
    const validationResults = this.validateFeatureParams(params)

    if (validationResults.valid) {
      location.addLeaf({
        name: params.name,
        price: params.price
      })
    } else {
      this.throwValidationError(validationResults)
    }
  }

  private throwValidationError(validationResults: ObjectValidationResult<any>) {
    throw new TypeError(`Invalid entity parameters supplied. ${validationResults.errors.map(err => err.message)}`)
  }

  public addChildFeatureSet(params: FeatureSetParams, location: TreeBranch<FeatureSet, Feature>) {
    const validationResults = this.validateFeatureSetParams(params)

    if (validationResults.valid) {
      location.addBranch({
        name: params.name
      })
    } else {
      this.throwValidationError(validationResults)
    }
  }

  private static nameValidatorConfig = {
    check: (name: string) => name.length > 0 && name.length <= 100,
    error: 'Name should not be empty nor be longer than 100 character'
  }

  public validateFeatureParams(params: FeatureParameters) {
    return validateObject(params, {
      name: FormEditorService.nameValidatorConfig,
      price: {
        check: (p: number) => p > 0,
        error: 'Price should be higher than 0'
      }
    })
  }

  public validateFeatureSetParams(params: FeatureSetParams) {
    return validateObject<FeatureSetParams>(params, {
      name: FormEditorService.nameValidatorConfig
    })
  }
}
