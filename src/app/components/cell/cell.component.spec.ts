import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellComponent } from './cell.component';

describe('CellComponent', () => {
  let component: CellComponent;
  let fixture: ComponentFixture<CellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit reveal on left click when not revealed', () => {
    const spy = vi.spyOn(component.reveal, 'emit');
    fixture.componentRef.setInput('isRevealed', false);

    const event = new MouseEvent('click');
    component.onLeftClick(event);

    expect(spy).toHaveBeenCalled();
  });

  it('should not emit reveal on left click when already revealed', () => {
    const spy = vi.spyOn(component.reveal, 'emit');
    fixture.componentRef.setInput('isRevealed', true);

    const event = new MouseEvent('click');
    component.onLeftClick(event);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should emit toggleFlag on right click when not revealed', () => {
    const spy = vi.spyOn(component.toggleFlag, 'emit');
    fixture.componentRef.setInput('isRevealed', false);

    const event = new MouseEvent('contextmenu');
    component.onRightClick(event);

    expect(spy).toHaveBeenCalled();
  });

  it('should not emit toggleFlag on right click if revealed', () => {
    const spy = vi.spyOn(component.toggleFlag, 'emit');
    fixture.componentRef.setInput('isRevealed', true);

    const event = new MouseEvent('contextmenu');
    component.onRightClick(event);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should not emit reveal on keypress Enter if revealed', () => {
    const spy = vi.spyOn(component.reveal, 'emit');
    fixture.componentRef.setInput('isRevealed', true);
    fixture.detectChanges();

    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    component.onKeyPress(event);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should initialize adjacentMines with 0 if not set', () => {
    expect(component.adjacentMines()).toBe(0);
  });
});
