import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { WeatherItem } from '../weather.models';
import { ItemDirective } from './item.directive';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent implements OnInit {
  @Input() item: WeatherItem;

  @ViewChild(ItemDirective) weatherItem: ItemDirective;

  constructor() {}

  ngOnInit(): void {}

  getTime() {
    const now = new Date();
    return `${this.formatDate(now.getHours())}:${this.formatDate(
      now.getMinutes()
    )}`;
  }

  getTemperature() {
    const tem = this.item.temperature;
    return tem > 0 ? `+${tem}` : tem;
  }

  onClose() {
    this.weatherItem.close();
  }

  private formatDate(value: number) {
    return value < 10 ? `0${value}` : value;
  }
}
