import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateOnScrollDirective } from "./translate-on-scroll.directive";

@NgModule({
  declarations: [TranslateOnScrollDirective],
  imports: [CommonModule],
  exports: [TranslateOnScrollDirective],
})
export class DirectivesModule {}
