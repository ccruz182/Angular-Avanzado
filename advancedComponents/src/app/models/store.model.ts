import { Product } from "../interfaces/Product";

export class Store {
    storeItems: Array<Product>;

    constructor() {
        this.storeItems = [
            {
              text:
                "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles.",
              title: "Orange Mineral Water ",
              image: "mineralwater-orange.jpg",
              price: 20
            },
            {
              text:
                "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles.",
              title: "Strawberry Mineral Water ",
              image: "mineralwater-strawberry.jpg",
              price: 33
            },
            {
              text:
                "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles.",
              title: "Chocolate Protein Bar",
              image: "proteinbar-chocolate.jpg",
              price: 120
            }
          ];
    }
}
