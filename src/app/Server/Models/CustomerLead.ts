const mongoose = require('mongoose');
const CustomerLeadSchema = new mongoose.Schema({

  CustomerName:{
    type: String,
  },
  CustomerPhoneNumber:{
    type: String,

  },
  CustomerEmail:{
    type: String,
    
  },
  CustomerCompanyName:{
    type: String,
  }
})

// export class Customer{
//   public CustomerFullName: string;
//   CustomerPhoneNumber: string;
//   CustomerEmail: string;
//   CustomerCompanyName: string;
// }

const CustomerLead = mongoose.model('CustomerLead', CustomerLeadSchema );

module.exports = CustomerLead;
