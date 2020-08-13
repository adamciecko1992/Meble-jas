import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  constructor() { }
  links = [
    { name: "O firmie", href: "" },
    { name: "Oferty", href: "offers" },
    { name: "Projekty", href: "projects" },
    { name: "Galeria", href: "gallery" },
    { name: "Kontakt", href: "contact" },
  ];
  sideNavVisible = false;
  toggleSideBar = (event) => {
    // event.stopPropagation();
    this.sideNavVisible = !this.sideNavVisible
  }

  ngOnInit(): void { }
}
