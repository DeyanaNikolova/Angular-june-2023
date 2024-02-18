import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LasyComponent } from './lasy/lasy.component';
import { LazyRoutingModule } from './lazy.router';

@NgModule({
  declarations: [LasyComponent],
  imports: [CommonModule, LazyRoutingModule],
})
export class LazyModule {}
