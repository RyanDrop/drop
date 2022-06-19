import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { DynamicFormConfig } from '@drop/core/ui/dynamic-forms';
import { DynamicControl } from 'libs/core/ui/dynamic-forms/src/lib/models/dynamic-control.models';

@Component({
  selector: 'drop-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class SelectInputComponent implements DynamicControl {
  @Input() formConfig: DynamicFormConfig;
}
