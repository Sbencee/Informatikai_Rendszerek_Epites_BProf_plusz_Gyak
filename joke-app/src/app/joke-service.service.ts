import { Injectable } from '@angular/core';

export interface Joke {
  username: string;
  text: string;
  likes: number;
  dislikes: number;
}


@Injectable({
  providedIn: 'root',
})
export class JokeService {
  jokes: Joke[] = [];

  constructor() {}

  addJoke(joke: Joke) {
    this.jokes.push({...joke, likes: 0, dislikes: 0});
  }
  

  voteForJoke(joke: Joke, value: number) {
    if (value > 0) {
      joke.likes += value;
    } else if (value < 0) {
      joke.dislikes -= value; // subtracting a negative number adds it
    }
  }
  

  getJokes(): Joke[] {
    return this.jokes;
  }

  getTotalScore(): number {
    return this.jokes.reduce((total, joke) => total + joke.likes - joke.dislikes, 0);
  }
  
}
