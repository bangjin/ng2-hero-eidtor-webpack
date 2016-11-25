import {
  Component, OnInit, HostBinding,
  trigger, transition, animate,
  style, state, Input
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './hero';
import { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['../../../public/css/styles.css'],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero: Hero;

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }


  constructor(private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { };

  ngOnInit() {
    // this.route.params
    //   .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    //   .subscribe(hero => this.hero = hero);
    let id = +this.route.snapshot.params['id'];
    this.heroService.getHero(id)
      .then((hero: Hero) => this.hero = hero);
  }

  goBack(): void {
    // this.location.back();
    let heroId = this.hero ? this.hero.id : null;
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
}
