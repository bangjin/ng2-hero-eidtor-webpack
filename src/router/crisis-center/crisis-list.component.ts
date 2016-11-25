import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Crisis } from './crisis';

import { CrisisService } from './crisis.service';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-heroes',
    templateUrl: './crisis-list.component.html',
    styleUrls: ['./crisis-list.component.css']
})

export class CrisisListComponent implements OnInit {
    heroes: Crisis[];
    selectedHero: Crisis;
    // heroes: Observable<Hero[]>;
    private selectedId: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private heroService: CrisisService) { }

    onSelect(hero: Crisis): void {
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

    isSelected(hero: Crisis):boolean {
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

    delete(hero: Crisis): void {
        this.heroService.delete(hero.id)
        .then(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if(this.selectedHero === hero) {
                this.selectedHero = null;
            }
        })
    }
}
