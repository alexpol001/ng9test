import { Component, Input, OnInit } from '@angular/core';
import { WeatherItem } from '../weather.models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: WeatherItem;

  constructor() {}

  ngOnInit(): void {}
}
