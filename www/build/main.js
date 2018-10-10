webpackJsonp([4],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//FIREBASE 

//FIREBASE FIN
/**
 * Generated class for the ListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListadoPage = /** @class */ (function () {
    function ListadoPage(navCtrl, afDB, navParams, menu, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.opcion = "";
        this.opcion = navParams.get('item');
        this.menu.enable(true);
        console.log(this.opcion);
        this.opcion = this.opcion.toLowerCase();
        console.log(this.opcion);
        this.items = afDB.list(this.opcion).valueChanges();
    }
    ListadoPage.prototype.doPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Nuevo Usuario',
            enableBackdropDismiss: false,
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Nuevo Registro',
                    handler: function (data) {
                        console.log('Saved clicked');
                        console.log(JSON.stringify(data));
                        var usuarionuevo = { nombre: data.nombre, apellido: data.apellido, dni: data.dni, cod_usu: data.cod_usu, departamento: data.departamento,
                            username: data.username, password: data.password };
                        console.log(usuarionuevo);
                        if (data.nombre.includes(" ") || data.apellido.includes(" ") ||
                            data.dni.includes(" ") || data.cod_usu.includes(" ") ||
                            data.departamento.includes(" ") || data.username.includes(" ") || data.password.includes(" ")) {
                            console.log("ESPACIO DETECTADO");
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Error',
                                message: 'No metas espacios, por favor.',
                                buttons: ['Ok']
                            });
                            alert_1.present();
                        }
                        else if (data.nombre == null || data.apellido == null ||
                            data.dni == null || data.cod_usu == null ||
                            data.departamento == null || data.username == null || data.password == null) {
                            console.log("FALTAN DATOS");
                            var alert_2 = _this.alertCtrl.create({
                                title: 'Error',
                                message: 'Rellena todos los campos, por favor.',
                                buttons: ['Ok']
                            });
                            alert_2.present();
                        }
                        else {
                            //this.afDB.list("/usuarios/").push(usuarionuevo);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ListadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListadoPage');
    };
    ListadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listado',template:/*ion-inline-start:"F:\GitHubFirebaseProyecto\ERP\src\pages\listado\listado.html"*/'<ion-header>\n\n  <ion-navbar>\n  	<ion-buttons end>\n  	<button ion-button menuToggle>\n  		<ion-icon name ="menu"></ion-icon>\n  	</button>\n  	</ion-buttons>\n    <ion-title>listado</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n 	<ion-list>\n		<ion-item class="text" *ngFor="let item of items | async" (click)="abrirListadoDetallado(item)">\n			{{item.nombre}} \n      <!--<button ion-button color="secondary" large clear item-right (click)="borrar()">\n        <ion-icon  ios="ios-trash" md="md-trash"></ion-icon>\n      </button>-->\n		</ion-item>\n\n	</ion-list>\n  <div class="boton" *ngIf="boton">\n    <button ion-button color="secondary" large clear item-right (click)="doPrompt()">\n    <ion-icon name="add-circle"></ion-icon>\n    </button>\n   </div>\n</ion-content>\n'/*ion-inline-end:"F:\GitHubFirebaseProyecto\ERP\src\pages\listado\listado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ListadoPage);
    return ListadoPage;
}());

//# sourceMappingURL=listado.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__departamentos_departamentos__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_datos_datos__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, afDB, alertCtrl, menu, serDatos, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.serDatos = serDatos;
        this.storage = storage;
        this.arrData = [];
        //usuario_actual: any;
        this.user = {};
        this.menu.enable(false);
        this.afDB.list("usuarios").valueChanges().subscribe(function (_data) {
            _this.arrData = _data;
            console.log(_this.arrData);
        });
    }
    LoginPage.prototype.logForm = function () {
        console.log(this.user);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.AbrirDepartamentos = function () {
        var blnencontrado = false;
        console.log(this.arrData);
        for (var i = 0; i < this.arrData.length; i++) {
            console.log(this.user.username, this.arrData[i].username, this.user.pwd, this.arrData[i].password);
            if (this.user.username == this.arrData[i].username && this.user.pwd == this.arrData[i].password) {
                var alert_1 = this.alertCtrl.create({
                    title: 'Datos correctos',
                    subTitle: 'Bienvenido.',
                    buttons: ['OK']
                });
                alert_1.present();
                /*this.usuario_actual =[{apellido: this.arrData[i].apellido,
                                      cod_usu: this.arrData[i].cod_usu,
                                      departamento: this.arrData[i].departamento,
                                      dni: this.arrData[i].dni,
                                      nombre: this.arrData[i].nombre,
                                      password: this.arrData[i].password,
                                      username: this.arrData[i].username}
                ]*/
                this.serDatos.usuario_actual.push({ apellido: this.arrData[i].apellido,
                    cod_usu: this.arrData[i].cod_usu,
                    departamento: this.arrData[i].departamento,
                    dni: this.arrData[i].dni,
                    nombre: this.arrData[i].nombre,
                    password: this.arrData[i].password,
                    username: this.arrData[i].username });
                this.serDatos.guardar_Usuario();
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__departamentos_departamentos__["a" /* DepartamentosPage */]);
                blnencontrado = true;
                break;
            }
        }
        //
        if (!blnencontrado) {
            var alert_2 = this.alertCtrl.create({
                title: 'Datos incorrectos',
                subTitle: 'Los datos ingresados son incorrectos.',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\GitHubFirebaseProyecto\ERP\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form (ngSubmit)="logForm()">\n		<div class= "formulario">\n			<ion-list inset >\n					<div>\n					  <ion-item>\n					    <ion-label>Username</ion-label>\n					    <ion-input type="text" [(ngModel)]="user.username" name="username" [ngModelOptions]="{standalone: true}"></ion-input>\n					  </ion-item>\n					<br/>\n					  <ion-item>\n					    <ion-label>Password</ion-label>\n					    <ion-input type="password" [(ngModel)]="user.pwd" name="pwd" [ngModelOptions]="{standalone: true}"></ion-input>\n					  </ion-item>\n					</div>\n				  <br/>\n				<div class="boton"> \n					<button ion-button clear item-end (click)="AbrirDepartamentos(user)" type="submit">Login</button>\n				</div>\n			</ion-list>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"F:\GitHubFirebaseProyecto\ERP\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_datos_datos__["a" /* DatosProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 198;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/departamentos/departamentos.module": [
		503,
		11
	],
	"../pages/informacion/informacion.module": [
		508,
		8
	],
	"../pages/listado/listado.module": [
		504,
		10
	],
	"../pages/login/login.module": [
		506,
		9
	],
	"../pages/menulateral/menulateral.module": [
		505,
		7
	],
	"../pages/sign-up/sign-up.module": [
		509,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 239;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_datos_datos__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadingCtrl, menu, serDatos) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.serDatos = serDatos;
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
    HomePage.prototype.AbrirPaginaLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\GitHubFirebaseProyecto\ERP\src\pages\home\home.html"*/'\n<ion-content>\n\n\n  <div class="Logo">\n    <img src="../../assets/imgs/logoERP.png" />\n  </div>\n\n  <div class="spinner">\n    <ion-spinner name="bubbles"></ion-spinner>\n  </div>\n\n <button ion-button clear item-end (click)="AbrirPaginaLogin()">Login</button>\n</ion-content>'/*ion-inline-end:"F:\GitHubFirebaseProyecto\ERP\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_datos_datos__["a" /* DatosProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormloginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormloginPage = /** @class */ (function () {
    function FormloginPage(navCtrl, navParams, afDB, alertCtrl, serDatos) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
        this.serDatos = serDatos;
        this.arrData = [];
        this.user = {};
        this.afDB.list("usuarios").valueChanges().subscribe(function (_data) {
            _this.arrData = _data;
            console.log(_data);
        });
        console.log('serDatos_usuarioactual', serDatos.usuario_actual);
        //nombre =  this.serDatos.usuario_actual.nombre;
    }
    FormloginPage.prototype.logForm = function () {
        console.log(this.user);
    };
    FormloginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListadoPage');
    };
    FormloginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\GitHubFirebaseProyecto\ERP\src\pages\formlogin\formlogin.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>FormLogin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form (ngSubmit)="logForm()" >\n		<div class= "formulario">\n			<ion-list inset >\n					<div>\n					  <ion-item>\n					    <ion-label>Nombre</ion-label>\n					    <ion-input type="text" [disabled]="isDisabled"  value={{nombre}} [(ngModel)]="user.nombre" name="nombre" [ngModelOptions]="{standalone: true}"></ion-input> \n					  </ion-item>\n					<br/>\n					  <ion-item>\n					    <ion-label>Apellido</ion-label>\n					    <ion-input type="text" [disabled]="isDisabled" value = {{apellido}} [(ngModel)]="user.apellido" name="apellido" [ngModelOptions]="{standalone: true}"></ion-input>\n					  </ion-item>\n\n					  <ion-item>\n					    <ion-label>DNI</ion-label>\n					    <ion-input type="text" [disabled]="isDisabled" value= {{dni}} [(ngModel)]="user.dni" name="dni" [ngModelOptions]="{standalone: true}"></ion-input>\n					  </ion-item>\n\n					  <ion-item>\n					    <ion-label>Departamento</ion-label>\n					    <ion-input type="text" [disabled]="isDisabled" value = {{departamento}} [(ngModel)]="user.departamento" name="departamento" [ngModelOptions]="{standalone: true}"></ion-input>\n					  </ion-item>\n\n					  <ion-item>\n					    <ion-label>Usuario</ion-label>\n					    <ion-input type="text" [disabled]="isDisabled" value = {{username}} [(ngModel)]="user.username" name="username" [ngModelOptions]="{standalone: true}"></ion-input>\n					  </ion-item>\n\n						<ion-item>\n					    <ion-label>Contraseña</ion-label>\n					    <ion-input type="password" [disabled]="isDisabled" value = {{password}} [(ngModel)]="user.pwd" name="pwd" [ngModelOptions]="{standalone: true}"></ion-input>\n					  </ion-item>\n					</div>\n				  <br/>\n				<div class="boton" *ngIf="isDisabled"> \n					<button ion-button clear item-end (click)="Editar()" type="submit">Editar</button>\n				</div>\n\n				<div class="botones" *ngIf="!isDisabled"> \n					<button ion-button clear item-end (click)="Cancelar()">Cancelar</button>\n					<button ion-button clear item-end (click)="ComprobarDatos(user)" type="submit">Guardar</button>\n				</div>\n\n\n			</ion-list>\n		</div>\n	</form>\n</ion-content>'/*ion-inline-end:"F:\GitHubFirebaseProyecto\ERP\src\pages\formlogin\formlogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__["a" /* DatosProvider */]])
    ], FormloginPage);
    return FormloginPage;
}());

//# sourceMappingURL=formlogin.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(428);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_formlogin_formlogin__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_departamentos_departamentos__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_listado_listado__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_listadodetallado_listadodetallado__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire_auth__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_datos_datos__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import { MenulateralPage } from '../pages/menulateral/menulateral';





var firebaseConfig = {
    apiKey: "AIzaSyDTubo4XxDbY2bKMVOTEs6p8Erf1EP8kyQ",
    authDomain: "erp-crm-0000.firebaseapp.com",
    databaseURL: "https://erp-crm-0000.firebaseio.com",
    projectId: "erp-crm-0000",
    storageBucket: "erp-crm-0000.appspot.com",
    messagingSenderId: "573198817473"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_formlogin_formlogin__["a" /* FormloginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_departamentos_departamentos__["a" /* DepartamentosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_listado_listado__["a" /* ListadoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_listadodetallado_listadodetallado__["a" /* ListadodetalladoPage */]
                //MenulateralPage
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/departamentos/departamentos.module#DepartamentosPageModule', name: 'DepartamentosPage', segment: 'departamentos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listado/listado.module#ListadoPageModule', name: 'ListadoPage', segment: 'listado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menulateral/menulateral.module#MenulateralPageModule', name: 'MenulateralPage', segment: 'menulateral', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_13__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_fire_auth__["a" /* AngularFireAuthModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_formlogin_formlogin__["a" /* FormloginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_departamentos_departamentos__["a" /* DepartamentosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_listado_listado__["a" /* ListadoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_listadodetallado_listadodetallado__["a" /* ListadodetalladoPage */]
                //MenulateralPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__angular_fire_database__["a" /* AngularFireDatabase */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_datos_datos__["a" /* DatosProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_departamentos_departamentos__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_formlogin_formlogin__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_departamentos_departamentos__["a" /* DepartamentosPage */] },
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_6__pages_formlogin_formlogin__["a" /* FormloginPage */] },
            { title: 'Log Out', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        if (page.title == 'Log Out') {
            var alert = this.alertCtrl.create({
                title: 'Atención!',
                subTitle: 'Estás seguro?.',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: function () {
                            // Ha respondido que no así que no hacemos nada
                        }
                    },
                    {
                        text: 'Si',
                        handler: function () {
                            _this.nav.setRoot(page.component);
                        }
                    }
                ]
            });
            alert.present();
        }
        else {
            this.nav.setRoot(page.component);
        }
        //console.log(page);
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\GitHubFirebaseProyecto\ERP\src\app\app.html"*/'<ion-menu [content]="content" side="right" >\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"F:\GitHubFirebaseProyecto\ERP\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadodetalladoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListadodetalladoPage = /** @class */ (function () {
    function ListadodetalladoPage(navCtrl, navParams, afDB, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
        this.arrData = [];
        this.afDB.list('usuarios').valueChanges().subscribe(function (_data) {
            _this.arrData = _data;
            console.log(_data);
        });
    }
    ListadodetalladoPage.prototype.doPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Nuevo Usuario',
            enableBackdropDismiss: false,
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Nuevo Registro',
                    handler: function (data) {
                        console.log('Saved clicked');
                        console.log(JSON.stringify(data));
                        var usuarionuevo = { nombre: data.nombre, apellido: data.apellido, dni: data.dni, cod_usu: data.codUsu, departamento: data.departamento,
                            username: data.username, password: data.password };
                        console.log(usuarionuevo);
                        if (data.nombre.includes(" ") || data.apellido.includes(" ") ||
                            data.dni.includes(" ") || data.cod_usu.includes(" ") ||
                            data.departamento.includes(" ") || data.username.includes(" ") || data.password.includes(" ")) {
                            console.log("ESPACIO DETECTADO");
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Error',
                                message: 'No metas espacios, por favor.',
                                buttons: ['Ok']
                            });
                            alert_1.present();
                        }
                        else if (data.nombre != null && data.apellido != null &&
                            data.dni != null && data.cod_usu != null &&
                            data.departamento != null && data.username != null && data.password != null) {
                            console.log("FALTAN DATOS");
                            var alert_2 = _this.alertCtrl.create({
                                title: 'Error',
                                message: 'Rellena todos los campos, por favor.',
                                buttons: ['Ok']
                            });
                            alert_2.present();
                        }
                        else {
                            //this.afDB.list("/usuarios/").push(usuarionuevo);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ListadodetalladoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListadoPage');
    };
    ListadodetalladoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\GitHubFirebaseProyecto\ERP\src\pages\listadodetallado\listadodetallado.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Listado Detallado</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<ion-list>\n    <ion-item class="text" *ngFor="let item of items | async" (click)="abrirListadoDetallado(item)">\n      {{item.nombre}}\n    </ion-item>\n</ion-list>\n  <div class="boton" >\n    <button ion-button color="secondary" large clear item-right (click)="doPrompt()">\n    <ion-icon name="add-circle"></ion-icon>\n    </button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"F:\GitHubFirebaseProyecto\ERP\src\pages\listadodetallado\listadodetallado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ListadodetalladoPage);
    return ListadodetalladoPage;
}());

//# sourceMappingURL=listadodetallado.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatosProvider = /** @class */ (function () {
    function DatosProvider(storage) {
        this.storage = storage;
        this.usuario_actual = [];
        console.log('Hello DatosProvider Provider');
    }
    DatosProvider.prototype.guardar_Usuario = function () {
        localStorage.setItem("usuario_actual", JSON.stringify(this.usuario_actual));
    };
    DatosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], DatosProvider);
    return DatosProvider;
}());

//# sourceMappingURL=datos.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartamentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listado_listado__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//FIREBASE 

//FIREBASE FIN
/**
 * Generated class for the DepartamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//
var DepartamentosPage = /** @class */ (function () {
    function DepartamentosPage(navCtrl, afDB, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.menu.enable(true);
        this.items = afDB.list('departamentos').valueChanges();
    }
    DepartamentosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DepartamentosPage');
    };
    DepartamentosPage.prototype.abrirListado = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__listado_listado__["a" /* ListadoPage */], { item: item.nombre });
    };
    DepartamentosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-departamentos',template:/*ion-inline-start:"F:\GitHubFirebaseProyecto\ERP\src\pages\departamentos\departamentos.html"*/'<!--\n  Generated template for the DepartamentosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n  	<ion-buttons end>\n  	<button ion-button menuToggle>\n  		<ion-icon name ="menu"></ion-icon>\n  	</button>\n  	</ion-buttons>\n    <ion-title>Departamentos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="card-background-page">\n		<ion-card *ngFor="let item of items | async" (click)="abrirListado(item)">\n      <!--<img src="{{item.fondo}}">-->\n      <img src="../../assets/imgs/1.jpg"/>\n      <div class="card-title">{{item.nombre}}</div>\n			<!--<p>{{item.nombre}}</p>-->\n		</ion-card>\n</ion-content>\n'/*ion-inline-end:"F:\GitHubFirebaseProyecto\ERP\src\pages\departamentos\departamentos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], DepartamentosPage);
    return DepartamentosPage;
}());

//# sourceMappingURL=departamentos.js.map

/***/ })

},[295]);
//# sourceMappingURL=main.js.map