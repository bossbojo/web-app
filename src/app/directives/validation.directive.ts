
import { Directive, ElementRef, HostListener, Renderer2, AfterViewInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ValidationText } from '../validations/validation.text';

@Directive({
  selector: '[appValidation]'
})
export class ValidationDirective implements AfterViewInit {
  helpTextEl: any;

  constructor(private el: ElementRef, private control: NgControl, private renderer: Renderer2) { }
  get ctrl() {
    return this.control.control;
  }

  ngAfterViewInit() {
    this.helpTextEl = this.el.nativeElement.parentElement.querySelector('.validation-text');
    if (!this.helpTextEl) {
      this.helpTextEl = this.el.nativeElement.parentElement.parentElement.querySelector('.validation-text');
    }
  }

  @HostListener('keyup')
  @HostListener('blur')
  checkValidation() {
    this.resetElement();

    if (!this.control.control.valid) {
      this.renderer.addClass(this.el.nativeElement, 'uk-form-danger');

      if (this.helpTextEl) {
        this.renderer.addClass(this.helpTextEl, 'text-danger');
        const errorText = ValidationText[Object.keys(this.control.control.errors)[0]];
        this.helpTextEl.innerHTML = errorText;
      }
    }

    if (this.control.control.valid) {
      this.renderer.addClass(this.el.nativeElement, 'uk-form-success');
    }
  }
  private resetElement(): void {
    this.renderer.removeClass(this.el.nativeElement, 'uk-form-danger');
    this.renderer.removeClass(this.el.nativeElement, 'uk-form-success');

    if (this.helpTextEl) {
      this.renderer.removeClass(this.helpTextEl, 'text-danger');
      this.helpTextEl.innerHTML = '';
    }
  }
}
