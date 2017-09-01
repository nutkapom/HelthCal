import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaloriesCalPage } from './calories-cal';

@NgModule({
  declarations: [
    CaloriesCalPage,
  ],
  imports: [
    IonicPageModule.forChild(CaloriesCalPage),
  ],
})
export class CaloriesCalPageModule {}
