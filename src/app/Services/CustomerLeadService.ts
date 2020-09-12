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
  public PORT = process.env.PORT;
  private baseUrl = `http:localhost:${PORT}`; //URL to web server
  constructor(private http:HttpClient) {} 

  postcontact( CustomerEnquiry:CustomerEnquiry ) {
    console.log('post contact was reached')
    const tempurl = `${this.baseUrl}/api/v1/customer/register`;
    console.log(tempurl);
    this.http.post<CustomerEnquiry>( tempurl , CustomerEnquiry, httpOptions);
    
  }
}

