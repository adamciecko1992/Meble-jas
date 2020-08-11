import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
//pages
import { HomeModule } from "./pages/home/home.module";
import { ContactModule } from "./pages/contact/contact.module";
import { GalleryModule } from "./pages/gallery/gallery.module";
import { OfertyModule } from "./pages/oferty/oferty.module";
import { ProjektyModule } from "./pages/projekty/projekty.module";
import { Page404Component } from "./pages/page404/page404.component";
import { NavigationModule } from "./navigation/navigation.module";

//components
import { HeaderComponent } from "./layout/header/header.component";
import { UiModule } from "./ui/ui.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, Page404Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ContactModule,
    GalleryModule,
    OfertyModule,
    ProjektyModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    UiModule,
    NavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
