import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ItemDirective } from './item/item.directive';

@NgModule({
  declarations: [ListComponent, ItemComponent, ItemDirective],
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
  exports: [ListComponent],
})
export class WeatherModule {}
