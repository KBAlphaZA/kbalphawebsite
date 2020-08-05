import {Customer} from './Customer';
import {Subjects} from './SubjectEnum';
// import {EnquiryMetaData} from './EnquiryMetaData';

// For now the Meta data class won't be used until user location is added for extra data on customer acqustion

export interface CustomerEnquiry{
   CustomerDetails: Customer;
   CustomerEnquiry: Subjects;
   CustomerMessage: string;
   // MetaData: EnquiryMetaData;
}
