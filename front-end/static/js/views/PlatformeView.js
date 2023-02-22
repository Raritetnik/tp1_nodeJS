import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(param) {
        super(param)
        this.setTitle('Platforme view');
    }

    async getHTML() {
        const nu = Number(this.param.id);

        async function getData(url) {
            const response = await fetch(url);
            return response.json();
        }

        const data = await getData('/static/js/views/posts.json');
        const article = data.find(item => item.id === nu);
        return `
        <h2>${article.title}</h2>
        <small><i>${article.Author}</i></small>
        <p>${article.description}</p>
        <a href='/post'>Retour</a>
        `;
    }
}