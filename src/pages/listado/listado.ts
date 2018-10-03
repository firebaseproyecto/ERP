import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//FIREBASE 
import { AngularFireDatabase } from '@angular/fire/database';
//FIREBASE FIN
/**
 * Generated class for the ListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html',
})
export class ListadoPage {
	opcion = "";
	
  items: Observable<any[]>;

	  constructor(public navCtrl: NavController, afDB: AngularFireDatabase, public navParams: NavParams ) {
	  	this.opcion=navParams.get('item');
	  	console.log(this.opcion);
	  	this.opcion=this.opcion.toLowerCase();
	  	console.log(this.opcion);
	  	
	    this.items = afDB.list(this.opcion).valueChanges();
	  }

  ionViewDidLoad() {


  	
    console.log('ionViewDidLoad ListadoPage');
}
}
