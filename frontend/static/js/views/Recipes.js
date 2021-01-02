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
            <p class="solid">
                Americano:<br>
                - Grounded Coffee<br>
                - Water<br>
                <button class="button button1">Make an Americano</button>
            </p>
            <p class="solid">
                Espresso:<br>
                - Grounded Coffee<br>
                - Water<br>
                <button class="button button1">Make an Espresso</button>
            </p>
            <p class="solid">
                Latte macchiato:<br>
                - Grounded Coffee<br>
                - Milk<br>
                - Water<br>
                <button class="button button1">Make a Latte Macchiato</button>
            </p>
        `;
    }
}