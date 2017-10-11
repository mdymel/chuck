import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {JokeModel} from './joke.model';
import 'rxjs/add/operator/map';

@Injectable()
export class JokesProvider {

    private joke: JokeModel = null;

    constructor(private http: Http) {

    }

    public getJoke(): JokeModel {
        return this.joke;
    }

    load() {
        return new Promise((resolve, reject) => {
            this.http
                .get('https://api.icndb.com/jokes/random')
                .map(res => res.json())
                .subscribe(response => {
                    this.joke = response['value'];
                    resolve(true);
                })
        })
    }
}
