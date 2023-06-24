// Un tableau pour les bases de salades
var basesSalades = ["Roquette","Laitue","Pâtes"]

// Un tableau pour les ingredients
var ingredients = [
    {nom: "Croûtons", categorie: "vert", prix: 1.5},
    {nom: "Oeuf", categorie: "vert", prix: 1.0},
    {nom: "Bettraves", categorie: "vert", prix: 1.5},
    {nom: "Carottes", categorie: "vert", prix: 2.0},
    {nom: "Choux rouges", categorie: "vert", prix: 0.5},
    {nom: "Concombre", categorie: "vert", prix: 2.0},
    {nom: "Lentilles", categorie: "vert", prix: 2.0},
    {nom: "Maïs", categorie: "vert", prix: 1.5},
    {nom: "Oignons rouges", categorie: "vert", prix: 0.5},
    {nom: "Radis", categorie: "vert", prix: 4.0},
    {nom: "Pommes", categorie: "vert", prix: 2.0},
    {nom: "Oignons frits", categorie: "vert", prix: 0.5},
    {nom: "Emmental", categorie: "vert", prix: 2.0},
    {nom: "Mozzarella", categorie: "vert", prix: 1.5},
    {nom: "Mimolette", categorie: "vert", prix: 3.0},
    {nom: "Surimi", categorie: "vert", prix: 1.5},
    {nom: "Saucisses", categorie: "vert", prix: 3.0},
    {nom: "Aubergines", categorie: "bleu", prix: 2.0},
    {nom: "Avocat", categorie: "bleu", prix: 2.5},
    {nom: "Cantal", categorie: "bleu", prix: 1.5},
    {nom: "Coeur d'artichaut", categorie: "bleu", prix: 2.0},
    {nom: "Grana Panado", categorie: "bleu", prix: 4.5},
    {nom: "Jambon cru", categorie: "bleu", prix: 5.0},
    {nom: "Crevettes", categorie: "bleu", prix: 3.0},
    {nom: "Feta", categorie: "bleu", prix: 1.0},
    {nom: "Melon", categorie: "bleu", prix: 1.5},
    {nom: "Oeuf poché", categorie: "bleu", prix: 2.0},
    {nom: "Poivrons", categorie: "bleu", prix: 2.5},
    {nom: "Thon", categorie: "bleu", prix: 1.0},
    {nom: "Tomates cerises", categorie: "bleu", prix: 3.0},
    {nom: "Tomates séchées", categorie: "bleu", prix: 5.0}
];

// Un tableau pour les boisons
var boissons = ["Vittel",
"Pure Life",
"San Pellegrino",
"Cristaline",
"Pulco Citron",
"May Tea Menthe",
"Minute Maid Orange",
"Minute Maid Pomme",
"Minute Maid Tropical",
"S.Pellegrino Citron",
"S.Pellegrino Orange",
"May Tea Pêche",
"Coca-Cola",
"Coca-Cola Sans Sucres",
"Vitamin Well",
"Fuze Tea Pêche",
"Fuze Tea Citron vert",
"Fuze Tea Framboise"]

var selectBaseSalade = document.getElementById("baseSalade");

for (var i = 0; i < basesSalades.length; i++) {
  var option = document.createElement("option");
  option.value = basesSalades[i];
  option.textContent = basesSalades[i];
  selectBaseSalade.appendChild(option);
}

var selectBoisson = document.getElementById("boisson");
for (var i = 0; i < boissons.length; i++) {
  var option = document.createElement("option");
  option.value = boissons[i];
  option.textContent = boissons[i];
  selectBoisson.appendChild(option);
}

var ingredientsContainer = document.getElementById("ingredientsContainer");
var selectedIngredients = 0;

for (var i = 0; i < ingredients.length; i++) {
  var ingredient = ingredients[i];

  var label = document.createElement("label");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "ingredient";
  checkbox.value = ingredient.nom;

  checkbox.addEventListener("change", function() {
    if (this.checked) {
      selectedIngredients++;
    } else {
      selectedIngredients--;
    }

    var checkboxes = document.querySelectorAll('input[name="ingredient"]');
    for (var j = 0; j < checkboxes.length; j++) {
      checkboxes[j].disabled = selectedIngredients >= 4 && !checkboxes[j].checked;
    }
  });

  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(ingredient.nom));

  ingredientsContainer.appendChild(label);
}