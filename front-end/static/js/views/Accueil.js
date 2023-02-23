import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(param) {
        super(param)
        this.setTitle('Accueil');
    }

    async getHTML() {
        return `
        <h1 class='mb-5'>Bienvenu sur GameViewer</h1>

        <p>Notre site contient une grande librarie des jeux vidéos qui peuvent t'intéressé. Visitez notre catalogue avec tous les jeux pour retrouver celle qui va vous intéressée. En cliquant sur "Voir" vous pouvez voir en détails du jeu avec quelques images, un peu de déscription de quoi contient le jeu en tags et les platformes oû vous pouvez l'acheter.</p>

        <p>Corrupti itaque nulla modi saepe eius cumque ea et sint quae, error reprehenderit accusamus architecto atque obcaecati in repellat error reprehenderit accusamus architecto voluptatem? Ipsa dolorum corrupti itaque nulla modi saepe eius cumque ea et sint quae, error reprehenderit accusamus architecto atque obcaecati in repellat voluptatem?</p>
        <a href='/jeux' class='btn btn-info' data-link>Catalogue</a>
        `;

    }
}