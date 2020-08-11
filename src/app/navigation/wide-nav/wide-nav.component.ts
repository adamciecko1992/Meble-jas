import { Component, OnInit, Input } from "@angular/core";

import { NavLink } from "../models";

@Component({
  selector: "app-wide-nav",
  templateUrl: "./wide-nav.component.html",
  styleUrls: ["./wide-nav.component.scss"],
})
export class WideNavComponent implements OnInit {
  @Input() NavLinks: NavLink[];

  constructor() {}

  ngOnInit(): void {}
}
