import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { DatosProvider } from '../../providers/datos/datos';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({

  templateUrl: 'formlogin.html',

})

export class FormloginPage {

  items: Observable<any[]>;
  arrData = [];
  user = {};
  logForm() {
  console.log(this.user)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private afDB: AngularFireDatabase, public alertCtrl: AlertController, public serDatos: DatosProvider) {

  	this.afDB.list("usuarios").valueChanges().subscribe(_data =>{
          this.arrData = _data;
          console.log(_data);
      })


    console.log('serDatos_usuarioactual', serDatos.usuario_actual);
        //nombre =  this.serDatos.usuario_actual.nombre;
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
  }

}
