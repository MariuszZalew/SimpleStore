import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: "app-store",
    templateUrl: "store.component.html"
})

export class StoreComponent {
    public selectedCategory = null;
    
    constructor(private reposiory: ProductRepository) {}

    get products(): Product[] {
        return this.reposiory.gerProducts(this.selectedCategory);
        // return this.reposiory.gerProducts();
    }

    get categories(): string[] {
        return this.reposiory.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

}