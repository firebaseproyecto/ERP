import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListadoPage } from '../listado/listado';

//FIREBASE 
import { AngularFireDatabase } from '@angular/fire/database';
//FIREBASE FIN

/**
 * Generated class for the DepartamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()//
@Component({
  selector: 'page-departamentos',
  templateUrl: 'departamentos.html',
})
export class DepartamentosPage {

  	 items: Observable<any[]>;
     

	  constructor(public navCtrl: NavController, afDB: AngularFireDatabase) {
	    this.items = afDB.list('departamentos').valueChanges();
     
	  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepartamentosPage');
  }

    abrirListado(item){
    this.navCtrl.push(ListadoPage,{item:item.nombre});
  }

}
