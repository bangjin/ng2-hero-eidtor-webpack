import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent }  from './crisis-list.component';
// import { HeroListComponent }    from './hero-list.component';
import {HeroesComponent} from '../app/hero/heroes.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroesComponent }
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
