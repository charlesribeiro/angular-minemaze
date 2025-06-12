import { Component } from '@angular/core';
import { CellComponent } from '../cell/cell.component';

@Component({
  imports: [CellComponent],
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss',
})
export class GameBoardComponent {}
