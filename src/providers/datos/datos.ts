import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class DatosProvider {
	usuario_actual: any [] = [];

  constructor(public storage: Storage) {
    console.log('Hello DatosProvider Provider');
  }


  guardar_Usuario(){
  		localStorage.setItem("usuario_actual", JSON.stringify(this.usuario_actual));
  }	

}
