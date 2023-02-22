import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(param) {
        super(param)
        this.setTitle('Platformes');
    }

    async getHTML() {
        async function getData(url) {
            const response = await fetch(url)

            return response.json();
        }

        const data = await getData('/static/db/platforms.json');
        let listePosts = "<div class='container row' >";
        data['results'].forEach(post => {
            listePosts += `
            <div class="obj_card card col-lg-4">
                <img class="card-img-top" src="${post.image_background}" alt="Card image cap">
                <div class="d-flex justify-content-between align-items-center p-2 bg-info-subtle h-25">
                    <h5 class="card-title pe-1">${post.name}</h5>
                    <a href="/jeux-de-platforme/${post.id}" class="btn btn-primary">Voir</a>
                </div>
            </div>
            `;
        });
        listePosts += "</div>";

        return `
        <h1>Platformes</h1>
        ${listePosts}
        `;

    }
}