import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { MenuController } from 'ionic-angular';

import { DatosProvider } from '../../providers/datos/datos';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public menu: MenuController,
                               public serDatos: DatosProvider) {
  //serDatos.remove(usuario_actual);
	this.menu.enable(false);

	    /*const loader = this.loadingCtrl.create({
	      content: "Please wait...",
	      duration: 3000
	    });
	    loader.present();*/
	    //this.contador = setTimeout(()=>{this.AbrirPaginaLogin(),3000})
	     
	    
	 /* let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 5000);

   
  }
  Add(){
  	this.navCtrl.push(LoginPage);
  } */

}


  


  AbrirPaginaLogin(){
  	this.navCtrl.push(LoginPage);
  }

}
