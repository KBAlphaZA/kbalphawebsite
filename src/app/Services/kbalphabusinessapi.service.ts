import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TrendingNews} from '../../app/Server/Models/TrendingNews';

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

   // ---------CRM------------ 
  //Post the form to the business api
  public async postClientForm(payload: any){
    let url = this.baseUrl + "api/crm/create/contact";
    console.log("Base url to post client form:", url);

    return await this.http.post<any>(url, payload,  {headers}).subscribe(response=>
                                                              {console.log('Response =>', response)
                                                            })
  }

  //----------Commodaties-------

  //Get commodatiy codes
  public async getCommodityCodes(){
    let url = this.baseUrl + "api/commodaties/codes";

    console.log("Url: ", url);

    //array
    let _codes: any[]=[];

    let codes = await this.http.get(url).subscribe((data: IDictionary[])=>{

      console.log("data objct:", data);

      //Add to local array
      data.forEach(t=>_codes.push(t))
    });

    console.log("Codes in services:", _codes);

    return _codes;
  }

  //----------Equaties-----------

  //Trending stock news
  public async getTrendingStockNews(region: string){


    let url = this.baseUrl + "api/stocks/news/trending/" + region;

    console.log("Url: ", url);

    let articles = await this.http.get(url).subscribe((data:any)=>{
      console.log("data objct:", data);

      return data;
    })
  }

  //Company earnings
  public async getEarningsDates(){
    let url = this.baseUrl + "api/stocks/earnings/calendar";

    console.log("Url: ", url);

    await this.http.get(url).subscribe((data: any) =>{
      console.log("earnings data: ", data);
      return data;
    })
  }

  //Cpi data
  public async getCpiData(interval: string){
    let url = this.baseUrl + "api/stocks/macroecon/cpidata/" + interval;

    console.log("Url: ", url);

    await this.http.get(url).subscribe((data: any) =>{
      console.log("cpi data: ", data);
      return data;
    })
  }


}

interface IDictionary{
  [index: string]: string
}

