import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { DynamicFormConfig } from '@drop/core/ui/dynamic-forms';
import { DynamicControl } from 'libs/core/ui/dynamic-forms/src/lib/models/dynamic-control.models';

@Component({
  selector: 'drop-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class TextInputComponent implements DynamicControl {
  formConfig: DynamicFormConfig;
}
