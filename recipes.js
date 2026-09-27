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
    id: "classic-overnight-oats",
    name: "Classic overnight oats with chia",
    tag: "Breakfast",
    emoji: "🥣",
    image: "images/classic-overnight-oats.jpg",
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
    image: "images/apple-pie-overnight-oats.jpg",
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
  },
  {
    id: "peach-crisp-overnight-oats",
    name: "Peach crisp overnight oats",
    tag: "Breakfast",
    emoji: "🍑",
    image: "images/peach-crisp-overnight-oats.jpg",
    portions: 5,
    storage: "Fridge up to 4 days (granola best added fresh before eating)",
    ingredients: [
      { qty: 250, unit: "g", item: "whole rolled oats", aisle: "Cupboard", kcal: 950, protein: 33 },
      { qty: 50, unit: "g", item: "chia seeds", aisle: "Cupboard", kcal: 240, protein: 12 },
      { qty: 330, unit: "ml", item: "almond milk (unsweetened)", aisle: "Dairy & eggs", kcal: 50, protein: 1 },
      { qty: 300, unit: "g", item: "fresh or frozen peaches", aisle: "Fruit & veg", kcal: 120, protein: 3 },
      { qty: 100, unit: "g", item: "granola", aisle: "Cupboard", kcal: 440, protein: 10 },
      { qty: 0.25, unit: "tsp", item: "salt", aisle: "Cupboard", kcal: 0, protein: 0, staple: true }
    ],
    method: [
      "Set out 5 jars or containers with lids.",
      "Add 50g oats and 10g chia seeds to each jar.",
      "Divide the peaches between the 5 jars (60g per jar). If using fresh, slice them; if frozen, leave as is.",
      "Pour 66ml almond milk into each jar and stir thoroughly.",
      "Add a tiny pinch of salt to each.",
      "Cover and refrigerate overnight, or up to 4 days.",
      "To serve, stir well and top with a handful of granola (20g per jar) for crunch. Add granola just before eating so it stays crispy."
    ]
  },
  {
    id: "pbj-overnight-oats",
    name: "PB&J overnight oats",
    tag: "Breakfast",
    emoji: "🍓",
    image: "images/pbj-overnight-oats.jpg",
    portions: 5,
    storage: "Fridge up to 4 days",
    ingredients: [
      { qty: 250, unit: "g", item: "whole rolled oats", aisle: "Cupboard", kcal: 950, protein: 33 },
      { qty: 50, unit: "g", item: "chia seeds", aisle: "Cupboard", kcal: 240, protein: 12 },
      { qty: 330, unit: "ml", item: "almond milk (unsweetened)", aisle: "Dairy & eggs", kcal: 50, protein: 1 },
      { qty: 75, unit: "g", item: "creamy peanut butter", aisle: "Cupboard", kcal: 450, protein: 17 },
      { qty: 50, unit: "g", item: "strawberry jam or chia jam", aisle: "Cupboard", kcal: 130, protein: 0 },
      { qty: 0.5, unit: "tbsp", item: "maple syrup", aisle: "Cupboard", kcal: 26, protein: 0, staple: true },
      { qty: 0.25, unit: "tsp", item: "salt", aisle: "Cupboard", kcal: 0, protein: 0, staple: true }
    ],
    method: [
      "Set out 5 jars or containers with lids.",
      "Add 50g oats and 10g chia seeds to each jar.",
      "Divide the peanut butter (15g per jar) and jam (10g per jar) between the jars.",
      "Add 0.1 tbsp (roughly 1 tsp) maple syrup to each jar.",
      "Pour 66ml almond milk into each jar and stir thoroughly, breaking up the peanut butter so it distributes well.",
      "Add a tiny pinch of salt to each.",
      "Cover and refrigerate overnight, or up to 4 days. Stir before eating."
    ]
  },
  {
    id: "chocolate-banana-overnight-oats",
    name: "Chocolate banana bread overnight oats",
    tag: "Breakfast",
    emoji: "🍌",
    image: "images/chocolate-banana-overnight-oats.jpg",
    portions: 5,
    storage: "Fridge up to 4 days",
    ingredients: [
      { qty: 250, unit: "g", item: "whole rolled oats", aisle: "Cupboard", kcal: 950, protein: 33 },
      { qty: 50, unit: "g", item: "chia seeds", aisle: "Cupboard", kcal: 240, protein: 12 },
      { qty: 330, unit: "ml", item: "almond milk (unsweetened)", aisle: "Dairy & eggs", kcal: 50, protein: 1 },
      { qty: 25, unit: "g", item: "unsweetened cocoa powder", aisle: "Cupboard", kcal: 60, protein: 5 },
      { qty: 150, unit: "g", item: "ripe banana", aisle: "Fruit & veg", kcal: 135, protein: 2 },
      { qty: 2, unit: "tsp", item: "ground cinnamon", aisle: "Cupboard", kcal: 12, protein: 0, staple: true },
      { qty: 1, unit: "tbsp", item: "maple syrup", aisle: "Cupboard", kcal: 52, protein: 0, staple: true },
      { qty: 5, unit: "ml", item: "vanilla extract", aisle: "Cupboard", kcal: 12, protein: 0, staple: true },
      { qty: 0.25, unit: "tsp", item: "salt", aisle: "Cupboard", kcal: 0, protein: 0, staple: true }
    ],
    method: [
      "Set out 5 jars or containers with lids.",
      "Add 50g oats and 10g chia seeds to each jar.",
      "Mash the banana into a smooth paste, then divide between the 5 jars (30g per jar).",
      "Divide the cocoa powder (5g per jar), cinnamon (⅖ tsp per jar), maple syrup (1 tsp per jar), and vanilla (1ml per jar) between the jars.",
      "Stir each jar well, making sure the cocoa powder and banana are fully mixed and there are no lumps.",
      "Pour 66ml almond milk into each jar and stir thoroughly.",
      "Add a tiny pinch of salt to each.",
      "Cover and refrigerate overnight, or up to 4 days. Stir before eating—the banana may settle slightly."
    ]
  }
];
