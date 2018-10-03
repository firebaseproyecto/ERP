import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
	
	    /*const loader = this.loadingCtrl.create({
	      content: "Please wait...",
	      duration: 3000
	    });
	    loader.present();*/
	    //this.contador = setTimeout(()=>{this.AbrirPaginaLogin(),3000})
	     
  }

  


  AbrirPaginaLogin(){
  	this.navCtrl.push(LoginPage);
  }

}
