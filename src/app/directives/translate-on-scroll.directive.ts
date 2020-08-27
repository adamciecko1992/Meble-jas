import { Directive, ElementRef, Input } from "@angular/core";
import { WindowScrollService } from "../services/scroll/scroll.service";

@Directive({
  selector: "[appTranslateOnScroll]",
})
export class TranslateOnScrollDirective {
  elementTop: number;
  width: number;
  activationPoint: number;
  transform: number;
  options: {};
  @Input() direction: string = "left";

  constructor(
    private element: ElementRef,
    private scroll: WindowScrollService
  ) {
    this.scroll.scroll$.subscribe((val) => {
      let { activationPoint, width, element, transform, options } = this;
      let offset = val;
      transform = (activationPoint - offset - width / 100) / 4;

      options = {
        left: {
          end: `translateX(0%)`,
          step: `translateX(-${transform}%)`,
        },
        right: {
          end: `translateX(0%)`,
          step: `translateX(${transform}%)`,
        },
      };

      if (transform > 0) {
        element.nativeElement.style.transform = options[this.direction].step;
      }
      if (transform < 0) {
        element.nativeElement.style.transform = options[this.direction].end;
      }
    });
  }

  ngOnInit(): void {
    this.elementTop = this.element.nativeElement.getBoundingClientRect().top;
    this.width = this.element.nativeElement.getClientRects()[0].width;
    this.activationPoint = this.elementTop - this.width / 2;

    if (this.direction === "left") {
      this.element.nativeElement.style.transform = `translateX(-${this.width}px)`;
    } else {
      this.element.nativeElement.style.transform = `translateX(${this.width}px)`;
    }
  }
  ngOnChanges() {}
}
