import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [ListComponent, ItemComponent],
  imports: [CommonModule, MatListModule],
  exports: [ListComponent],
})
export class WeatherModule {}
