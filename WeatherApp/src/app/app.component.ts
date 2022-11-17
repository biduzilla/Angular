import { WeatherData } from './models/weather.model';
import { WeatherService } from './service/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  cityName?: string;
  weatherData: WeatherData;

  ngOnInit(): void {
    this.cityName = '';
  }

  converter(temp: number) {
    return (temp - 32) / 1.8;
    // var celsius = (temp - 32) / 1.8;
    // return Math.floor(celsius * 100) / 100;
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        console.log(response);
        this.weatherData = response;
        this.weatherData.main.temp_max = this.converter(response.main.temp_max);
        this.weatherData.main.temp_min = this.converter(response.main.temp_min);
        this.weatherData.main.temp = this.converter(response.main.temp);
      },
    });
  }
  title = 'WeatherApp';
}
