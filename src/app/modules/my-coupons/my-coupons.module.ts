import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCouponsComponent } from './my-coupons.component';
import { MyCouponsRoutingModule } from './my-coupons-routing.module';



@NgModule({
  declarations: [
    MyCouponsComponent
  ],
  imports: [
    CommonModule,
    MyCouponsRoutingModule
  ]
})
export class MyCouponsModule { }
