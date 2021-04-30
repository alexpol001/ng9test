import { Component, Input, OnInit } from '@angular/core';
import { WEAHTER_LIST } from './list.mock';

@Component({
  selector: 'app-weather-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() list = WEAHTER_LIST;

  constructor() {}

  ngOnInit(): void {}
}
