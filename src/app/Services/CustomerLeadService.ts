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
  
  constructor(private http:HttpClient) {} 

  postcontact( CustomerEnquiry:any ) {
    console.log('post contact was reached')
    const tempurl = `/api/v1/customer/register`;
    console.log(tempurl);
    this.http.post<any>( tempurl , CustomerEnquiry, httpOptions);
  }
}

