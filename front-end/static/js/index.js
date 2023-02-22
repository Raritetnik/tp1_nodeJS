import Accueil from "./views/Accueil.js";
import Platformes from "./views/Platformes.js";
import PlatformeView from "./views/PlatformeView.js";
import JeuView from "./views/JeuView.js";
import Jeux from "./views/Jeux.js";
import JeuDePlatforme from "./views/JeuDePlatforme.js";
// Router


const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(
    /:\w+/g, "(.+)") + "$");

const getParams = match => {
    const value = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result =>
        result[1]);
    return Object.fromEntries(keys.map((key, i) => [key, value[i]]));
}

const router = async () => {
    // Attribution de classe selon lien de site
    const routes = [
        { path: "/", view: Accueil },
        { path: "/jeux", view: Jeux },
        { path: "/platformes", view: Platformes },
        { path: "/platforme/:id", view: PlatformeView },
        { path: "/jeu/:id", view: JeuView },
        { path: "/jeux-de-platforme/:id", view: JeuDePlatforme }
    ]

    const potencialMatches = routes.map(route => { return {
        route: route,
        //isMatch: location.pathname === route.path,
        result: location.pathname.match(pathToRegex(route.path))
    }});

    // Cherche URL compatible au selectionné
    let match = potencialMatches.find(route => route.result != null)

    // Si URL n'est pas trouvé, diriger vers le precedant
    match = match || {route: route[0], result: [location.pathname]};

    const view = new match.route.view(getParams(match));
    document.querySelector('#app').innerHTML = await view.getHTML();
}


document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if(e.target.matches('[data-link]')) {
            e.preventDefault();
            navigation(e.target.href);
        }
    })
    router();
})

window.addEventListener('popstate', router);

const navigation = url => {
    history.pushState(null, null, url)
    router();
}