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
  private baseUrl = 'https:localhost:8000'; //URL to web server
  constructor(private http:HttpClient) {} 

  postcontact(CustomerEnquiry:CustomerEnquiry) {
    console.log('post contact was reached')
    const tempurl = `${this.baseUrl}/api/v1/customerlead`
    return this.http.post<CustomerEnquiry>( tempurl ,CustomerEnquiry,httpOptions);
  }
}

