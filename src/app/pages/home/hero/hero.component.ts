import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  OnChanges,
} from "@angular/core";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent implements OnInit, OnChanges {
  @ViewChild("title", { static: true }) title: ElementRef;
  @ViewChild("subtitle", { static: true }) subtitle: ElementRef;
  @Input() scroll: number;
  offset: number;
  constructor() {}

  ngOnInit(): void {
    this.offset = this.title.nativeElement.getClientRects();
  }
  ngOnChanges() {
    // this.title.nativeElement.style.transform = `translateX(${this.scroll}px)`;
    // this.subtitle.nativeElement.style.transform = `translateX(${this.scroll}px)`;
  }
}
