import {
  Component,
  OnInit,
  Input,
  ElementRef,
  OnChanges,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit, OnChanges {
  @Input() scroll: number;
  @ViewChild("about", { static: true }) about: ElementRef;
  elementTop: number;
  elementBottom: number;
  startposition: number;
  width: number;
  height: number;

  constructor() {}

  ngOnInit(): void {
    this.elementTop = this.about.nativeElement.getBoundingClientRect().top;
    this.elementBottom = this.about.nativeElement.getBoundingClientRect().bottom;
    this.width = this.about.nativeElement.getClientRects()[0].width;
    this.height = this.about.nativeElement.getClientRects()[0].height;
    this.about.nativeElement.style.transform = `translateX(${this.width}px)`;
  }
  ngOnChanges() {
    if (this.elementTop - this.scroll - 90 <= 0) {
      this.about.nativeElement.style.transform = `translateX(0%)`;
    }
  }
}
