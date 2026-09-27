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
  },
  {
    id: "slow-cooker-chilli-con-carne",
    name: "Slow cooker chilli con carne",
    tag: "Dinner",
    emoji: "🌶️",
    image: "images/slow-cooker-chilli-con-carne.jpg",
    portions: 10,
    storage: "Fridge 3 days, freezer 3 months. Slow cooked on low for 8 hours (or high for 4 hours).",
    serveWith: "rice or bread (not included in the macros)",
    ingredients: [
      { qty: 835, unit: "g", item: "beef mince (5% fat)", aisle: "Meat & fish", kcal: 1211, protein: 200 },
      { qty: 800, unit: "g", item: "chopped tomatoes canned (2 tins 400g)", aisle: "Cupboard", kcal: 144, protein: 7 },
      { qty: 500, unit: "g", item: "kidney beans canned, drained", aisle: "Cupboard", kcal: 500, protein: 40 },
      { qty: 2, unit: "", item: "large white onions", aisle: "Fruit & veg", kcal: 80, protein: 2 },
      { qty: 2, unit: "", item: "red peppers", aisle: "Fruit & veg", kcal: 62, protein: 2 },
      { qty: 20, unit: "g", item: "garlic cloves minced", aisle: "Fruit & veg", kcal: 30, protein: 1 },
      { qty: 100, unit: "g", item: "tomato paste", aisle: "Cupboard", kcal: 82, protein: 3 },
      { qty: 2, unit: "", item: "beef stock cubes", aisle: "Cupboard", kcal: 6, protein: 1, staple: true },
      { qty: 250, unit: "ml", item: "water (for stock)", aisle: "Cupboard", kcal: 0, protein: 0, staple: true },
      { qty: 2, unit: "tsp", item: "dried oregano", aisle: "Cupboard", kcal: 5, protein: 0, staple: true },
      { qty: 4, unit: "tsp", item: "dried coriander", aisle: "Cupboard", kcal: 12, protein: 0, staple: true },
      { qty: 4, unit: "", item: "bay leaves", aisle: "Cupboard", kcal: 3, protein: 0, staple: true },
      { qty: 3, unit: "tsp", item: "ground cumin", aisle: "Cupboard", kcal: 11, protein: 1, staple: true },
      { qty: 3, unit: "tsp", item: "hot chilli powder", aisle: "Cupboard", kcal: 9, protein: 0, staple: true },
      { qty: 2.5, unit: "tsp", item: "sweet paprika", aisle: "Cupboard", kcal: 7, protein: 0, staple: true },
      { qty: 2, unit: "tsp", item: "smoked paprika", aisle: "Cupboard", kcal: 6, protein: 0, staple: true },
      { qty: 2, unit: "tsp", item: "Worcestershire sauce", aisle: "Cupboard", kcal: 5, protein: 0, staple: true },
      { qty: 1, unit: "tsp", item: "dark brown sugar", aisle: "Cupboard", kcal: 19, protein: 0, staple: true },
      { qty: 2, unit: "tsp", item: "salt flakes", aisle: "Cupboard", kcal: 0, protein: 0, staple: true },
      { qty: 1, unit: "tsp", item: "ground black pepper", aisle: "Cupboard", kcal: 5, protein: 0, staple: true },
      { qty: 45, unit: "g", item: "plain flour (wheat or corn)", aisle: "Cupboard", kcal: 164, protein: 5, staple: true },
      { qty: 30, unit: "ml", item: "vegetable oil", aisle: "Cupboard", kcal: 240, protein: 0, staple: true },
      { qty: 2, unit: "", item: "red chilli peppers (optional for extra heat)", aisle: "Fruit & veg", kcal: 40, protein: 2 }
    ],
    method: [
      "Dice the 2 onions and 2 red peppers. Heat 2 tbsp oil in a large pan over medium-high heat.",
      "Add the diced onion and pepper, then add 835g beef mince. Stir through well to break up the meat and brown it (5–7 minutes).",
      "Add the oregano, coriander, cumin, chilli powder, sweet paprika, and smoked paprika to the meat and stir well for 1 minute to toast the spices.",
      "Transfer the browned meat and vegetables to your slow cooker pot.",
      "Mince or finely chop the 20g garlic and finely dice the optional red chilli peppers. Add to the slow cooker.",
      "Stir in 100g tomato paste, 45g flour, 2 tsp salt, 1 tsp black pepper, and 1 tsp brown sugar. Mix well to coat everything.",
      "Dissolve 2 beef stock cubes in 250ml hot water. Pour this stock over the meat and vegetables.",
      "Add 800g chopped tomatoes (2 tins), 500g drained kidney beans, 2 tsp Worcestershire sauce, and 4 bay leaves. Stir well, ensuring everything is covered in liquid.",
      "Cover and cook on low for 8 hours (or on high for 4 hours).",
      "Stir before serving. Remove bay leaves if you can find them. Serve with rice or bread, garnished with fresh coriander if you like."
    ]
  },
  {
    id: "slow-cooker-chicken-tikka-masala",
    name: "Slow cooker chicken tikka masala",
    tag: "Dinner",
    emoji: "🍛",
    image: "",
    portions: 8,
    storage: "Fridge 3 days, freezer 3 months.",
    serveWith: "basmati rice, naan bread and lime wedges (not included in the macros)",
    ingredients: [
      { qty: 3000, unit: "g", item: "boneless, skinless chicken thighs (about 20 thighs, cut into 3 chunks each)", aisle: "Meat & fish", kcal: 3270, protein: 600 },
      { qty: 60, unit: "ml", item: "vegetable or rapeseed oil", aisle: "Cupboard", kcal: 480, protein: 0, staple: true },
      { qty: 2, unit: "", item: "large onions, chopped", aisle: "Fruit & veg", kcal: 160, protein: 4 },
      { qty: 4, unit: "", item: "garlic cloves, crushed", aisle: "Fruit & veg", kcal: 30, protein: 1 },
      { qty: 40, unit: "g", item: "ginger, finely grated or chopped", aisle: "Fruit & veg", kcal: 32, protein: 1 },
      { qty: 90, unit: "g", item: "tikka curry paste", aisle: "Cupboard", kcal: 135, protein: 4 },
      { qty: 1000, unit: "ml", item: "passata (tomato)", aisle: "Cupboard", kcal: 180, protein: 9 },
      { qty: 30, unit: "g", item: "tomato purée", aisle: "Cupboard", kcal: 25, protein: 1 },
      { qty: 30, unit: "ml", item: "malt vinegar", aisle: "Cupboard", kcal: 5, protein: 0, staple: true },
      { qty: 26, unit: "g", item: "light brown soft sugar", aisle: "Cupboard", kcal: 101, protein: 0, staple: true },
      { qty: 2, unit: "", item: "cinnamon sticks", aisle: "Cupboard", kcal: 5, protein: 0, staple: true },
      { qty: 10, unit: "", item: "cardamom pods", aisle: "Cupboard", kcal: 6, protein: 0, staple: true },
      { qty: 200, unit: "ml", item: "double cream", aisle: "Dairy & eggs", kcal: 898, protein: 4 },
      { qty: 20, unit: "g", item: "fresh coriander, chopped", aisle: "Fruit & veg", kcal: 5, protein: 0 }
    ],
    method: [
      "Season the 3000g chicken thighs (about 20 thighs). Heat 60ml oil in a wide frying pan over high heat.",
      "Add chicken in batches (don't overcrowd). Cook until browned (about 3–4 minutes per batch), then transfer to the slow cooker.",
      "Add 2 chopped onions, 4 crushed garlic cloves, and 40g ginger to the pan. Cook for 2–3 minutes until softened. Add a splash of water and scrape up any browned bits from the bottom, then tip into the slow cooker.",
      "Stir in 90g tikka curry paste, 1000ml passata, 30g tomato purée, 30ml malt vinegar, 26g sugar, 2 cinnamon sticks, and 10 cardamom pods. Season well with salt and pepper.",
      "Cover and cook on low for 5–7 hours (or on high for 4–5 hours).",
      "Stir in 200ml double cream and check the seasoning. Cook for another 10–15 minutes until hot. Remove cinnamon sticks if you can find them.",
      "Ladle between bowls and garnish with 20g fresh coriander. Serve with basmati rice, naan bread, and lime wedges."
    ]
  }
];
