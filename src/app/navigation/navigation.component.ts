import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.HandsetLandscape,
        Breakpoints.HandsetPortrait,

        "(max-width: 966px)",
      ])
      .subscribe((result) => {
        if (!result.matches) {
          this.sideNavVisible = false;
        }
      });
  }
  links = [
    { name: "O firmie", href: "" },
    { name: "Oferty", href: "offers" },
    { name: "Projekty", href: "projects" },
    { name: "Galeria", href: "gallery" },
    { name: "Kontakt", href: "contact" },
  ];

  sideNavVisible = false;

  toggleSideBar = () => {
    this.sideNavVisible = !this.sideNavVisible;
  };

  ngOnInit(): void {}
}
