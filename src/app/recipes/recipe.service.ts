import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://images.immediate.co.uk/production/volatile/sites/2/2021/10/WienerSchnitzel_015-d281ef4.jpg?quality=90&crop=13px,4395px,5656px,2433px&resize=556,505',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries',20)
      ]
    ),
    new Recipe('Nice Pizza',
      'So delicious',
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
      [
        new Ingredient('Buns',2),
        new Ingredient('Meat',1)
      ]
    )
  ];
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(id: number){
    return this.recipes[id];
  }
  constructor(private shoppingListService: ShoppingListService) { }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}
