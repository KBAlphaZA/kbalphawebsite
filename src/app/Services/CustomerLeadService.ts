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
  private baseUrl = 'http:localhost:8000'; //URL to web server
  constructor(private http:HttpClient) {} 

  postcontact(CustomerEnquiry:CustomerEnquiry) {
    console.log('post contact was reached')
    const tempurl = `${this.baseUrl}/api/v1/customer/register`;
    console.log(tempurl);
    var values = this.http.post<CustomerEnquiry>( tempurl ,CustomerEnquiry,httpOptions);
    console.log('returned values=> ', values)
  }
}

