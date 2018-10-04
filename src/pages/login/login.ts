import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { DepartamentosPage } from '../departamentos/departamentos';

import { AngularFireDatabase } from '@angular/fire/database';
import { DatosProvider } from '../../providers/datos/datos';
import { Storage } from '@ionic/storage';

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
  //usuario_actual: any;
	user = {};
  logForm() {
  console.log(this.user)
  }


  constructor(public navCtrl: NavController, public navParams: NavParams,
  				private afDB: AngularFireDatabase, public alertCtrl: AlertController, public menu: MenuController,
          public serDatos: DatosProvider, private storage: Storage) {
    this.menu.enable(false);

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
            /*this.usuario_actual =[{apellido: this.arrData[i].apellido,
                                  cod_usu: this.arrData[i].cod_usu,
                                  departamento: this.arrData[i].departamento, 
                                  dni: this.arrData[i].dni,
                                  nombre: this.arrData[i].nombre,
                                  password: this.arrData[i].password,
                                  username: this.arrData[i].username}
            ]*/
            this.serDatos.usuario_actual.push({apellido: this.arrData[i].apellido,
                                  cod_usu: this.arrData[i].cod_usu,
                                  departamento: this.arrData[i].departamento, 
                                  dni: this.arrData[i].dni,
                                  nombre: this.arrData[i].nombre,
                                  password: this.arrData[i].password,
                                  username: this.arrData[i].username});
            this.serDatos.guardar_Usuario();

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
