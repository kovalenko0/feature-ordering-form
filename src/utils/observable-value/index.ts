import { remove } from "../array-utils";

export type Observer<Subject> = (newValue: Subject, oldValue: Subject) => void

export interface Emitter<Subject> {
  subscribe(observer: Observer<Subject>): void
  unsubscribe(observer: Observer<Subject>): void
}

export interface Input<Subject> {
  set(value: Subject): void
}

export interface Output<Subject> {
  get(): Subject
}

export abstract class Emitter<Subject> {
  protected observers = [] as Observer<Subject>[]

  public subscribe(observer: Observer<Subject>)  {
    this.observers.push(observer)
  }

  public unsubscribe(observer: Observer<Subject>) {
    remove(this.observers, observer)
  }
}

export class ObservableOutput<Subject> extends Emitter<Subject> implements Output<Subject> {
  constructor(initialValue: Subject) {
    super()
    this.value = initialValue
  }

  protected value: Subject

  public get() {
    return this.value
  }
}

export class ObservableValue<Subject> extends ObservableOutput<Subject> implements Input<Subject> {
  public set(newValue: Subject) {
    const oldValue = this.value

    this.value = newValue

    this.observers.forEach(observer => observer(newValue, oldValue))
  }
}
