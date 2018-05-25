import { Directive, Renderer, HostListener, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[setActiveClass]'
})
export class SetActiveClassDirective {

  valueSub: Subscription; 
  constructor(private el: ElementRef, private renderer: Renderer) {

   }

   @HostListener('keyup') onMouseOver() { 
    let part = this.el.nativeElement.querySelector('');
    this.renderer.setElementClass(part, 'badge badge-custom', true);
  }
}
