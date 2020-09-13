"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomerLeadService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var CustomerLeadService = /** @class */ (function () {
    function CustomerLeadService(http) {
        this.http = http;
    }
    CustomerLeadService.prototype.postcontact = function (CustomerEnquiry) {
        console.log('post contact was reached');
        var tempurl = "/api/v1/customer/register";
        console.log(tempurl);
        var httpvalue = this.http.post(tempurl, CustomerEnquiry, httpOptions);
        console.log(httpvalue);
    };
    CustomerLeadService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CustomerLeadService);
    return CustomerLeadService;
}());
exports.CustomerLeadService = CustomerLeadService;
