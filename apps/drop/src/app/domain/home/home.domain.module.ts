import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CoreUiDynamicFormsModule } from '@drop/core/ui/dynamic-forms';
import { WelcomeDialogComponent } from './components/welcome-dialog/welcome-dialog.component';
import { HomeDomainRoutingModule } from './home-routing.domain.module';
import { HomePage } from './pages/home/home.page';
import { WelcomePage } from './pages/welcome/welcome.page';

@NgModule({
  declarations: [WelcomePage, HomePage, WelcomeDialogComponent],
  imports: [
    CommonModule,
    HomeDomainRoutingModule,
    CoreUiDynamicFormsModule,
    MatDialogModule,
  ],
})
export class HomeDomainModule {}
