import { Component, OnInit  } from '@angular/core';
import '../../../public/css/styles.css';
import {Hero} from './hero';

import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService){}

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        console.log(hero)
    }

    ngOnInit(): void {
        this.getHeros();
    }

    getHeros(): void {
        this.heroService.getHeroes().then(  heroes => this.heroes = heroes);
        // this.heroService.getHeroesSlowly().then(  heroes => this.heroes = heroes);
    }
}