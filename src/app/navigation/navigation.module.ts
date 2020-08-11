import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WideNavComponent } from "./wide-nav/wide-nav.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { NavigationComponent } from "./navigation.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [WideNavComponent, SideNavComponent, NavigationComponent],
  imports: [CommonModule, RouterModule, MatSidenavModule],
  exports: [WideNavComponent, SideNavComponent, NavigationComponent],
})
export class NavigationModule {}
