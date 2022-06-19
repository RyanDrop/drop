import { Type } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { DynamicControl } from './dynamic-control.models';

export type Fields = 'dropTextInput' | 'dropSelectInput';

export type DynamicFormConfig = {
  type: Fields;
  label: string;
  controlName: string;
  mask?: string;
  suffix?: string;
  prefix?: string;
  initialValue?: any;
  placeholder?: string;
  options?: string[];
  validation?: ValidatorFn[];
};

export type ComponentFields = {
  [Property in Fields]: Type<DynamicControl>;
};
