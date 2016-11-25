import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Hero } from './hero';

import { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-heroes',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    // heroes: Observable<Hero[]>;
    private selectedId: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private heroService: HeroService) { }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        console.log(hero);
        this.router.navigate(['/hero', hero.id]);
    }

    ngOnInit(): void {
        // this.getHeros();
        this.route.params
        .switchMap((params: Params) => {
            this.selectedId = +params['id'];
            return this.heroService.getHeroes();
        })
        .subscribe(heroes => this.heroes = heroes);
    }

    isSelected(hero: Hero):boolean {
        return hero.id === this.selectedId;
    }

    getHeros(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        // this.heroService.getHeroesSlowly().then(  heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    add(name: string): void {
        name = name.trim();
        if(!name) {return;}
        this.heroService.create(name)
        .then(hero => {
            this.heroes.push(hero);
            this.selectedHero = null;
        });
    }

    delete(hero: Hero): void {
        this.heroService.delete(hero.id)
        .then(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if(this.selectedHero === hero) {
                this.selectedHero = null;
            }
        })
    }
}
