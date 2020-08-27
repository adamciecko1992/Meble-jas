import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutModule } from "@angular/cdk/layout";
import { MatButtonModule } from "@angular/material/button";
import { DirectivesModule } from "../../directives/directives.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomePageComponent } from "./home-page/home-page.component";
import { HeroComponent } from "./hero/hero.component";
import { DividerComponent } from "./divider/divider.component";
import { SectionComponent } from "./section/section.component";
import { HomeAboutComponent } from "./about/about.component";
import { FurnitureComponent } from './furniture/furniture.component';
import { OrderComponent } from './order/order.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeroComponent,
    SectionComponent,
    DividerComponent,
    HomeAboutComponent,
    FurnitureComponent,
    OrderComponent,
    SummaryComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    LayoutModule,
    DirectivesModule,
  ],
})
export class HomeModule {}
