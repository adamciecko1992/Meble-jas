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
  startposition: number;
  width: number;
  activationPoint: number;

  constructor() {}

  ngOnInit(): void {
    this.elementTop = this.about.nativeElement.getBoundingClientRect().top;
    this.width = this.about.nativeElement.getClientRects()[0].width;
    this.activationPoint = this.elementTop - this.width / 4;
    this.about.nativeElement.style.transform = `translateX(${this.width}px)`;
  }
  ngOnChanges() {
    let transform = (this.activationPoint - this.scroll - this.width / 100) / 4;
    if (transform > 0) {
      this.about.nativeElement.style.transform = `translateX(${transform}%)`;
    }
    if (transform < 0) {
      this.about.nativeElement.style.transform = `translateX(0%)`;
    }
  }
}
