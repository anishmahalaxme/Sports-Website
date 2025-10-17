
const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if (pageName === "home.html") {
  document.querySelector(".alhome").classList.add("activeLink");
}

if (pageName === "about.html") {
  document.querySelector(".alabout").classList.add("activeLink");
}

if (pageName === "achievements.html") {
  document.querySelector(".alachieve").classList.add("activeLink");
}

if (pageName === "schemes.html") {
  document.querySelector(".alschemes").classList.add("activeLink");
}

if (pageName === "news.html") {
  document.querySelector(".alnews").classList.add("activeLink");
}

if (pageName === "contact.html") {
  document.querySelector(".alcon").classList.add("activeLink");
}




  