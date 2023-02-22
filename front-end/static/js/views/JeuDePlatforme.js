import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

    constructor(param) {
        super(param)
        this.setTitle('Jeux supportés');
    }

    async getHTML() {
        async function getData(url) {
            const response = await fetch(url)
            return response.json();
        }
        const data = await getData('/static/db/platforms.json');
        const idPlatforme = Number(this.param.id);
        const platforme = data["results"].find(item => item.id === idPlatforme);
        this.setTitle('Jeux supportés par '+platforme.name);

        let listePosts = "<ul class='container row' >";
        platforme['games'].forEach(post => {
            listePosts += `
            <div class="border border-warning col-lg-12 bg-info-subtle m-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <h5 class="card-title pe-1">${post.name}</h5>
                    <a href="/jeu/${post.id}" class="btn btn-primary" data-link>Voir</a>
                </div>
            </div>
            `;
        });
        listePosts += "</ul>";

        //console.log(listePosts);
        return `
        <h1>Jeux supportés par ${platforme.name}</h1>
        ${listePosts}
        `;

    }
}