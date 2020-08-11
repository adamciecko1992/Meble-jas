import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjektyRoutingModule } from './projekty-routing.module';
import { ProjektyHomeComponent } from './projekty-home/projekty-home.component';


@NgModule({
  declarations: [ProjektyHomeComponent],
  imports: [
    CommonModule,
    ProjektyRoutingModule
  ]
})
export class ProjektyModule { }
