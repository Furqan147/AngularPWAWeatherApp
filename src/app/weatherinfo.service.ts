import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weatherdata } from './weatherdata';

@Injectable({
  providedIn: 'root'
})
export class WeatherinfoService {

  constructor(private httpClient: HttpClient) { }

  getWeatherInformation(cityName: string): Observable<Weatherdata> {
    const dataOptions = new HttpParams().set('units', 'metric')
      .set('q', cityName)
      .set('appId', environment.apiKey);

    return this.httpClient.get<Weatherdata>(environment.apiUrl + 'weather',
      { params: dataOptions });
  }

}
