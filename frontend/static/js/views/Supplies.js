import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Supplies");
    }

    async getHtml() {
        return `
        <h1>Supplies</h1>
        <p>
            You are viewing all the available supplies.
        </p>
        <p class="solid">
            Grounded Coffee: 500g<br>
            <button class="button button1">Refill Grounded Coffee</button>
        </p>
        <p class="solid">
            Water: 3 Liters<br>
            <button class="button button1">Refill Water</button>
        </p>
        <p class="solid">
            Milk: 2 Liters<br>
            <button class="button button1">Refill Milk</button>
        </p>
        `;
    }
}