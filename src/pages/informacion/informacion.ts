import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InformacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})
export class InformacionPage {

  constructor(public navCtrl: NavController, public afDB: AngularFireDatabase, public navParams: NavParams) {
  	     
  	     /*this.items2=navParams.data(this.opcion);
      console.log("informacion: " + this.items2);*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionPage');
  }

}
