import { Directive, ElementRef } from "@angular/core";
import { WindowScrollService } from "../services/scroll/scroll.service";

@Directive({
  selector: "[appTranslateOnScroll]",
})
export class TranslateOnScrollDirective {
  elementTop: number;
  startposition: number;
  width: number;
  activationPoint: number;
  offset: number;

  constructor(
    private element: ElementRef,
    private scroll: WindowScrollService
  ) {
    this.scroll.scroll$.subscribe((val) => {
      this.offset = val;
      let transform =
        (this.activationPoint - this.offset - this.width / 100) / 3;
      if (transform > 0) {
        this.element.nativeElement.style.transform = `translateX(${transform}%)`;
      }
      if (transform < 0) {
        this.element.nativeElement.style.transform = `translateX(0%)`;
      }
    });
  }

  ngOnInit(): void {
    this.elementTop = this.element.nativeElement.getBoundingClientRect().top;
    this.width = this.element.nativeElement.getClientRects()[0].width;
    this.activationPoint = this.elementTop - this.width / 3;
    this.element.nativeElement.style.transform = `translateX(${this.width}px)`;
  }
  ngOnChanges() {}
}
