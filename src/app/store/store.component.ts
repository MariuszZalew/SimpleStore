import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: "app-store",
    templateUrl: "store.component.html"
})

export class StoreComponent {
    public selectedCategory = null;
    public productPerPage = 4;
    public selectedPage = 1;
    
    constructor(private reposiory: ProductRepository) {}

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productPerPage;
        return this.reposiory.gerProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productPerPage);
    }

    get categories(): string[] {
        return this.reposiory.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }
    
    changePageSize(newSize: number) {
        this.productPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageCount(): number {
        return Math.ceil(this.reposiory.gerProducts(this.selectedCategory).length / this.productPerPage);
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.reposiory
            .gerProducts(this.selectedCategory).length / this.productPerPage))
                .fill(0).map( (x, i) => i + 1);
    }
}