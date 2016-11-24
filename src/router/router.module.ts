import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RouterAppRoutingModule } from './router-routing.module';
import { RouterAppComponent } from './router.component';
import { CrisisListComponent } from './crisis-list.component';
// import { HeroListComponent } from './hero-list.component';
import {HeroesComponent} from '../app/hero/heroes.component';
import {HeroService} from '../app/hero/hero.service';
import {HttpModule} from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../app/in-memory-data.service';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterAppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [
        RouterAppComponent,
        HeroesComponent,
        CrisisListComponent
    ],
    providers: [HeroService],
    bootstrap: [RouterAppComponent]
})
export class RouterAppModule {
}
