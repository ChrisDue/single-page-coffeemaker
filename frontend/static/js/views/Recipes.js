import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Recipes");
    }

    async getHtml() {
        return `
            <h1>Recipes</h1>
            <p>
                You are viewing all the available recipes.
            </p>
            <p class="dashed">
                Americano:<br>
                - Grounded Coffee<br>
                - Nothing else<br>
                <button class="button button1">Make an Americano</button>
            </p>
            <p class="dashed">
                Espresso:<br>
                - Grounded Coffee<br>
                - Nothing else<br>
                <button class="button button1">Make an Espresso</button>
            </p>
            <p class="dashed">
                Latte macchiato:<br>
                - Grounded Coffee<br>
                - Nothing Milk<br>
                <button class="button button1">Make a Latte Macchiato</button>
            </p>
        `;
    }
}