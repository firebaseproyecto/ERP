import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController, AlertController } from 'ionic-angular';
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

	  constructor(public navCtrl: NavController, afDB: AngularFireDatabase,
	   public navParams: NavParams, public menu: MenuController, public alertCtrl: AlertController ) {
	  	this.opcion=navParams.get('item');
	  	this.menu.enable(true);
	  	console.log(this.opcion);
	  	this.opcion=this.opcion.toLowerCase();
	  	console.log(this.opcion);
	  	
	    this.items = afDB.list(this.opcion).valueChanges();
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
            var usuarionuevo = {nombre:data.nombre, apellido:data.apellido, dni:data.dni, cod_usu:data.cod_usu, departamento:data.departamento,
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

            else if(data.nombre == null || data.apellido == null ||
            	data.dni == null || data.cod_usu == null ||
            	data.departamento == null || data.username == null || data.password == null)
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