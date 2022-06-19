import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicFormConfig } from '../../models/dynamic-forms.models';

@Component({
  selector: 'drop-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnInit {
  @Input() formConfig: DynamicFormConfig[] = [];
  @Output() save = new EventEmitter();
  form = new FormGroup({});

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formConfig.forEach((control) =>
      this.form.addControl(
        control.controlName,
        new FormControl(control.initialValue, control.validation)
      )
    );
  }
}
