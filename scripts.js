//Class Def
class cIngredient {
  constructor(type, str, depth, price) {
    this.type = type;
    this.str = str;
    this.depth = depth;
    this.price = price;
  }
}

//Potion Stats
var potStr = 0
var potDep = 0
var potPrice = 0
var numIngredients = 3
var testMod = "+10"

//Declare objects of Alchemical Ingredients
let None = new cIngredient("", 0, 0, 0);
let Ubiquitous = new cIngredient("Ubiquitous", 2, 1, 1);
let Plentiful = new cIngredient("Plentiful", 5, 2, 5);
let Common = new cIngredient("Common", 10, 3, 10);
let Uncommon = new cIngredient("Uncommon", 15, 4, 25);

var Rarities = [None, Ubiquitous, Plentiful, Common, Uncommon]

function brewPotion() {
  potStr = 0
  potDep = 0
  potPrice = 0
  numIngredients = 3
  testMod = "+10"

  //Get Ingredient Rarity from User Input
  var i1 = document.getElementById("ingredient_one");
  var ingredientOne = i1.value;

  var i2 = document.getElementById("ingredient_two");
  var ingredientTwo = i2.value;

  var i3 = document.getElementById("ingredient_three");
  var ingredientThree = i3.value;

  //Loop through Rarities Array and Convert User Input
  var Rarity
  for (Rarity of Rarities) {
    console.log(ingredientOne)
    console.log(ingredientTwo)
    console.log(ingredientThree)
    console.log(numIngredients)
    if (ingredientOne == Rarity.type) {
      if (Rarity.type == "") {
        console.log("Working? 1")
        numIngredients -= 1
      }
      potStr += Rarity.str
      potDep += Rarity.depth
      potPrice += Rarity.price
    }
    if (ingredientTwo == Rarity.type) {
      if (Rarity.type == "") {
        console.log("Working? 2")
        numIngredients -= 1

      }
      potStr += Rarity.str
      potDep += Rarity.depth
      potPrice += Rarity.price
    }
    if (ingredientThree == Rarity.type) {
      if (Rarity.type == "") {
        numIngredients -= 1

      }
      potStr += Rarity.str
      potDep += Rarity.depth
      potPrice += Rarity.price
    }


  }

  if (numIngredients == 2) {
    testMod = "-10"
  }
  if (numIngredients == 1) {
    testMod = "-20"
  }

  potStr = Math.floor(potStr / numIngredients)
  potDep = Math.floor(potDep / numIngredients)

  //Output Data
  document.getElementById("pot_str").value = potStr;
  document.getElementById("pot_dep").value = potDep;
  document.getElementById("pot_price").value = potPrice;
  document.getElementById("test_mod").value = testMod;
}
