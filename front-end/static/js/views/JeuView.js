import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(param) {
        super(param)
        this.setTitle('Jeu View');
        console.log(param['id']);
    }

    async getHTML() {
        const nu = Number(this.param.id);

        async function getData(url) {
            const response = await fetch(url);
            return response.json();
        }

        const data = await getData('/static/db/games.json');

        const jeu = data["results"].find(item => item.id === nu);
        let images = "";
        let tags = "";
        jeu.short_screenshots.forEach(element => {
            images += "<img src='"+element.image+"' class='px-1' width='150'/>"
        });
        jeu.tags.forEach(element => {
            tags += "<span class='btn btn-primary m-1'> "+element.name+"</span>"
        });
        return `
        <h1>${jeu.name}</h1>
        <img class='w-75' src='${jeu.background_image}'/><br/>
        <div class="overflow-x-scroll d-flex mt-3 w-75">
            ${images}
        </div>
        <h3>Date de publication: ${jeu.released}</h3>
        <div><h3>Les tags:</h3>
        ${tags}</div>
        <a href='/jeux'>Retour</a>
        `;
    }
}