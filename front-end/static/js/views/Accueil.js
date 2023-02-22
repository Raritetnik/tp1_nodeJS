import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(param) {
        super(param)
        this.setTitle('Accueil');
    }

    async getHTML() {
        return `
        <h1>Bienvenu SPA</h1>
        <h3>Page de dashboard</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolorum corrupti itaque nulla modi saepe eius cumque ea et sint quae, error reprehenderit accusamus architecto atque obcaecati in repellat voluptatem?</p>
        <a href='/posts' data-link>Voir les publications</a>
        `;

    }
}