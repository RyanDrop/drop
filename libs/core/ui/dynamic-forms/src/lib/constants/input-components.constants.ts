import { TextInputComponent } from '@drop/drop/ui/inputs';
import { SelectInputComponent } from 'libs/drop/ui/inputs/src/lib/components/select-input/select-input.component';
import { ComponentFields } from '../models/dynamic-forms.models';

export const inputComponents: ComponentFields = {
  dropTextInput: TextInputComponent,
  dropSelectInput: SelectInputComponent,
};
