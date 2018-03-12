import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numeric-input',
  template: `
    <input
      [value]="value"
      (change)=handleInput($event.target.value)
      />
  `,
  styles: []
})
export class NumericInputComponent {
  constructor() { }

  @Input()
  public value: number | null = null

  @Output()
  public valueInput = new EventEmitter<number | null>()

  @Output()
  public validity = new EventEmitter<boolean>()

  public handleInput(value: string) {
    if (value === '') {
      this.valueInput.next(null)
      this.validity.next(true)
    } else {
      const parsed = parseFloat(value)
      if (isNaN(parsed)) {
        this.validity.next(false)
      } else {
        this.valueInput.next(parsed)
        this.validity.next(true)
      }
    }
  }
}
