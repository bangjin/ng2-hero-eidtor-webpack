import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Crisis } from './crisis';

@Injectable()
export class CrisisService {

    private heroesUrl = 'app/heroes';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getHero(id: number): Promise<Crisis> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }

    getHeroes(): Promise<Crisis[]> {
        // return Promise.resolve(HEROES);
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => {
                let data = response.json().data;
                console.log('===============' + data)
                return data as Crisis[];
            })
            .catch(this.handleError);
    };

    getHeroesSlowly(): Promise<Crisis[]> {
        return new Promise<Crisis[]>(
            resolve => {
                setTimeout(resolve, 2000)
            }
        ).then(() => this.getHeroes());
    }

    update(hero: Crisis): Promise<Crisis> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Crisis> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    handleError(error: any): Promise<void> {
        console.log('error....' + error);
        return Promise.reject(error.message || error);
    }
}