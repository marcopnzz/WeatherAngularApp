import { Component, OnInit, ViewChild } from '@angular/core';
import { DataToShow } from 'src/app/model/dataToShow';
import { WeatherService } from 'src/app/service/weather.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ds
  constructor(private service: WeatherService, public sanitizer: DomSanitizer) { }


  ngOnInit() {
  }

  getWeather() {
    var city = ((<HTMLInputElement>document.getElementById("city")).value).trim()
    var ds = new DataToShow()
    if (city !== "" || city !== null) {
      this.service.getWeather(city).subscribe(responseData => {//console.log(responseData.weather[0].icon)
        console.log(responseData)
        this.ds = new DataToShow()
        this.ds.setImgId(responseData.weather[0].icon)
        this.ds.setCountry(responseData.sys.country)
        this.ds.setCityname(responseData.name)
        this.ds.setDescription(responseData.weather[0].description)
        this.ds.setTemps([responseData.main.temp, responseData.main.temp_min, responseData.main.temp_max])
        this.ds.setLon(responseData.coord.lon)
        this.ds.setLat(responseData.coord.lat)
        this.ds.setUrl(this.sanitizer.bypassSecurityTrustResourceUrl("http://maps.google.com/maps?q="
          //+ city + ","
          + this.ds.getLat() + ","
          + this.ds.getLon() +
          "&z=13&output=embed"))
        console.log(this.ds)
      }
        , error => console.log(error)
      )
    } else {
      this.noCity()
    }

  }

  noCity() {
    window.alert("E' obbligatorio inserire una città per procedere con la visualizzazione dei dati")
  }


}
