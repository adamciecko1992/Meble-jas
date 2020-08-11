import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertyRoutingModule } from './oferty-routing.module';
import { OfertyHomeComponent } from './oferty-home/oferty-home.component';


@NgModule({
  declarations: [OfertyHomeComponent],
  imports: [
    CommonModule,
    OfertyRoutingModule
  ]
})
export class OfertyModule { }
