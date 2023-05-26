
// const nav_link = document.querySelectorAll(".nav__item")

// const route = (event) => {
//     event = event || window.event
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href)
//     // handleLocation();
// }

// const routes = {
//     404: "/src/404.html",
//     "/": "/src/pages/home/index.html",
//     "/about": "/src/pages/about/index.html",
//     "/offers": "/src/pages/offers/index.html",
//     "/rooms": "/src/pages/rooms/index.html",
//     "/contact": "/src/pages/contact/index.html",
// }

// const handleLocation = async () => {
//     const path = window.location.pathname
//     const route = routes[path] || routes[404]
//     const html = await fetch(route).then((data) => data.text())
//     document.getElementsByTagName("main").innerHTML = html;
// }

// nav_link.addEventListener("click", route())
// window.onpopstate = handleLocation;
// window.route = route

// handleLocation();