import { Component, Input, OnInit } from '@angular/core';
import { DataToShow } from 'src/app/model/dataToShow';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() data: DataToShow
  constructor() {
    console.log(this.data)
  }

  ngOnInit() {
  }

}
