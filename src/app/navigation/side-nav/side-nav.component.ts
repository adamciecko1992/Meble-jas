import { Component, OnInit, Input } from "@angular/core";
import { NavLink } from "../models";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
})
export class SideNavComponent implements OnInit {
  @Input() NavLinks: NavLink[];
  constructor() {}

  ngOnInit(): void {}
}
