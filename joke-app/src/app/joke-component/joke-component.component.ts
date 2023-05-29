import { Component, Input } from '@angular/core';
import { Joke, JokeService } from '../joke-service.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke-component.component.html',
  styleUrls: ['./joke-component.component.css']
})
export class JokeComponentComponent {
  @Input() joke!: Joke;

  constructor(private jokeService: JokeService) {}

  voteForJoke(value: number) {
    this.jokeService.voteForJoke(this.joke, value);
  }
  
}
