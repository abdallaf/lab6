import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  GetStudentData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/jsonblob/811fffe8-3aaa-11e9-9959-85d4c56ba0e3');


  }

  GetWeatherData():Observable<any>{
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=0a9f160b741875d939f0bc1a8a1546fe');


  }
}
