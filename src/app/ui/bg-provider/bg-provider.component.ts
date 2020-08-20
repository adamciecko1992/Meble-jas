import {
  Component,
  OnInit,
  Input,
  HostListener,
  OnDestroy,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "app-bg-provider",
  templateUrl: "./bg-provider.component.html",
  styleUrls: ["./bg-provider.component.scss"],
})
export class BgProviderComponent implements OnInit, OnDestroy {
  image: string;
  offset: number;

  @Input() background: string;
  @HostListener("window:scroll") onScroll(e: Event): void {
    this.offset = window.scrollY;
  }

  constructor() {}

  ngOnInit(): void {
    this.image = `url(${this.background})`;
  }
  ngOnDestroy() {}
}
