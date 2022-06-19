import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DropUiInputsModule } from '@drop/drop/ui/inputs';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, DropUiInputsModule],
  declarations: [DynamicFormComponent, DynamicFieldDirective],
  exports: [DynamicFormComponent, DynamicFieldDirective],
})
export class CoreUiDynamicFormsModule {}
