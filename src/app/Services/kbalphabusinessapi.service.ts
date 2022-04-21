import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'
  })
}

const headers = {
  'Access-Control-Allow-Origin' : '*'
};

@Injectable({
  providedIn: 'root'
})
export class KbalphabusinessapiService {

  constructor(private http: HttpClient) { }

  //The Base url for the business api
   baseUrl = "https://kbalphabusinessapi.conveyor.cloud/";

  //Post the form to the business api
  public async postClientForm(payload: any){
    let url = this.baseUrl + "api/crm/create/contact";
    console.log("Base url to post client form:", url);

    return await this.http.post<any>(url, payload,  {headers}).subscribe(response=>
                                                              {console.log('Response =>', response)
                                                            })
  }
}
