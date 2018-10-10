import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController, AlertController } from 'ionic-angular';
import { ListadodetalladoPage } from '../listadodetallado/listadodetallado';
//FIREBASE 
import { AngularFireDatabase } from '@angular/fire/database';
;//FIREBASE FIN
/**
 * Generated class for the ListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
 //
@IonicPage()
@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html',
})
export class ListadoPage {
	opcion = "";
  boton:boolean=false;
	
  items: Observable<any[]>;

	  constructor(public navCtrl: NavController, public afDB: AngularFireDatabase,
	   public navParams: NavParams, public menu: MenuController, public alertCtrl: AlertController) {
	  	this.opcion=navParams.get('item');
	  	this.menu.enable(true);
	  	this.opcion=this.opcion.toLowerCase();
	    this.items = afDB.list(this.opcion).valueChanges();
      console.log("ESTOY - "+this.opcion);
      this.cambiar();

	  }
cambiar(){
if(this.opcion == "usuarios" || this.opcion == "clientes" || this.opcion == "trabajadores") {
  this.boton=true;}

}
 

//######################################################################################################################

  ionViewDidLoad() {

    console.log('ionViewDidLoad ListadoPage');
	}
   abrirListadoDetallado(item){
    console.log(item);
    console.log("DE o - "+this.opcion);
    console.log("DE i - "+item.nombre);
    this.navCtrl.push(ListadodetalladoPage,{item:item.nombre});
  }

  //formularios###########################################################################################################
  doPrompt() {
  console.log("hola"+this.opcion);
switch(this.opcion){
  case "usuarios":
    let prompt = this.alertCtrl.create({
      title: 'Nuevo Usuario',
      enableBackdropDismiss : false,
      inputs: [
        {name: 'nombre',placeholder: 'Nombre'},
        {name: 'apellido',placeholder: 'Apellido'},
        {name: 'dni',placeholder: 'DNI'},
        {name: 'cod_usu',placeholder: 'Cod usu'},
        {name: 'departamento',placeholder: 'Departamento'},
        {name: 'username',placeholder: 'Username'},
        {name: 'password',placeholder: 'Password'},
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
               this.afDB.list(this.opcion).push(usuarionuevo);
            }
          }
        }
      ]
    });
  
    prompt.present();
    break;
  case "clientes":
     let prompt = this.alertCtrl.create({
        title: 'Nuevo Cliente',
        enableBackdropDismiss : false,
        inputs: [
          {name: 'nombre',placeholder: 'Nombre'},
          {name: 'apellido',placeholder: 'Apellido'},
          {name: 'direccion',placeholder: 'Direccion'},
          {name: 'email',placeholder: 'Email'},
          {name: 'telefono',placeholder: 'Telefono'},
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
              var clientenuevo = { 
                nombre:data.nombre, 
                apellido:data.apellido, 
                direccion:data.direccion, 
                email:data.email, 
                telefono:data.telefono,
              }
              
              console.log(clientenuevo);
              if(data.nombre.includes(" ") || data.apellido.includes(" ") ||
                data.direccion.includes(" ") || data.email.includes(" ") ||
                data.telefono.includes(" "))
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


                data.direccion == null || data.email == null ||
                data.telefono == null)
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
                 this.afDB.list(this.opcion).push(clientenuevo);
              }
            }
          }
        ]
      });
    
      prompt.present();
      
    
      break;
  case "trabajadores":
    let prompt = this.alertCtrl.create({
          title: 'Nuevo Producto',
          enableBackdropDismiss : false,
          inputs: [
            {name: 'nombre',placeholder: 'Nombre'},
            {name: 'apellido',placeholder: 'Apellido'},
            {name: 'balco',placeholder: 'Balco'},
            {name: 'codigo',placeholder: 'Codigo'},
            {name: 'direccion',placeholder: 'Direccion'},
            {name: 'dni',placeholder: 'Dni'},
            {name: 'email',placeholder: 'Email'},
            {name: 'nCuenta',placeholder: 'Numero cuenta'},
            {name: 'puesto',placeholder: 'Puesto'},
            {name: 'sueldo',placeholder: 'Sueldo'},
            {name: 'telefono',placeholder: 'Telefono'},
            
            
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
                var trabajadornuevo = {nombre:data.nombre, apellido:data.apellido, balco:data.balco, codigo:data.codigo, 
                                    direccion:data.direccion, dni:data.dni, email:data.email, nCuenta:data.nCuenta,
                                    puesto:data.puesto, sueldo:data.sueldo, telefono:data.telefono}
                
                console.log(trabajadornuevo);
                if(data.nombre.includes(" ") || data.apellido.includes(" ") || data.balco.includes(" ") || data.codigo.includes(" ") 
                || data.direccion.includes(" ") || data.dni.includes(" ") || data.email.includes(" ") || data.nCuenta.includes(" ") 
                || data.puesto.includes(" ") || data.sueldo.includes(" ")|| data.telefono.includes(" "))
                {

            console.log("ESPACIO DETECTADO");
            let alert = this.alertCtrl.create({
                title: 'Error',
                message: 'No metas espacios, por favor.',
                buttons: ['Ok']
              });
              alert.present(); 
                }

                else if(data.nombre == null || data.apellido == null || data.balco == null || data.codigo == null 
                || data.direccion == null || data.dni == null || data.email == null || data.nCuenta == null 
                || data.puesto == null || data.sueldo == null|| data.telefono == null)
                  
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
                   this.afDB.list(this.opcion).push(trabajadornuevo);
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
}
