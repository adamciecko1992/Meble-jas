import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home/home-page/home-page.component";
import { Page404Component } from "./pages/page404/page404.component";
import { ContactHomeComponent } from "./pages/contact/contact-home/contact-home.component";
import { GalleryHomeComponent } from "./pages/gallery/gallery-home/gallery-home.component";
import { OfertyHomeComponent } from "./pages/oferty/oferty-home/oferty-home.component";
import { ProjektyHomeComponent } from "./pages/projekty/projekty-home/projekty-home.component";

const routes: Routes = [
  { path: "contact", component: ContactHomeComponent },
  { path: "gallery", component: GalleryHomeComponent },
  { path: "offers", component: OfertyHomeComponent },
  { path: "projects", component: ProjektyHomeComponent },
  { path: "", component: HomePageComponent },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
