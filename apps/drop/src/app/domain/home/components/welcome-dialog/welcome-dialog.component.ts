import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'drop-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      age: number;
      height: number;
      city: string;
      initialPokemon: string;
    }
  ) {}
}
