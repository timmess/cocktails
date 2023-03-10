import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent {
  public cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-mojito-2.jpg',
      description: `La création du Mojito remonte au XVIe siècle lorsque Francis Draque, le célèbre corsaire anglais, avait pour habitude de célébrer ses pillages en sirotant à La Havane, du tafia (l’ancêtre du rhum), aromatisé de quelques feuilles de menthe et de citron. Ce n’est qu’au cours du XX ème siècle que la recette originelle du célèbre cocktail va voir le jour, et le tafia se muer progressivement en un rhum plus distillé.`,
    },
    {
      name: 'Cosmopolitain',
      img: 'https://www.cuisineactuelle.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F88997467-7c68-4f98-857b-dec4a1cbe7b1.2Ejpeg/650x324/quality/80/crop-from/center/cosmopolitain.jpeg',
      description: `La création du Mojito remonte au XVIe siècle lorsque Francis Draque, le célèbre corsaire anglais, avait pour habitude de célébrer ses pillages en sirotant à La Havane, du tafia (l’ancêtre du rhum), aromatisé de quelques feuilles de menthe et de citron. Ce n’est qu’au cours du XX ème siècle que la recette originelle du célèbre cocktail va voir le jour, et le tafia se muer progressivement en un rhum plus distillé.`,
    },
    {
      name: 'Irish coffee',
      img: 'https://img-3.journaldesfemmes.fr/6p7tK4AxvQaxuWbPXGzw-NqeBFM=/750x500/smart/a835da9f374e4356a08f99437383d9de/recipe-jdf/10045918.jpg',
      description: `La création du Mojito remonte au XVIe siècle lorsque Francis Draque, le célèbre corsaire anglais, avait pour habitude de célébrer ses pillages en sirotant à La Havane, du tafia (l’ancêtre du rhum), aromatisé de quelques feuilles de menthe et de citron. Ce n’est qu’au cours du XX ème siècle que la recette originelle du célèbre cocktail va voir le jour, et le tafia se muer progressivement en un rhum plus distillé.`,
    },
  ];

  public selectedCocktail!: Cocktail;

  constructor() {}

  ngOnInit(): void {
    this.selectedCocktail = this.cocktails[0];
  }

  public selectCocktail(index: number): void {
    this.selectedCocktail = this.cocktails[index];
  }
}
