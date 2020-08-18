import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutModule } from "@angular/cdk/layout";

import { MatButtonModule } from "@angular/material/button";

import { HomeRoutingModule } from "./home-routing.module";
import { HomePageComponent } from "./home-page/home-page.component";
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";

@NgModule({
  declarations: [HomePageComponent, HeroComponent, AboutComponent],
  imports: [CommonModule, HomeRoutingModule, MatButtonModule, LayoutModule],
})
export class HomeModule {}
