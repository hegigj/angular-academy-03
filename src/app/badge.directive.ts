import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBadge]'
})
export class BadgeDirective implements OnChanges {
  @Input('appBadge') 
  badgeCount?: number;

  constructor(private elementRef: ElementRef<HTMLElement>) {
    // elementRef.nativeElement.style.color = 'red';
    elementRef.nativeElement.classList.add('app-badge');
  }

  ngOnChanges(): void {
    if (this.badgeCount) {
      const badge = document.createElement('span');
      badge.classList.add('badge');
      badge.innerText = this.badgeCount.toString();

      this.elementRef.nativeElement.appendChild(badge);
    }
  }
}
