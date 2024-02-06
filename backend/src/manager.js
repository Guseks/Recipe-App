const myRecipes = [{
  id: 1,
  name: "Spaghetti Bolognese",
  description: "Classic Italian pasta dish with meat sauce.",
  ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic"],
  instructions: [
    "Cook spaghetti according to package instructions.", 
    "In a separate pan, brown ground beef with onion and garlic.",
    "Add tomato sauce and simmer.", 
    "Serve sauce over cooked spaghetti."
  ],
  category: "Pasta",
},

{
  id: 1,
  name: "Krämig champinjon pasta",
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
},

];

export const addRecipe = () => {

}

export const getAllRecipes = () => {
  return myRecipes;
}