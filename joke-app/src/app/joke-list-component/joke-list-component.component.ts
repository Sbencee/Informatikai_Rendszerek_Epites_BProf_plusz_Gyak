import { Component } from '@angular/core';
import { Joke, JokeService } from '../joke-service.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list-component.component.html',
  styleUrls: ['./joke-list-component.component.css']
})
export class JokeListComponentComponent {
  constructor(private jokeService: JokeService) {}

  getJokes(): Joke[] {
    return this.jokeService.getJokes();
  }

  getTotalScore(): number {
    return this.jokeService.getTotalScore();
  }
  
  getTotalLikes(): number {
    return this.jokeService.getJokes().reduce((total, joke) => total + joke.likes, 0);
  }
  
  getTotalDislikes(): number {
    return this.jokeService.getJokes().reduce((total, joke) => total + joke.dislikes, 0);
  }
  
  
}
