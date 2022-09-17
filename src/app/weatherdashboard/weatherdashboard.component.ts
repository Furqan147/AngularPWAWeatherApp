import { Component, OnInit } from '@angular/core';
import { Weatherdata } from '../weatherdata';
import { WeatherinfoService } from '../weatherinfo.service';

@Component({
  selector: 'app-weatherdashboard',
  templateUrl: './weatherdashboard.component.html',
  styleUrls: ['./weatherdashboard.component.scss']
})
export class WeatherdashboardComponent implements OnInit {

  weatherComp: Weatherdata | undefined;

  constructor(private weatherDataService: WeatherinfoService) { }

  ngOnInit(): void {
  }

  search(cityName: string) {
    this.weatherDataService.getWeatherInformation(cityName)
      .subscribe(weather => this.weatherComp = weather);
  }

}
