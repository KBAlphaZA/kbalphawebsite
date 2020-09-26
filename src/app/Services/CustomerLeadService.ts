import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {CustomerEnquiry} from '../Server/Models/CustomerEnquiry';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
@Injectable({
    providedIn: 'root'
})
export class CustomerLeadService{
  const debug = true;
  constructor(private http:HttpClient) {}

  postcontact( CustomerEnquiry: any ) {
    console.log('post contact was reached');
    // const tempurl = `www.kbalpha.co.za/api/v1/customer/register`;
    const Azureurl = 'https://kbalphawebapi.azurewebsites.net/api/v1/enquiry';
    const tempurl = `https://kbalphawebapi.herokuapp.com/api/v1/customer/register`;
    
    console.log(tempurl);
    return this.http.post( tempurl , CustomerEnquiry, {observe: 'response'})
    .subscribe(resp => {
      console.log(' Response => ', resp);
    });

  }
}

