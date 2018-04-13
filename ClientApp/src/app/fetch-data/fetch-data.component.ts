import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
      this.forecasts = result;
    });
  }

  settings = {
    actions: null,
    columns: {
      dateFormatted: {
        title: 'Date Formatted'
      },
      temperatureC: {
        title: 'Temp Centigrade'
      },
      temperatureF: {
        title: 'Temp Fahrenheit'
      },
      summary: {
        title: 'Summary'
      },
      userName: {
        title: 'User Name'
      }

    }
  };
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
  userName: string;
}
