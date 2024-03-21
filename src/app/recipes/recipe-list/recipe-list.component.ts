import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg'),
    new Recipe('Another Test Recipe','This is simply a test','https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter <Recipe>();


  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
