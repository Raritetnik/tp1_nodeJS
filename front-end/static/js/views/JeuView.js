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
        let btns = "";
        jeu.short_screenshots.forEach(element => {
            images += "<img src='"+element.image+"' class='px-1' width='150'/>"
        });
        jeu.tags.forEach(element => {
            tags += "<span class='btn btn-primary m-1'> "+element.name+"</span>"
        });
        jeu.stores.forEach(element => {
            btns += "<button class='btn btn-dark m-2'> "+element.store.name+"</button>"
        });
        return `
        <h1>${jeu.name}</h1>
        <div class='row'>
            <div class='col-8'>
                <img class='w-100' src='${jeu.background_image}'/><br/>
                <div class="overflow-x-scroll d-flex mt-3 w-100">
                    ${images}
                </div>
            </div>
            <div class='col-4'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit doloremque ipsa ullam tempore numquam reprehenderit repudiandae repellendus, qui, a ex dolor labore sed dolorem, eaque aliquid voluptatum laudantium earum dolores.</p>
                <div>
                <h3>Magasins enligne:</h3>
                ${btns}

                <h3 class='mt-2'>Date de publication: <br/>${jeu.released}</h3>
                </div>
            </div>
        </div>
        <div class='m-3'> ${tags}</div>
        <a class='btn btn-info' href='/jeux' data-link>Retour</a>
        `;
    }
}