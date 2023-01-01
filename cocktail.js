let cocktail = {
  fetchCocktail: function (search) {
    fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' +
      search)
      .then((response) => {
        if (!response.ok) {
          alert("No cocktail found.");
          throw new Error("No cocktail found.");
        }
        return response.json();
      })
      .then((data) => this.displayCocktail(data));
  },
  displayCocktail: function (data) {
    const drink = data.drinks[0];
    const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
    const list = [
      drink.strIngredient1,
      drink.strIngredient2,
      drink.strIngredient3,
      drink.strIngredient4,
      drink.strIngredient5,
      drink.strIngredient6,
      drink.strIngredient7,
      drink.strIngredient8,
      drink.strIngredient9,
    ];
    let ingr = list.map((item) => {
      if (!item) return;
      return item + '\n';
    }).join("");
    document.querySelector(".drink-name").innerText = name;
    document.querySelector(".drink-img").src = image;
    document.querySelector(".drink-img").alt = name;
    document.querySelector(".drink-desc").innerText = desc;
    document.querySelector(".drink-ingr").innerText = ingr;
  },
  search: function () {
    this.fetchCocktail(document.querySelector(".search-bar").value);
  },
};
document.querySelector(".search button").addEventListener("click", function () {
  cocktail.search();
});
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      cocktail.search();
    }
  });
cocktail.fetchCocktail("Pornstar martini");