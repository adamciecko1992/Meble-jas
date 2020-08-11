import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-bg-provider",
  templateUrl: "./bg-provider.component.html",
  styleUrls: ["./bg-provider.component.scss"],
})
export class BgProviderComponent implements OnInit {
  @Input() background: string;
  image: string;
  constructor() {}

  ngOnInit(): void {
    this.image = `url(${this.background})`;
  }
}
