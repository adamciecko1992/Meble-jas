import { Component, OnInit } from "@angular/core";
import { WindowScrollService } from "../../../services/scroll/scroll.service";

@Component({
  selector: "app-oferty-home",
  templateUrl: "./oferty-home.component.html",
  styleUrls: ["./oferty-home.component.scss"],
})
export class OfertyHomeComponent implements OnInit {
  constructor(private scroll: WindowScrollService) {}

  ngOnInit(): void {
    this.scroll.scroll$.subscribe((val) => {
      console.log({ val }, "oferty");
    });
  }
}
