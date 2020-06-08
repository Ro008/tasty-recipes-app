import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Paella valenciana',
      'Traditional Spanish dish, with hundreds of variations',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/01_Paella_Valenciana_original.jpg/800px-01_Paella_Valenciana_original.jpg',
      [
        new Ingredient('rice', 300),
        new Ingredient('rabbit', 1)
      ]),

    new Recipe('Orange cake',
      'Fluffy and delicious treat',
      'https://p1.pxfuel.com/preview/683/172/968/cake-sponge-cake-bowl-cake-small.jpg',
      [
        new Ingredient('flour', 400),
        new Ingredient('sugar', 80),
        new Ingredient('orange', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShopList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
