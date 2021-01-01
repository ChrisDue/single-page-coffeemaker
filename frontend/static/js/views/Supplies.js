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
                You are viewing the supplies!
            </p>
        `;
    }
}