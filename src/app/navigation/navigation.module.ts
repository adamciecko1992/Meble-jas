import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WideNavComponent } from "./wide-nav/wide-nav.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { NavigationComponent } from "./navigation.component";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BackdropComponent } from './backdrop/backdrop.component';
import { TogglerComponent } from './toggler/toggler.component';


@NgModule({
  declarations: [WideNavComponent, SideNavComponent, NavigationComponent, BackdropComponent, TogglerComponent],
  imports: [CommonModule, RouterModule, MatSidenavModule,FontAwesomeModule],
  exports: [WideNavComponent, SideNavComponent, NavigationComponent],
})
export class NavigationModule {}
