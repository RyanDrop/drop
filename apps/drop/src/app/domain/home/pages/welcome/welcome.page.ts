/* eslint-disable @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DynamicFormConfig } from '@drop/core/ui/dynamic-forms';
import { WelcomeDialogComponent } from '../../components/welcome-dialog/welcome-dialog.component';

@Component({
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomePage {
  constructor(private dialog: MatDialog) {}

  formConfig: DynamicFormConfig[] = [
    {
      type: 'dropTextInput',
      label: 'Seu nome',
      controlName: 'name',
      placeholder: 'Digite seu nome',
      validation: [Validators.required, Validators.maxLength(30)],
    },
    {
      type: 'dropTextInput',
      label: 'Sua idade',
      controlName: 'age',
      placeholder: '18',
      validation: [Validators.required, Validators.min(8), Validators.max(130)],
    },
    {
      type: 'dropTextInput',
      label: 'Sua altura',
      controlName: 'height',
      placeholder: '1.80 cm',
      mask: '0.00',
      suffix: ' cm',
      validation: [Validators.required],
    },
    {
      type: 'dropTextInput',
      label: 'Sua cidade',
      controlName: 'city',
      placeholder: 'Pallet',
      validation: [Validators.required, Validators.maxLength(20)],
    },
    {
      type: 'dropSelectInput',
      label: 'Escolha seu Pokémon inicial',
      placeholder: 'Selecione seu Pokémon',
      controlName: 'initialPokemon',
      options: ['bulbasaur', 'charmander', 'squirtle'],
      validation: [Validators.required],
    },
  ];

  value(event: any) {
    this.dialog.open(WelcomeDialogComponent, {
      data: event,
    });
  }
}
