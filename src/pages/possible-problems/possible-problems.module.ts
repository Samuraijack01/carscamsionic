import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PossibleProblemsPage } from './possible-problems';

@NgModule({
  declarations: [
    PossibleProblemsPage,
  ],
  imports: [
    IonicPageModule.forChild(PossibleProblemsPage),
  ],
})
export class PossibleProblemsPageModule {}
