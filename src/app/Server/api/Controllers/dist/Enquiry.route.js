"use strict";
exports.__esModule = true;
var express_1 = require("express");
var EnquiryController_1 = require("./EnquiryController");
//const EnquiryController = require('./EnquiryController.ts')
var router = new express_1.Router();
//const router = express.Router();
// The posting route
router.post(EnquiryController_1.EnquiryController.apiEnquirylodege);
exports["default"] = router;
