"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactusComponent = void 0;
var core_1 = require("@angular/core");
var SubjectEnum_1 = require("../Server/Models/SubjectEnum");
var thankyoupop_component_1 = require("../components/subcomponent/popups/thankyoupop/thankyoupop.component");
var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(customerLeadService) {
        this.customerLeadService = customerLeadService;
        this.postcontact = new core_1.EventEmitter();
        this.duration = 5;
        this.customerName = '';
        this.customerCellphone = '';
        this.customerEmail = '';
        this.customerMessage = '';
        this.customerCompany = '';
        this.subjectSelected = SubjectEnum_1.Subjects.GeneralEnquiry;
        /*This enable two way binding between the text field and updated values*/
        this.clientCellphone = '';
        this.clientMessage = '';
        this.clientEmail = '';
        this.clientName = '';
        this.clientCompanyName = '';
        this.serviceOfferings = [
            { serviceName: SubjectEnum_1.Subjects.GeneralEnquiry, viewValue: 'General enquiry' },
            { serviceName: SubjectEnum_1.Subjects.SoftwareDevelopment, viewValue: 'Software development' },
            { serviceName: SubjectEnum_1.Subjects.SerapisMedical, viewValue: 'Serapis Medical' },
            { serviceName: SubjectEnum_1.Subjects.PescadoFarms, viewValue: 'Pescado Farms' },
            { serviceName: SubjectEnum_1.Subjects.KbAlphaInteractive, viewValue: 'KB Alpha Interactive' },
            { serviceName: SubjectEnum_1.Subjects.Careers, viewValue: 'Careers' }
        ];
        this.ngOnInit();
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent.prototype.onSendRequest = function (f) {
        /*take all the user data and send it to database.*/
        this.customerCellphone = this.clientCellphone;
        this.customerName = this.clientName;
        this.customerMessage = this.clientMessage;
        this.customerEmail = this.customerEmail;
        this.customerCompany = this.clientCompanyName;
        // set the subject selectd here from the front end
        this.subjectSelected = SubjectEnum_1.Subjects.GeneralEnquiry;
        // The data about the enquiry itself
        var localDate = new Date();
        var meta = {
            date: localDate.toDateString(),
            time: localDate.toTimeString(),
            location: ''
        };
        // the data to be sent to the database, commented out for now
        var potentialClient = {
            CustomerMessage: this.clientMessage,
            MetaData: meta,
            CustomerEnquiry: this.subjectSelected
        };
        //console.log('Form Results=>',f.value);
        this.customerLeadService.postcontact(f.value);
        // Finally reset the form
        f.resetForm();
        // visual feedback on forms being sent
        this.openPopUp();
    };
    // snackbar method
    ContactusComponent.prototype.openPopUp = function () {
        this.snackbar.openFromComponent(thankyoupop_component_1.ThankyoupopComponent, { duration: this.duration * 1000, verticalPosition: 'bottom' });
    };
    __decorate([
        core_1.Output()
    ], ContactusComponent.prototype, "postcontact");
    ContactusComponent = __decorate([
        core_1.Component({
            selector: 'app-contactus',
            templateUrl: './contactus.component.html',
            styleUrls: ['./contactus.component.css']
        })
    ], ContactusComponent);
    return ContactusComponent;
}());
exports.ContactusComponent = ContactusComponent;
