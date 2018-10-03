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

  	this.afDB.list("usuarios").valueChanges().subscribe(_data =>{
          this.arrData = _data;
          console.log(_data);
      })
  }

  doPrompt() {

    let prompt = this.alertCtrl.create({
      title: 'Nuevo Usuario',
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
          name: 'codUsu',
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
            console.log(data.nombre);
            console.log(data.apellido);
			console.log(data.dni);
            console.log(data.codUsu);
            console.log(data.departamento);
            console.log(data.username);
            console.log(data.password);
            this.afDB.list("/usuarios/").push(this._data);
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