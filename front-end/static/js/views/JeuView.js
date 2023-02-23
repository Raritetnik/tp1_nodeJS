import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(param) {
        super(param)
        this.setTitle('Jeu View');

        // Réaction de carrousel sur les click des images, affichage en gros.
        document.querySelector('#app').addEventListener("mousedown", (e) => {
            if(e.target.classList.contains('img_sec')) {
                document.querySelector('#img_prim').src = e.target.src;
            }
        } )
    }

    async getHTML() {
        // Chargement de base de données
        async function getData(url) {
            const response = await fetch(url);
            return response.json();
        }
        const data = await getData('/static/db/games.json');
        // Reception de ID passée en paramètres et recherche dans base de données
        const nu = Number(this.param.id);
        const jeu = data["results"].find(item => item.id === nu);

        // Si FIND retourne ne trouve pas le jeu
        if(jeu == null) {
            return `<div>
                <h3>Désolé, cette jeu n'est pas encore dans notre système... :C </h3>
                <a class='btn btn-info btn-lg' href='/jeux' data-link>Retour au catalogue des jeux</a>
            </div>`
        }

        // Creation de listes images, tags et stores et attribution de couleur selon la note
        let images = "";
        let tags = "";
        let stores = "";
        let note = (jeu.rating > 4) ? 'bg-success' : (jeu.rating > 2) ? "bg-warning" : "bg-danger";
        jeu.short_screenshots.forEach(element => {
            images += "<img src='"+element.image+"' class='px-1 img_sec' width='150'/>"
        });
        jeu.tags.forEach(element => {
            tags += "<span class='btn btn-primary m-1'> "+element.name+"</span>"
        });
        jeu.stores.forEach(element => {
            stores += "<button class='btn btn-dark m-2'> "+element.store.name+"</button>"
        });

        // Code HTML de page affichage jeu
        return `
        <h1>${jeu.name}</h1>
        <div class='row'>
            <div class='col-8'>
                <img class='w-100' id="img_prim" src='${jeu.background_image}'/><br/>
                <div class="overflow-x-scroll d-flex mt-3 w-100">
                    ${images}
                </div>
            </div>
            <div class='col-4'>
                <h3>Magasins en ligne:</h3>
                ${stores}
                <h3>Note de critiques:</h3>
                <span class='d-block p-4 ${note} text-center'>${jeu.rating}</span>
                <h3 class='mt-2'>Date de publication: <br/>${jeu.released}</h3>
                </div>
            </div>
        </div>
        <div class='m-3'> ${tags}</div>
        <a class='btn btn-info btn-lg' href='/jeux' data-link>Retour</a>

        `;
    }
}