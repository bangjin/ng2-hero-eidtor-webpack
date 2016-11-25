import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RouterAppRoutingModule } from './router-routing.module';
import { RouterAppComponent } from './router.component';
import {HeroesModule} from './heroes/heroes.module';
import {HttpModule} from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../app/in-memory-data.service';
import {CrisisCenterModule} from './crisis-center/crisis-center.module';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterAppRoutingModule,
        HttpModule,
        HeroesModule,
        CrisisCenterModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [
        RouterAppComponent
    ],
    bootstrap: [RouterAppComponent]
})
export class RouterAppModule {
}
