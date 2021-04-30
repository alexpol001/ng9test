import {
  Directive,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[weatherItem]',
})
export class ItemDirective {
  @Input() weatherItem: TemplateRef<any>;

  private isShow = false;

  constructor(private vr: ViewContainerRef) {}

  @HostListener('mouseenter')
  mouseenter() {
    if (this.weatherItem && !this.isShow) {
      this.isShow = true;
      this.vr.createEmbeddedView(this.weatherItem);
    }
  }

  close() {
    if (this.weatherItem && this.isShow) {
      this.isShow = false;
      this.vr.clear();
    }
  }
}
