import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Supplies");
    }

    async getHtml() {
        return `
        <h1>Recipes</h1>
        <p>
            You are viewing all the available recipes.
        </p>
        <p class="solid">
            Grounded Coffee:<br>
            <button class="button button1">Refill Grounded Coffee</button>
        </p>
        <p class="solid">
            Water:<br>
            <button class="button button1">Refill Water</button>
        </p>
        <p class="solid">
            Milk:<br>
            <button class="button button1">Refill Milk</button>
        </p>
        `;
    }
}