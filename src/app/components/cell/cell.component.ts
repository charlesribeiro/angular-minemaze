import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-cell',
  imports: [],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellComponent {
  row = input<number>();
  col = input<number>();
  isMine = input<boolean>();
  isRevealed = input<boolean>();
  isFlagged = input<boolean>();
  adjacentMines = input<number>(0);

  reveal = output<void>();
  toggleFlag = output<void>();

  onLeftClick(event: MouseEvent): void {
    event.preventDefault();
    if (!this.isRevealed()) this.reveal.emit();
  }

  onRightClick(event: MouseEvent): void {
    event.preventDefault();
    if (!this.isRevealed()) this.toggleFlag.emit();
  }

  onKeyPress(event: Event): void {
    event.preventDefault();

    const keyEvent = event as KeyboardEvent;

    if (!this.isRevealed()) {
      this.reveal.emit();
    }
  }
}
