import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SectionComponent } from "./section/section.component";

import { ModalComponent } from "./modal/modal.component";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { BgProviderComponent } from "./bg-provider/bg-provider.component";
import { ButtonComponent } from "./button/button.component";

@NgModule({
  declarations: [
    SectionComponent,
    ModalComponent,
    BgProviderComponent,
    ButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    BgProviderComponent,
    ButtonComponent,
  ],
})
export class UiModule {}
