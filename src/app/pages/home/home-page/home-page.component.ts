import { Component, OnInit } from "@angular/core";
import { WindowScrollService } from "../../../services/scroll/scroll.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  offset: number;

  constructor(private scroll: WindowScrollService) {}

  ngOnInit(): void {
    this.scroll.scroll$.subscribe((val) => {
      this.offset = val;
    });
  }
}
