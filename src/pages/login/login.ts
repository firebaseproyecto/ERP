import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { DepartamentosPage } from '../departamentos/departamentos';

import { AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	arrData = [];

	user = {};
  logForm() {
  console.log(this.user)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
  				private afDB: AngularFireDatabase, public alertCtrl: AlertController) {
  		this.afDB.list("usuarios").valueChanges().subscribe(_data =>{
        this.arrData = _data;
        console.log(this.arrData);
      	})
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  AbrirDepartamentos(){
        let blnencontrado:boolean = false;
        console.log(this.arrData);
        for (var i = 0; i < this.arrData.length; i++){
            console.log(this.user.username, this.arrData[i].username, this.user.pwd, this.arrData[i].password);
            if(this.user.username == this.arrData[i].username  && this.user.pwd == this.arrData[i].password){

            let alert = this.alertCtrl.create({
	        title: 'Datos correctos',
	        subTitle: 'Bienvenido.',
	        buttons: ['OK']
	        });
	        alert.present();

            this.navCtrl.push(DepartamentosPage);
            blnencontrado = true;
            break;
          }
        }
//
      if (!blnencontrado){
        
        let alert = this.alertCtrl.create({
        title: 'Datos incorrectos',
        subTitle: 'Los datos ingresados son incorrectos.',
        buttons: ['OK']
        });
        alert.present();
      }
  }

}
