import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LasyComponent } from './lasy/lasy.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: LasyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule {}
