const myRecipes = [{
  id: 1,
  name: "Pasta och Köttfärssås",
  description: "Köttfärssås och pasta",
  ingredients: ["spaghetti", "köttfärs", "Krossade tomater", "lök", "vitlök"],
  instructions: [
    "Koka valfri pasta", 
    "fräs köttfärs, lök och vitlök",
    "Tillsätt tomatpure och chiliflakes, fräst 1-2 min",
    "häll i krossade tomater, ev. grädde",
    "Krydda med salt, peppar, oregano" 
  ],
  category: "Pasta",
  imagePath: "../images/spaghetti_och_kottfarssas.jpg",
},

{
  id: 2,
  name: "Champinjon pasta",
  description: "Enkel krämig pasta sås med champinjoner och grönsaker",
  ingredients: ["Pasta", "Champinjoner", "Paprika", "Creme Fraiche vitlök Parmesan", "Grädde", "Salt", "svartpeppar"],
  instructions: [
    "Dela champinjoner i lagom stora bitar", 
    "hacka grönsaker, ta vad du känner för", 
    "Fräs champinjoner och grönsaker", 
    "Koka upp vatten till pasta",
    "Häll i grädden och creme fraiche",
    "Ha i kryddor du känner för, exempelvis oregano",
    "Smaka av med salt och peppar" 
  ],
  category: "Pasta",
  imagePath: "../images/spaghetti_och_kottfarssas.jpg",
},

];

export const addRecipe = () => {

}

export const getAllRecipes = () => {
  return myRecipes;
}