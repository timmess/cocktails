import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent {
  @Input() public cocktails: Cocktail[] = [];
  @Input() public selectedCocktail!: Cocktail;

  @Output()
  private changedCocktail: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(idx: number) {
    this.changedCocktail.emit(idx);
  }
}
