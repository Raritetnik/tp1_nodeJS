import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(param) {
        super(param)
        this.setTitle('Accueil');
    }

    async getHTML() {
        return `
        <h1>Bienvenu sur GameViewer</h1>
        <h3>Page d'accueil</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolorum corrupti itaque nulla modi saepe eius cumque ea et sint quae, error reprehenderit accusamus architecto atque obcaecati in repellat voluptatem?</p>
        <p>Corrupti itaque nulla modi saepe eius cumque ea et sint quae, error reprehenderit accusamus architecto atque obcaecati in repellat error reprehenderit accusamus architecto voluptatem? Ipsa dolorum corrupti itaque nulla modi saepe eius cumque ea et sint quae, error reprehenderit accusamus architecto atque obcaecati in repellat voluptatem?</p>
        <a href='/jeux' class='btn btn-info' data-link>Voir les jeux</a>
        `;

    }
}