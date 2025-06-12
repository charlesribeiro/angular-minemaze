import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameBoardComponent } from './components/game-board/game-board.component';

@Component({
  imports: [GameBoardComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-minemaze';
}
