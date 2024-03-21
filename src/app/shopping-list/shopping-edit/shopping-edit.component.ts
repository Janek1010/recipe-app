import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Recipe} from "../../recipes/recipe.model";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    this.ingredientAdded.emit(
      new Ingredient(this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value));
  }
}
