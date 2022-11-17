import { Observable } from 'rxjs';
import { WeatherData } from './../models/weather.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeatherData(cityName: string):Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(`https://open-weather13.p.rapidapi.com/city/${cityName}`, {
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostHeaderNameValue
        )
        .set(
          environment.XRapidAPIKeyHeaderName,
          environment.XRapidAPIKeyHeaderNameValue
        ),
    });
  }
}
