import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OfertyHomeComponent } from "./oferty-home/oferty-home.component";

const routes: Routes = [{ path: "", component: OfertyHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertyRoutingModule {}
