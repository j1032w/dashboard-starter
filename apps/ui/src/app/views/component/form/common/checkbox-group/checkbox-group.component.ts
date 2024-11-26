import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

export type checkboxOption = { name: string; id: string };

@Component({
  selector: 'das-comp-checkbox-group',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox-group.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true
    }
  ]
})
export class CheckboxGroupComponent implements ControlValueAccessor {
  @Input() options: checkboxOption[];

  selectedValues: string[] = [];
  onChange: (value: string[]) => void;
  onTouched: () => void ;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string[]): void {
    this.selectedValues = value || [];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDisabledState?(isDisabled: boolean): void {
    // Implement if the component needs to support disabled state
  }

  isChecked(id: string): boolean {
    return this.selectedValues.includes(id);
  }

  onCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const value = checkbox.value;

    if (checkbox.checked) {
      this.selectedValues.push(value);
    } else {
      this.selectedValues = this.selectedValues.filter(item => item !== value);
    }

    this.onChange(this.selectedValues);
    this.onTouched();
  }
}
