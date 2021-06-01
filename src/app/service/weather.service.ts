import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseURL = 'https://api.openweathermap.org/data/2.5/weather'
  private apiKey = '3bc2eb7ce84fdf3a8e050f09c7f9a336'
  private langSet = 'lang=IT'

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.baseURL}?q=${city}&appid=${this.apiKey}&${this.langSet}&units=metric`);
  }
}
