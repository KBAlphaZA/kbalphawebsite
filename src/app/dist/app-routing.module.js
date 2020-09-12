"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./Home/home/home.component");
var softwaredevservice_component_1 = require("./softwaredevservice/softwaredevservice.component");
var serapismedical_component_1 = require("./serapismedical/serapismedical.component");
var Login_component_1 = require("./components/Login/Login.component");
//import { MongoClient } from 'mongodb';
// estblish a connection
// MongoClient.connect(process.env.KB_ALPHA_DB_URI,
//     // TODO: Connection Pooling
//   // Set the poolSize to 50 connections.
//   // TODO: Timeouts
//   // Set the write timeout limit to 2500 milliseconds.
//   {useNewUrlParser: true},
//   console.log('On port: ' + process.env.PORT)
//   );
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'softwaredevservice', component: softwaredevservice_component_1.SoftwaredevserviceComponent },
    { path: 'about', component: softwaredevservice_component_1.SoftwaredevserviceComponent },
    { path: 'serapismedical', component: serapismedical_component_1.SerapismedicalComponent },
    { path: 'admin/login', component: Login_component_1.LoginComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
