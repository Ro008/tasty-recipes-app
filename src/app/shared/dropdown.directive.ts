import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen = false;
  constructor(private eleRef: ElementRef,
              private renderer: Renderer2) { }

  @HostListener('click')
  toggleMenu() {
    if (!this.isOpen) {
      // show the menu
      this.renderer.addClass(this.eleRef.nativeElement.nextElementSibling, 'show');
    } else {
      // hide the menu
      this.renderer.removeClass(this.eleRef.nativeElement.nextElementSibling, 'show');
    }

    document.addEventListener('click', event => {
      if (event.target !== this.eleRef.nativeElement) {
        this.isOpen = false;
        this.renderer.removeClass(this.eleRef.nativeElement.nextElementSibling, 'show');
      }
    });

    // toggle the property
    this.isOpen = !this.isOpen;

  }
}
