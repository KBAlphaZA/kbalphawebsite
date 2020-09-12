var mongoose = require('mongoose');
var CustomerLeadSchema = new mongoose.Schema({
    CustomerName: {
        type: String
    },
    CustomerPhoneNumber: {
        type: String
    },
    CustomerEmail: {
        type: String
    },
    CustomerCompanyName: {
        type: String
    }
});
// export class Customer{
//   public CustomerFullName: string;
//   CustomerPhoneNumber: string;
//   CustomerEmail: string;
//   CustomerCompanyName: string;
// }
var CustomerLead = mongoose.model('CustomerLead', CustomerLeadSchema);
module.exports = CustomerLead;
