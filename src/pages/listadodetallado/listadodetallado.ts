import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({

  templateUrl: 'listadodetallado.html',

})

export class ListadodetalladoPage {

items: Observable<any[]>;

  arrData = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private afDB: AngularFireDatabase, public alertCtrl: AlertController) {

  	this.afDB.list('usuarios').valueChanges().subscribe(_data =>{
          this.arrData = _data;
          console.log(_data);
      })
  }



  doPrompt() {

    let prompt = this.alertCtrl.create({
      title: 'Nuevo Usuario',
      enableBackdropDismiss : false,
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre'
        },
        {
          name: 'apellido',
          placeholder: 'Apellido'
        },
        {
          name: 'dni',
          placeholder: 'DNI'
        },
        {
          name: 'cod_usu',
          placeholder: 'Cod usu'
        },
        {
          name: 'departamento',
          placeholder: 'Departamento'
        },
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Nuevo Registro',
          handler: data => {
            console.log('Saved clicked');
            console.log(JSON.stringify(data));
            var usuarionuevo = {nombre:data.nombre, apellido:data.apellido, dni:data.dni, cod_usu:data.codUsu, departamento:data.departamento,
            					username:data.username, password:data.password}
            
            console.log(usuarionuevo);
            if(data.nombre.includes(" ") || data.apellido.includes(" ") ||
            	data.dni.includes(" ") || data.cod_usu.includes(" ") ||
            	data.departamento.includes(" ") || data.username.includes(" ") || data.password.includes(" "))
            {

				console.log("ESPACIO DETECTADO");
				let alert = this.alertCtrl.create({
			      title: 'Error',
			      message: 'No metas espacios, por favor.',
			      buttons: ['Ok']
			    });
			    alert.present(); 
            }

            else if(data.nombre != null && data.apellido != null &&
            	data.dni != null && data.cod_usu != null &&
            	data.departamento != null && data.username != null && data.password != null)
            {
            	console.log("FALTAN DATOS");
				let alert = this.alertCtrl.create({
			      title: 'Error',
			      message: 'Rellena todos los campos, por favor.',
			      buttons: ['Ok']
			    });
			    alert.present(); 
            }


            else{
            	 //this.afDB.list("/usuarios/").push(usuarionuevo);
            }
          }
        }
      ]
    });
    prompt.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
  }

}