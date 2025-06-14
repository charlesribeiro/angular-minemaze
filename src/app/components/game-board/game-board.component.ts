import { Component, HostListener, signal } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { mockBoard } from '../../data/board';

@Component({
  imports: [CellComponent],
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss',
})
export class GameBoardComponent {
  boardSize = 3;
  board = signal(mockBoard);

  activeCell = signal<{ row: number; col: number }>({ row: 0, col: 0 });

  isActiveCell(cellRow: number, cellCol: number): boolean {
    const { row, col } = this.activeCell();
    return row === cellRow && col === cellCol;
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    const { row, col } = this.activeCell();
    switch (event.key) {
      case 'w':
      case 'ArrowUp':
        if (row > 0) this.activeCell.set({ row: row - 1, col });
        break;
      case 's':
      case 'ArrowDown':
        if (row < this.boardSize - 1)
          this.activeCell.set({ row: row + 1, col });
        break;
      case 'a':
      case 'ArrowLeft':
        if (col > 0) this.activeCell.set({ row, col: col - 1 });
        break;
      case 'd':
      case 'ArrowRight':
        if (col < this.boardSize - 1)
          this.activeCell.set({ row, col: col + 1 });
        break;
    }
  }

  onCellClick(clickedRow: number, clickedCol: number): void {
    const { row, col } = this.activeCell();

    const isAdjacent =
      Math.abs(clickedRow - row) + Math.abs(clickedCol - col) === 1;

    if (isAdjacent) {
      this.activeCell.set({ row: clickedRow, col: clickedCol });
    }
  }
}
