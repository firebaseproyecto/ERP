import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InformacionPage } from '../informacion/informacion';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';


@Component({

  templateUrl: 'listadodetallado.html',

})

export class ListadodetalladoPage {

items: Observable<any[]>;

  //arrData = [];
  opcion="";
  pagina="";
  items: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afDB: AngularFireDatabase, public alertCtrl: AlertController) {
     this.opcion=navParams.get('item');
      console.log(this.opcion);
      /*this.menu.e
      nable(true);*/
      this.opcion=this.opcion.toLowerCase();
      this.items = afDB.list(this.opcion).valueChanges();
      console.log("ESTOY - "+this.opcion);
      this.pagina=this.opcion;
     
    }
  abrirInformacion(item,pagina){
    console.log("DE o - "+this.opcion);
    console.log("DE i - "+item.nombre+","+item.codigo);
    this.navCtrl.push(InformacionPage,{item:item,pagina:this.pagina});
  }


  doPrompt() {
    console.log("Form : "+this.opcion);
    switch(this.opcion){
      case "proyecto":
       let prompt = this.alertCtrl.create({
          title: 'Nuevo Proyecto',
          enableBackdropDismiss : false,
          inputs: [
            {name: 'estado',placeholder: 'Estado'},
            {name: 'codCliente',placeholder: 'Codigo cliente'},
            {name: 'codigo',placeholder: 'Codigo'},
            {name: 'nombre',placeholder: 'Nombre'},
            {name: 'gastos',placeholder: 'Gastos'},
            {name: 'presupuesto',placeholder: 'presupuesto'},
            {name: 'plataforma',placeholder: 'plataforma'},
            {name: 'fechaInicio',placeholder: 'Fecha inicio'},
            {name: 'fechaFin',placeholder: 'Fecha fin'},
            {name: 'fechaMaxima',placeholder: 'Fecha maxima'},
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
                var proyectonuevo = {
                  estado:data.estado,
                  codCliente:data.codCliente,
                  codigo:data.codigo, 
                  nombre:data.nombre, 
                  gastos:data.gastos, 
                  presupuesto:data.presupuesto, 
                  fechaInicio:data.fechaInicio, 
                  fechaFin:data.fechaFin,
                  plataforma:data.plataforma, 
                  fechaMaxima:data.fechaMaxima
                }
                
                console.log(proyectonuevo);
                if(data.codigo.includes(" ") || data.nombre.includes(" ") || data.gastos.includes(" ") ||
                  data.presupuesto.includes(" ") || data.fechaInicio.includes(" ") ||
                  data.fechaFin.includes(" ") || data.plataforma.includes(" ") || data.fechaMaxima.includes(" ") || 
                  data.estado.includes(" ") || data.codCliente.includes(" "))
                {

            console.log("ESPACIO DETECTADO");
            let alert = this.alertCtrl.create({
                title: 'Error',
                message: 'No metas espacios, por favor.',
                buttons: ['Ok']
              });
              alert.present(); 
                }

                else if(data.codigo == null || data.nombre == null || data.gastos == null ||
                  data.presupuesto == null|| data.fechaInicio == null ||
                  data.fechaFin == null || data.plataforma == null || data.fechaMaxima == null|| 
                  data.estado == null || data.codCliente == null)
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
                   this.afDB.list(this.opcion).push(proyectonuevo);
                }
              }
            }
          ]
        });
      
        prompt.present();
        
      
        break;
      case "productos":
       let prompt = this.alertCtrl.create({
          title: 'Nuevo Producto',
          enableBackdropDismiss : false,
          inputs: [
            {name: 'nombre',placeholder: 'Nombre'},
            {name: 'cantidad',placeholder: 'Cantidad'},
            {name: 'precio',placeholder: 'Precio'},
            {name: 'codigo',placeholder: 'Codigo'},
            
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
                var productonuevo = {nombre:data.nombre, cantidad:data.cantidad, precio:data.precio, codigo:data.codigo}
                
                console.log(productonuevo);
                if(data.nombre.includes(" ") || data.cantidad.includes(" ") || data.precio.includes(" ") || data.codigo.includes(" ") )
                {

            console.log("ESPACIO DETECTADO");
            let alert = this.alertCtrl.create({
                title: 'Error',
                message: 'No metas espacios, por favor.',
                buttons: ['Ok']
              });
              alert.present(); 
                }

                else if(data.nombre == null || data.cantidad == null || data.precio == null || data.codigo == null )
                  
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
                   this.afDB.list(this.opcion).push(productonuevo);
                }
              }
            }
          ]
        });
      
        prompt.present();
        
      
        break;
      default:
        let alert = this.alertCtrl.create({
                title: 'En Mantenimiento',
                buttons: ['Ok']
              });
              alert.present(); 
                
        break;
     } 
    }
borrar(){
   let alert = this.alertCtrl.create({
        title: 'borrar',
        buttons: ['Ok']
      });
      alert.present(); 

}
  }//switch fin
