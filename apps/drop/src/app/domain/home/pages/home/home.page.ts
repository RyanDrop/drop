/* eslint-disable @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'drop-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
