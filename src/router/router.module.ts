import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RouterAppComponent } from './router.component';
import { CrisisListComponent } from './crisis-list.component';
import { HeroListComponent } from './hero-list.component';
const appRoutes: Routes = [
    { path: 'crisis-center', component: CrisisListComponent },
    { path: 'heroes', component: HeroListComponent }
];
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        RouterAppComponent,
        HeroListComponent,
        CrisisListComponent
    ],
    bootstrap: [RouterAppComponent]
})
export class RouterAppModule {
}
