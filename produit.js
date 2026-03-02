const countries = [
    {name:"Maroc", currency:"MAD", flag:"🇲🇦"},
    {name:"France", currency:"EUR", flag:"🇫🇷"},
    {name:"USA", currency:"USD", flag:"🇺🇸"},
    {name:"Espagne", currency:"EUR", flag:"🇪🇸"},
    {name:"Allemagne", currency:"EUR", flag:"🇩🇪"},
    {name:"Italie", currency:"EUR", flag:"🇮🇹"},
    {name:"Canada", currency:"CAD", flag:"🇨🇦"},
    {name:"Japon", currency:"JPY", flag:"🇯🇵"},
    {name:"Chine", currency:"CNY", flag:"🇨🇳"},
];

const btn = document.getElementById("countryBtn");
const dropdown = document.getElementById("countryDropdown");
const list = document.getElementById("countryList");
const search = document.getElementById("countrySearch");
const selected = document.getElementById("selectedCountry");
const container = document.querySelector(".country-select");

btn.onclick = () => {
    dropdown.classList.toggle("show");
}
function renderCountries(filter=""){
    list.innerHTML="";
    countries
      .filter(c=>c.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(c=>{
        const div = document.createElement("div");
        div.className="country-item";
        div.innerHTML = `${c.flag} ${c.name} <span>${c.currency}</span>`;
        div.onclick = ()=>{
            selected.innerHTML = `${c.flag} ${c.name} <small>${c.currency}</small>`;
            dropdown.classList.remove("show");
        }
        list.appendChild(div);
    });
}
search.oninput = e => renderCountries(e.target.value);

renderCountries();
document.addEventListener("DOMContentLoaded", () => {

  const searchBtn = document.getElementById("searchBtn");
  const overlay = document.getElementById("searchOverlay");
  const closeBtn = document.getElementById("closeSearch");
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");

  const products = document.querySelectorAll(".product-link");

  // OPEN
  searchBtn.addEventListener("click", () => {
    overlay.classList.add("active");
    input.focus();
  });

  // CLOSE
  function closeSearch() {
    overlay.classList.remove("active");
    input.value = "";
    results.innerHTML = "";
  }

  closeBtn.addEventListener("click", closeSearch);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeSearch();
  });

  // SEARCH
  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    results.innerHTML = "";

    if (value.length < 2) return;

    products.forEach(link => {
      const card = link.querySelector(".card");
      const name = card.dataset.name.toLowerCase();

      if (name.includes(value)) {
        results.appendChild(link.cloneNode(true));
      }
    });
  });

});
document.addEventListener("DOMContentLoaded", () => {

  const userBtn = document.getElementById("userBtn");
  const authOverlay = document.getElementById("authOverlay");
  const closeAuth = document.getElementById("closeAuth");

  if (!userBtn || !authOverlay || !closeAuth) {
    console.error("شي عنصر ما تلقاش");
    return;
  }

  userBtn.addEventListener("click", () => {
    authOverlay.classList.add("active");
  });

  closeAuth.addEventListener("click", () => {
    authOverlay.classList.remove("active");
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      authOverlay.classList.remove("active");
    }
  });

});