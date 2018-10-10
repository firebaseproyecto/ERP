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
  llave = [];
  nombre:any;
  user = {};
  private isDisabled: boolean = false; 
  usuario_editado = [];


  logForm() {
  console.log(this.user)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public afDB: AngularFireDatabase, public alertCtrl: AlertController, public serDatos: DatosProvider) {

  	this.afDB.list("usuarios").valueChanges().subscribe(_data =>{
          this.arrData = _data;
          console.log(_data);
      });

    this.afDB.list("usuarios").snapshotChanges().subscribe(_data =>{
      this.llave = _data;
      console.log(this.llave);

    });

    console.log('serDatos_usuarioactual', serDatos.usuario_actual[0].nombre);
        this.nombre =  this.serDatos.usuario_actual[0].nombre;
        this.apellido = this.serDatos.usuario_actual[0].apellido;
        this.dni = this.serDatos.usuario_actual[0].dni;
        this.departamento = this.serDatos.usuario_actual[0].departamento;
        this.username = this.serDatos.usuario_actual[0].username;
        this.password = this.serDatos.usuario_actual[0].password;
 
        this.isDisabled = true;
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
  }

  Editar(){
    this.isDisabled = false;
  }

  Cancelar(){
    this.isDisabled = true;
  }


  /*writeUserData(userId, ape) {
  firebase.database().ref('usuarios/' + userId).set({
    apellido: ape});
}*/

  ComprobarDatos(user){

    console.log('FUNCON COMPROBAR DATOS');
    for (var i = 0; i<this.arrData.length; i++){
      //console.log('FOR');
      if (this.arrData[i].cod_usu == this.serDatos.usuario_actual[0].cod_usu){
        console.log('DENTRO');
        //console.log(this.arrData[i].getUid());
        //console.log(user.ID);
        this.aEditar=(this.llave[i].key);
        console.log('LLAVE DDDDDDDDDD',this.llave[i].key);

        /*this.usuario_editado.push({ apellido: this.apellido,
                                  cod_usu: this.serDatos.usuario_actual[0].cod_usu,
                                  departamento: this.departamento, 
                                  dni: this.dni,
                                  nombre: this.nombre,
                                  password: this.password,
                                  username: this.username});

        console.log(this.usuario_editado);

        /*this.afDB.database.ref("usuarios/"+this.aEditar).set({ apellido: this.apellido,
                                  cod_usu: this.serDatos.usuario_actual[0].cod_usu,
                                  departamento: this.departamento, 
                                  dni: this.dni,
                                  nombre: this.nombre,
                                  password: this.password,
                                  username: this.username});*/

        this.afDB.list("usuarios/"+this.aEditar).set({apellido: this.apellido,
                                  cod_usu: this.serDatos.usuario_actual[0].cod_usu,
                                  departamento: this.departamento, 
                                  dni: this.dni,
                                  nombre: this.nombre,
                                  password: this.password,
                                  username: this.username});
        
      }
    }
  }

}
