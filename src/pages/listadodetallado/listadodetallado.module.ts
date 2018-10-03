import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadodetalladoPage } from './listadodetallado';

@NgModule({
  declarations: [
    ListadodetalladoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadodetalladoPage),
  ],
})
export class ListadodetalladoPageModule {}
