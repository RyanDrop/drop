import { Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { inputComponents } from '../constants/input-components.constants';
import { DynamicFormConfig } from '../models/dynamic-forms.models';

@Directive({
  selector: '[dropDynamicField]',
})
export class DynamicFieldDirective implements OnInit {
  @Input('dropDynamicField') formConfig: DynamicFormConfig;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    const component = inputComponents[this.formConfig.type];
    const componentRef = this.viewContainerRef.createComponent(component);
    componentRef.instance.formConfig = this.formConfig;
  }
}
