import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  state,
  style,
  transition,
  animate,
  trigger,
} from "@angular/animations";
import { NavLink } from "../models";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
  animations: [
    trigger("openMenu", [
      state(
        "open",
        style({
          width: "60%",
          opacity: "1",
        })
      ),
      state(
        "closed",
        style({
          width: "0",
          opacity: "0",
        })
      ),
      transition("open<=>closed", [animate(".3s 0s ease-out")]),
    ]),
  ],
})
export class SideNavComponent implements OnInit {
  @Input() NavLinks: NavLink[];
  @Input() sideNavVisible: boolean;
  @Output() linkClicked = new EventEmitter();
  opened: boolean;

  constructor() {}

  handleLinkClicked = () => {
    this.linkClicked.emit();
  };

  ngOnInit(): void {
    this.opened = this.sideNavVisible;
  }
}
