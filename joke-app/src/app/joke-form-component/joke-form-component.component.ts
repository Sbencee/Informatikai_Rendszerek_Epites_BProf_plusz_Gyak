import { Component } from '@angular/core';
import { Joke, JokeService } from '../joke-service.service';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form-component.component.html',
  styleUrls: ['./joke-form-component.component.css']
})
export class JokeFormComponentComponent {
  username = '';
  joke = '';

  constructor(private jokeService: JokeService) {}

  submitJoke() {
    const newJoke: Joke = {
      username: this.username,
      text: this.joke,
      likes: 0,  // use likes instead of score
      dislikes: 0  // initialize dislikes as well
    };

    this.jokeService.addJoke(newJoke);
    this.username = '';
    this.joke = '';
  }
}
