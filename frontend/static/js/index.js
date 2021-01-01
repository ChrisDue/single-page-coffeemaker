import Dashboard from "./views/Dashboard.js";
import Recipes from "./views/Recipes.js";
import Supplies from "./views/Supplies.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    // console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

// async: Load stuff while FE is still loading
const router = async () => {
    // console.log(pathToRegex("/recipes/:id"));
    const routes = [
        // Using class reference
        { path: "/", view: Dashboard },
        { path: "/recipes", view: Recipes },
        { path: "/supplies", view: Supplies }
    ];

    // Test each route for potential match 
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    };

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
}

// Make sure Back-Button actually re-navigates the user
window.addEventListener("popstate", router);

// Once all content was loaded
document.addEventListener("DOMContentLoaded", () => {
    // Avoid Page Refresh when clicking a navigation link
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});