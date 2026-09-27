// =============================================================
// MEAL PREP RECIPES
// This is the only file you (or Claude) need to edit to add recipes.
//
// Each recipe:
//   id        unique short name, no spaces (e.g. "chicken-pesto-pasta")
//   name      display name
//   tag       "Breakfast" | "Lunch" | "Dinner" | "Snack"
//   emoji     shown when there's no photo
//   image     optional path to a photo in the images folder, e.g. "images/pesto-pasta.jpg"
//   portions  how many portions the batch makes
//   storage   short note on fridge/freezer life
//   serveWith optional note on what to serve it with (not counted in macros)
//   ingredients: list of
//       qty, unit ("g", "ml", "tbsp", "tsp", or "" for a count),
//       item, aisle (used to group the shopping list),
//       kcal and protein (g) for THAT quantity (from typical label values),
//       staple: true for cupboard items you usually have (oil, spices)
//   method    list of steps
//
// Macros per portion are calculated by the app: sum of ingredients / portions.
// =============================================================

window.RECIPES = [
  {
    id: "chicken-pesto-pasta",
    name: "Chicken pesto pasta",
    tag: "Lunch",
    emoji: "🍝",
    image: "",
    portions: 5,
    storage: "Fridge 3–4 days, freezer 3 months",
    ingredients: [
      { qty: 500, unit: "g", item: "dried penne", aisle: "Cupboard", kcal: 1780, protein: 65 },
      { qty: 1000, unit: "g", item: "diced chicken breast", aisle: "Meat & fish", kcal: 1060, protein: 240 },
      { qty: 190, unit: "g", item: "green pesto (1 jar)", aisle: "Cupboard", kcal: 855, protein: 9 },
      { qty: 50, unit: "g", item: "parmesan", aisle: "Dairy & eggs", kcal: 200, protein: 18 },
      { qty: 200, unit: "g", item: "baby spinach", aisle: "Fruit & veg", kcal: 50, protein: 6 },
      { qty: 250, unit: "g", item: "cherry tomatoes", aisle: "Fruit & veg", kcal: 45, protein: 2 },
      { qty: 1, unit: "tbsp", item: "olive oil", aisle: "Cupboard", kcal: 120, protein: 0, staple: true }
    ],
    method: [
      "Boil the pasta in salted water for 1 minute less than the pack says. Drain, keeping a mug of the water.",
      "Meanwhile, fry the chicken in the oil over a high heat for 8–10 minutes until cooked through.",
      "Halve the tomatoes and add them to the chicken for 2 minutes, then stir in the spinach until it wilts.",
      "Tip the pasta into the pan with the pesto and a splash of the pasta water. Stir until glossy.",
      "Grate over the parmesan, split into 5 containers and let it cool before the lids go on."
    ]
  },
  {
    id: "beef-chilli",
    name: "Beef and bean chilli",
    tag: "Dinner",
    emoji: "🌶️",
    image: "",
    portions: 6,
    storage: "Fridge 3 days, freezer 3 months",
    serveWith: "rice, a jacket potato or wraps (not included in the macros)",
    ingredients: [
      { qty: 1000, unit: "g", item: "5% fat beef mince", aisle: "Meat & fish", kcal: 1250, protein: 210 },
      { qty: 2, unit: "", item: "onions", aisle: "Fruit & veg", kcal: 120, protein: 3 },
      { qty: 2, unit: "", item: "red peppers", aisle: "Fruit & veg", kcal: 90, protein: 3 },
      { qty: 3, unit: "", item: "garlic cloves", aisle: "Fruit & veg", kcal: 15, protein: 1 },
      { qty: 2, unit: "", item: "tins chopped tomatoes (400g)", aisle: "Cupboard", kcal: 170, protein: 9 },
      { qty: 2, unit: "", item: "tins kidney beans (400g)", aisle: "Cupboard", kcal: 480, protein: 34 },
      { qty: 2, unit: "tbsp", item: "tomato purée", aisle: "Cupboard", kcal: 25, protein: 1 },
      { qty: 1, unit: "", item: "beef stock cube", aisle: "Cupboard", kcal: 15, protein: 1, staple: true },
      { qty: 1, unit: "tbsp", item: "olive oil", aisle: "Cupboard", kcal: 120, protein: 0, staple: true },
      { qty: 3, unit: "tbsp", item: "chilli powder, cumin and smoked paprika (1 each)", aisle: "Cupboard", kcal: 30, protein: 1, staple: true }
    ],
    method: [
      "Chop the onions, peppers and garlic.",
      "Brown the mince in a large pan in batches, then set aside.",
      "Soften the onions and peppers in the oil for 5 minutes, then add the garlic and spices for 1 minute.",
      "Add the mince, tomatoes, drained beans, purée and crumbled stock cube with 200ml water.",
      "Simmer with the lid half on for 45 minutes, or slow cook on low for 6–8 hours.",
      "Cool, portion into 6 containers and freeze what you won't eat in 3 days."
    ]
  },
  {
    id: "protein-overnight-oats",
    name: "Protein overnight oats",
    tag: "Breakfast",
    emoji: "🥣",
    image: "",
    portions: 5,
    storage: "Fridge up to 4 days",
    ingredients: [
      { qty: 250, unit: "g", item: "porridge oats", aisle: "Cupboard", kcal: 950, protein: 33 },
      { qty: 750, unit: "ml", item: "semi-skimmed milk", aisle: "Dairy & eggs", kcal: 375, protein: 25 },
      { qty: 150, unit: "g", item: "whey protein", aisle: "Cupboard", kcal: 600, protein: 120 },
      { qty: 400, unit: "g", item: "frozen mixed berries", aisle: "Frozen", kcal: 200, protein: 5 }
    ],
    method: [
      "Add 50g oats and 30g whey to each of 5 jars.",
      "Pour 150ml milk into each and stir well so the whey doesn't clump.",
      "Top each with a handful of frozen berries. They defrost overnight.",
      "Lid on, fridge, grab one each morning."
    ]
  }
];
