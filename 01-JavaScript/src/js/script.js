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

document.getElementById("baseSaladForm").addEventListener("submit", function(event){
    event.preventDefault();

    var baseSaladeValue = document.getElementById("baseSalade").value;
    var selectedIngredients = getSelectedIngredients();
    var boissonValue = document.getElementById("boisson").value;
    var heureLivraisonValue = document.getElementById("heureLivraison").value;
    var nomValue = document.getElementById("nom").value;
    var prenomValue = document.getElementById("prenom").value;
    var adresseValue = document.getElementById("adresse").value;
    var telephoneValue = document.getElementById("telephone").value;
    
    var commande = {
        baseSalade: baseSaladeValue,
        ingredients: selectedIngredients,
        boisson: boissonValue,
        heureLivraison: heureLivraisonValue,
        nom: nomValue,
        prenom: prenomValue,
        adresse: adresseValue,
        telephone: telephoneValue
      };

      localStorage.setItem("derniereCommande", JSON.stringify(commande));

      document.getElementById("baseSaladForm").reset();
});

function getSelectedIngredients() {
    var checkboxes = document.querySelectorAll("#ingredientsContainer input[type=checkbox]:checked");
    var selectedIngredients = [];
    for (var i = 0; i < checkboxes.length; i++) {
      selectedIngredients.push(checkboxes[i].value);
    }
    return selectedIngredients;
  }

  window.addEventListener("DOMContentLoaded", function() {
    var lastOrder = localStorage.getItem("derniereCommande");
    var lastOrderDetails = document.getElementById("lastOrderDetails");
  
    if (lastOrder) {
      var commande = JSON.parse(lastOrder);
      var detailsHtml = "<p><strong>Base :</strong> " + commande.baseSalade + "</p>";
      detailsHtml += "<p><strong>Ingrédients :</strong> " + commande.ingredients.join(", ") + "</p>";
      detailsHtml += "<p><strong>Boisson :</strong> " + commande.boisson + "</p>";
      detailsHtml += "<p><strong>Heure de livraison :</strong> " + commande.heureLivraison + "</p>";
      detailsHtml += "<p><strong>Nom :</strong> " + commande.nom + "</p>";
      detailsHtml += "<p><strong>Prénom :</strong> " + commande.prenom + "</p>";
      detailsHtml += "<p><strong>Adresse :</strong> " + commande.adresse + "</p>";
      detailsHtml += "<p><strong>Téléphone :</strong> " + commande.telephone + "</p>";
  
      lastOrderDetails.innerHTML = detailsHtml;
    } else {
      lastOrderDetails.innerHTML = "<p>Aucune commande existante</p>";
    }
  });

  document.getElementById("baseSalade").addEventListener("change", updateCurrentSelections);
  document.querySelectorAll("#ingredientsContainer input[type=checkbox]").forEach(function(checkbox) {
    checkbox.addEventListener("change", updateCurrentSelections);
  });
  document.getElementById("boisson").addEventListener("change", updateCurrentSelections);
  
  function updateCurrentSelections() {
    var baseSaladeValue = document.getElementById("baseSalade").value;
    var selectedIngredients = getSelectedIngredients();
    var boissonValue = document.getElementById("boisson").value;
  
    var currentSelections = document.getElementById("currentSelections");
    var selectionsHtml = "";
  
    if (baseSaladeValue) {
      selectionsHtml += "<p><strong>Base :</strong> " + baseSaladeValue + "</p>";
    }
    if (selectedIngredients.length > 0) {
      selectionsHtml += "<p><strong>Ingrédients :</strong> " + selectedIngredients.join(", ") + "</p>";
    }
    if (boissonValue) {
      selectionsHtml += "<p><strong>Boisson :</strong> " + boissonValue + "</p>";
    }
  
    if (selectionsHtml !== "") {
      currentSelections.innerHTML = selectionsHtml;
    } else {
      currentSelections.innerHTML = "<p>Aucune sélection en cours</p>";
    }
  }document.getElementById("baseSalade").addEventListener("change", updateCurrentSelections);
document.querySelectorAll("#ingredientsContainer input[type=checkbox]").forEach(function(checkbox) {
  checkbox.addEventListener("change", updateCurrentSelections);
});
document.getElementById("boisson").addEventListener("change", updateCurrentSelections);

var baseSaladeForm = document.getElementById("baseSaladForm");
var envoyerButton = document.getElementById("envoyerButton");

baseSaladeForm.addEventListener("input", function() {
  var isValid = baseSaladeForm.checkValidity();
  envoyerButton.disabled = !isValid;
});

var checkboxes = document.querySelectorAll('input[name="ingredient"]');
var prixContainer = document.getElementById("prixContainer");

for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", function() {
    var selectedIngredients = document.querySelectorAll('input[name="ingredient"]:checked');
    var selectedBleuIngredients = 0;
    var selectedVertIngredients = 0;

    for (var j = 0; j < selectedIngredients.length; j++) {
      var ingredientName = selectedIngredients[j].value;
      var ingredient = ingredients.find(function(item) {
        return item.nom === ingredientName;
      });

      if (ingredient.categorie === "bleu") {
        selectedBleuIngredients++;
      } else if (ingredient.categorie === "vert") {
        selectedVertIngredients++;
      }
    }

    var prix = calculatePrice(selectedBleuIngredients, selectedVertIngredients);
    prixContainer.textContent = "Prix : " + prix.toFixed(2) + "€";
  });
}

function calculatePrice(selectedBleuIngredients, selectedVertIngredients) {
  var prixBleu = 0;
  var prixVert = 0;

  for (var i = 0; i < ingredients.length; i++) {
    var ingredient = ingredients[i];

    if (ingredient.categorie === "bleu") {
      prixBleu += parseFloat(ingredient.prix);
    } else if (ingredient.categorie === "vert") {
      prixVert += parseFloat(ingredient.prix);
    }
  }

  var prixTotal = (selectedBleuIngredients * prixBleu) + (selectedVertIngredients * prixVert);
  return prixTotal;
}
