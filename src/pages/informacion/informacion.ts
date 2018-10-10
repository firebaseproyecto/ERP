import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
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
info;
asiento:boolean=false;
cliente:boolean=false;
contabilidad:boolean=false;
productos:boolean=false;
proyecto:boolean=false;
trabajadores:boolean=false;
usuarios:boolean=false;
  opcion="";
private isDisabled:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase) {
  	
  	this.info=navParams.data.item;
  	this.opcion=navParams.get('pagina');
    console.log(this.opcion);
   //this.opcion="proyecto";
   this.comprobar();
   this.isDisabled=true;
  }
comprobar(){
  switch(this.opcion){
    case "asiento":
      this.asiento=true;
      break;
    case "cliente":
      this.cliente=true;
      break;
    case "contabilidad":
      this.contabilidad=true;
      break;
    case "productos":
      this.productos=true;
      break;
    case "proyecto":
      this.proyecto=true;
      break;
    case "trabajadores":
      this.trabajadores=true;
      break;
    case "usuarios":
      this.usuarios=true;
      break;
  }
}
editar(){}

}
