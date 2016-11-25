import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HeroListComponent} from './heroes/hero-list.component';

const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent }
  // { path: 'heroes', component: HeroListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RouterAppRoutingModule {}
