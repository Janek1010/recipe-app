import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[];
  private subscription: Subscription;
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription =  this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[])=>{
          this.ingredients = ingredients;
        }
      )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  constructor(private shoppingListService: ShoppingListService) {
  }

}
