import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DesignBlock } from './design-block/design-block';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,DesignBlock],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('code-sharing-platform');
}
