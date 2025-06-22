import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Heading } from './heading/heading';
import { Search } from './search/search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Heading, Search],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-angular-app';
}
