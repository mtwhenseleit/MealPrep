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
    id: "classic-overnight-oats",
    name: "Classic overnight oats with chia",
    tag: "Breakfast",
    emoji: "🥣",
    image: "",
    portions: 5,
    storage: "Fridge up to 5 days",
    ingredients: [
      { qty: 250, unit: "g", item: "whole rolled oats", aisle: "Cupboard", kcal: 950, protein: 33 },
      { qty: 50, unit: "g", item: "chia seeds", aisle: "Cupboard", kcal: 240, protein: 12 },
      { qty: 330, unit: "ml", item: "almond milk (unsweetened)", aisle: "Dairy & eggs", kcal: 50, protein: 1 },
      { qty: 2, unit: "tbsp", item: "maple syrup", aisle: "Cupboard", kcal: 104, protein: 0, staple: true },
      { qty: 0.25, unit: "tsp", item: "salt", aisle: "Cupboard", kcal: 0, protein: 0, staple: true }
    ],
    method: [
      "Set out 5 jars or containers with lids.",
      "Add 50g oats and 10g chia seeds to each jar.",
      "Divide the 2 tbsp maple syrup between all 5 jars (roughly 1.2 tsp per jar) and stir well.",
      "Pour 66ml almond milk into each jar and stir thoroughly so the chia doesn't clump.",
      "Add a tiny pinch of salt to each.",
      "Cover and refrigerate overnight, or up to 5 days. Stir before eating—if too thick, add a splash of extra milk."
    ]
  },
  {
    id: "apple-pie-overnight-oats",
    name: "Apple pie overnight oats",
    tag: "Breakfast",
    emoji: "🥧",
    image: "",
    portions: 5,
    storage: "Fridge up to 4 days (apples best added fresh before eating)",
    ingredients: [
      { qty: 250, unit: "g", item: "whole rolled oats", aisle: "Cupboard", kcal: 950, protein: 33 },
      { qty: 50, unit: "g", item: "chia seeds", aisle: "Cupboard", kcal: 240, protein: 12 },
      { qty: 330, unit: "ml", item: "almond milk (unsweetened)", aisle: "Dairy & eggs", kcal: 50, protein: 1 },
      { qty: 200, unit: "g", item: "unsweetened applesauce", aisle: "Cupboard", kcal: 104, protein: 0 },
      { qty: 2, unit: "tsp", item: "ground cinnamon", aisle: "Cupboard", kcal: 12, protein: 0, staple: true },
      { qty: 0.5, unit: "tsp", item: "ground nutmeg", aisle: "Cupboard", kcal: 3, protein: 0, staple: true },
      { qty: 0.5, unit: "tsp", item: "ground ginger", aisle: "Cupboard", kcal: 2, protein: 0, staple: true },
      { qty: 1, unit: "tbsp", item: "maple syrup", aisle: "Cupboard", kcal: 52, protein: 0, staple: true },
      { qty: 0.25, unit: "tsp", item: "salt", aisle: "Cupboard", kcal: 0, protein: 0, staple: true }
    ],
    method: [
      "Set out 5 jars or containers with lids.",
      "Add 50g oats and 10g chia seeds to each jar.",
      "Mix together the applesauce (40g per jar), cinnamon (⅖ tsp per jar), nutmeg (⅕ tsp), ginger (⅕ tsp), and 1 tsp maple syrup.",
      "Divide this mixture between the 5 jars and stir well.",
      "Pour 66ml almond milk into each jar and stir thoroughly.",
      "Add a tiny pinch of salt to each.",
      "Cover and refrigerate overnight, or up to 4 days.",
      "To serve, stir well and top with sliced fresh apple if you like, plus a sprinkle of cinnamon."
    ]
  }
];
