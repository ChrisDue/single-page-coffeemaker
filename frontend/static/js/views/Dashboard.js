import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome back</h1>
            <p>
                Wanna start with your morning favorite?
            </p>
            <button class="button button1">Make a fresh {Favorite}</button>
        `;
    }
}