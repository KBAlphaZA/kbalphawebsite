import {Router} from 'express';
import {EnquiryController} from '../Controllers/EnquiryController';

const router = new Router();

// The posting route
router.post(EnquiryController.apiEnquirylodege);
