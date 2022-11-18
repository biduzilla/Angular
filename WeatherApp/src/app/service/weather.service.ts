import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { LocalData } from '../models/local.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`,
      {
        headers: new HttpHeaders()
          .set(
            environment.XRapidAPIHostHeaderName,
            environment.XRapidAPIHostHeaderNameValue
          )
          .set(
            environment.XRapidAPIKeyHeaderName,
            environment.XRapidAPIKeyHeaderNameValue
          ),
        params: new HttpParams().set('q', cityName),
      }
    );
  }
}
