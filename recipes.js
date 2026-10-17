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
    image: "images/slow-cooker-chicken-tikka-masala.jpg",
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
  },
  {
    id: "slow-cooked-beef-ragu",
    name: "Slow-cooked beef ragu",
    tag: "Dinner",
    emoji: "🍝",
    image: "images/slow-cooked-beef-ragu.webp",
    portions: 10,
    storage: "Fridge 3–4 days, freezer 3 months.",
    serveWith: "rigatoni or pasta of choice, plus grated parmesan (not included in the macros)",
    ingredients: [
      { qty: 50, unit: "ml", item: "extra-virgin olive oil", aisle: "Cupboard", kcal: 400, protein: 0, staple: true },
      { qty: 4, unit: "", item: "brown onions, finely diced", aisle: "Fruit & veg", kcal: 160, protein: 4 },
      { qty: 500, unit: "g", item: "large carrots, finely diced", aisle: "Fruit & veg", kcal: 205, protein: 5 },
      { qty: 300, unit: "g", item: "celery stalks, finely diced", aisle: "Fruit & veg", kcal: 48, protein: 2 },
      { qty: 20, unit: "g", item: "garlic cloves, roughly chopped", aisle: "Fruit & veg", kcal: 30, protein: 1 },
      { qty: 1700, unit: "g", item: "beef chuck braising steak, cut into 2cm cubes", aisle: "Meat & fish", kcal: 4250, protein: 340 },
      { qty: 210, unit: "ml", item: "dry red wine", aisle: "Cupboard", kcal: 179, protein: 0, staple: true },
      { qty: 210, unit: "g", item: "tomato paste", aisle: "Cupboard", kcal: 172, protein: 7 },
      { qty: 1170, unit: "ml", item: "tomato passata", aisle: "Cupboard", kcal: 211, protein: 11 },
      { qty: 840, unit: "ml", item: "beef stock", aisle: "Cupboard", kcal: 67, protein: 6, staple: true },
      { qty: 2, unit: "tsp", item: "sea salt flakes", aisle: "Cupboard", kcal: 0, protein: 0, staple: true },
      { qty: 1, unit: "tsp", item: "freshly cracked black pepper", aisle: "Cupboard", kcal: 5, protein: 0, staple: true },
      { qty: 2, unit: "tsp", item: "dried thyme", aisle: "Cupboard", kcal: 6, protein: 0, staple: true },
      { qty: 4, unit: "", item: "bay leaves", aisle: "Cupboard", kcal: 3, protein: 0, staple: true }
    ],
    method: [
      "Warm 50ml olive oil in a deep heavy-based pan with a lid over medium–high heat.",
      "Add 4 diced onions, 500g carrots, 300g celery, and 20g garlic. Cook, stirring, for 3–5 minutes until softened.",
      "Increase heat to high. Add 1700g beef chuck steak cubes and cook, stirring, for 2–3 minutes until sealed all over.",
      "Combine 210ml dry red wine, 210g tomato paste, 1170ml passata, 840ml beef stock, 2 tsp salt, 1 tsp pepper, 2 tsp thyme, and 4 bay leaves. Stir to combine and bring to a gentle simmer.",
      "Cover, reduce heat to lowest setting, and cook for 2.5 hours or until beef is tender enough to shred easily with two forks.",
      "Shred the beef with two forks and stir through the sauce. Serve with your favourite pasta (rigatoni pictured) and grated parmesan."
    ]
  },
  {
    id: "slow-cooker-bolognese",
    name: "Slow cooker bolognese",
    tag: "Lunch",
    emoji: "🍝",
    image: "images/slow-cooker-bolognese.jpg",
    portions: 10,
    storage: "Fridge 3–4 days, freezer 3 months.",
    serveWith: "spaghetti or pasta of choice, plus grated parmesan (not included in the macros)",
    ingredients: [
      { qty: 1250, unit: "g", item: "beef mince (5% fat)", aisle: "Meat & fish", kcal: 1813, protein: 300 },
      { qty: 2000, unit: "g", item: "tinned tomatoes (4 × 400g tins)", aisle: "Cupboard", kcal: 360, protein: 18 },
      { qty: 525, unit: "g", item: "celery stalks, chopped finely", aisle: "Fruit & veg", kcal: 84, protein: 4 },
      { qty: 500, unit: "g", item: "carrots, peeled and chopped finely", aisle: "Fruit & veg", kcal: 205, protein: 5 },
      { qty: 300, unit: "g", item: "onion, peeled and chopped finely", aisle: "Fruit & veg", kcal: 120, protein: 3 },
      { qty: 75, unit: "g", item: "garlic cloves, peeled and crushed", aisle: "Fruit & veg", kcal: 112, protein: 5 },
      { qty: 190, unit: "g", item: "tomato purée", aisle: "Cupboard", kcal: 156, protein: 6 },
      { qty: 310, unit: "ml", item: "dry red wine", aisle: "Cupboard", kcal: 264, protein: 0, staple: true },
      { qty: 5, unit: "", item: "beef stock cubes, crumbled", aisle: "Cupboard", kcal: 16, protein: 2, staple: true },
      { qty: 5, unit: "tsp", item: "dried oregano", aisle: "Cupboard", kcal: 13, protein: 0, staple: true },
      { qty: 8, unit: "", item: "bay leaves", aisle: "Cupboard", kcal: 5, protein: 0, staple: true },
      { qty: 2.5, unit: "tbsp", item: "Worcestershire sauce", aisle: "Cupboard", kcal: 21, protein: 0, staple: true },
      { qty: 40, unit: "g", item: "fresh basil, finely chopped", aisle: "Fruit & veg", kcal: 9, protein: 1 },
      { qty: 1, unit: "tsp", item: "salt, to taste", aisle: "Cupboard", kcal: 0, protein: 0, staple: true },
      { qty: 0.5, unit: "tsp", item: "freshly ground black pepper, to taste", aisle: "Cupboard", kcal: 0, protein: 0, staple: true }
    ],
    method: [
      "Put all ingredients (except Worcestershire sauce and fresh basil) into the slow cooker: 1250g beef mince, 2000g tinned tomatoes, 525g celery, 500g carrots, 300g onion, 75g garlic, 190g tomato purée, 310ml red wine, 5 stock cubes, 5 tsp oregano, 8 bay leaves, and salt and pepper to taste.",
      "Cook for 6 hours on HIGH or 8 hours on LOW.",
      "Stir in 2.5 tbsp Worcestershire sauce and 40g fresh basil.",
      "If serving with spaghetti: boil the spaghetti for 2–3 minutes less than usual cooking time. Drain and add to the bolognese sauce with a splash or two of reserved pasta water. Stir well and allow the pasta to absorb the sauce and soften.",
      "Serve with grated parmesan cheese."
    ]
  },
  {
    id: "butternut-squash-soup-chilli",
    name: "Butternut squash soup with chilli & crème fraîche",
    tag: "Lunch",
    emoji: "🎃",
    image: "images/butternut-squash-soup.jpg",
    portions: 8,
    storage: "Fridge 3–4 days, freezer 3 months.",
    ingredients: [
      // 1kg × 2 = 2000g. Butternut squash ~40 kcal/100g, 1.2g protein/100g. 20 × 40 = 800 kcal, 20 × 1.2 = 24g
      { qty: 2000, unit: "g", item: "butternut squash, peeled and deseeded", aisle: "Fruit & veg", kcal: 800, protein: 24 },
      // 2 tbsp × 2 = 4 tbsp (60ml). Olive oil ~120 kcal/tbsp. 4 × 120 = 480 kcal
      { qty: 4, unit: "tbsp", item: "olive oil", aisle: "Cupboard", kcal: 480, protein: 0, staple: true },
      // 1 tbsp × 2 = 2 tbsp (28g). Butter ~717 kcal/100g. 28g × 7.17 = 200 kcal
      { qty: 2, unit: "tbsp", item: "butter", aisle: "Dairy & eggs", kcal: 200, protein: 0 },
      // 2 onions × 2 = 4. Matches the chilli recipe (2 onions = 80 kcal, 2g protein). 4 × 40 = 160 kcal, 4g protein
      { qty: 4, unit: "", item: "onions, diced", aisle: "Fruit & veg", kcal: 160, protein: 4 },
      // 1 clove × 2 = 2 cloves (~10g). Matches the garlic rate in the chilli recipe (~1.5 kcal/g). 10 × 1.5 = 15 kcal, ~1g protein
      { qty: 2, unit: "", item: "garlic cloves, thinly sliced", aisle: "Fruit & veg", kcal: 15, protein: 1 },
      // 2 chillies × 2 = 4. Matches red chilli peppers in the chilli recipe (2 = 40 kcal, 2g protein). 4 × 20 = 80 kcal, 4g protein
      { qty: 4, unit: "", item: "mild red chillies, deseeded and chopped", aisle: "Fruit & veg", kcal: 80, protein: 4 },
      // 850ml × 2 = 1700ml. Stock ~2 kcal/100ml. 17 × 2 = 34 kcal, ~0.1g protein/100ml = 2g
      { qty: 1700, unit: "ml", item: "vegetable stock", aisle: "Cupboard", kcal: 34, protein: 2, staple: true },
      // 4 tbsp × 2 = 8 tbsp (~120g, 15g per tbsp). Full-fat crème fraîche ~193 kcal/100g, 2.1g protein/100g. 120g: 232 kcal, 2.5g protein (rounded to 3)
      { qty: 8, unit: "tbsp", item: "crème fraîche", aisle: "Dairy & eggs", kcal: 232, protein: 3 }
    ],
    method: [
      "Heat the oven to 200°C (180°C fan, gas 6). Cut the 2kg squash into large cubes, about 4cm across. Toss in a large roasting tin (or two) with 2 tbsp of the olive oil, then roast for 30 minutes, turning once, until golden and soft.",
      "While the squash roasts, melt the 2 tbsp butter with the remaining 2 tbsp olive oil in a large saucepan. Add the 4 onions, 2 garlic cloves, and 3 of the 4 chopped chillies. Cover and cook on very low heat for 15–20 minutes, until the onions are completely soft.",
      "Add the roasted squash, 1700ml hot vegetable stock, and 8 tbsp crème fraîche to the pan. Blend with a stick blender until smooth. For a silkier soup, blend in a liquidiser in batches instead.",
      "Return the soup to the pan, reheat gently, and season to taste.",
      "Let the soup cool, then divide between 8 containers. Serve with a swirl of crème fraîche and a sprinkle of the reserved chopped chilli (1 chilli)."
    ]
  },
  {
    id: "leek-and-potato-soup",
    name: "Leek and potato soup",
    tag: "Lunch",
    emoji: "🍲",
    image: "images/leek-and-potato-soup.webp",
    portions: 12,
    storage: "Fridge 3–4 days, freezer 3 months (freeze before adding the milk if you can).",
    serveWith: "chunky bread or cheese on toast (not included in the macros)",
    ingredients: [
      // 3 tbsp, 1 tbsp ≈ 120 kcal. 3 × 120 = 360 kcal
      { qty: 3, unit: "tbsp", item: "vegetable oil", aisle: "Cupboard", kcal: 360, protein: 0, staple: true },
      // 1800g. Leeks ~30 kcal/100g, 1.5g protein/100g. 18 × 30 = 540 kcal, 18 × 1.5 = 27g
      { qty: 1800, unit: "g", item: "leeks, washed and sliced", aisle: "Fruit & veg", kcal: 540, protein: 27 },
      // 3 onions. Matches the chilli recipe (2 onions = 80 kcal, 2g protein). 3 × 40 = 120 kcal, 3g protein
      { qty: 3, unit: "", item: "onions, roughly chopped", aisle: "Fruit & veg", kcal: 120, protein: 3 },
      // 1350g. Potatoes ~75 kcal/100g, 2g protein/100g. 13.5 × 75 = 1013 kcal, 13.5 × 2 = 27g
      { qty: 1350, unit: "g", item: "potatoes, cut into 1–2cm cubes", aisle: "Fruit & veg", kcal: 1013, protein: 27 },
      // 3 tsp. Matches the thyme in the ragu (2 tsp = 6 kcal). 3 × 3 = 9 kcal
      { qty: 3, unit: "tsp", item: "dried thyme", aisle: "Cupboard", kcal: 9, protein: 0, staple: true },
      // 3.6 litres = 3600ml. Vegetable stock ~2 kcal/100ml, ~0.1g protein/100ml. 36 × 2 = 72 kcal, 36 × 0.1 = 3.6g (rounded to 4)
      { qty: 3600, unit: "ml", item: "vegetable stock", aisle: "Cupboard", kcal: 72, protein: 4, staple: true },
      // 600ml semi-skimmed milk. ~47 kcal/100ml, 3.4g protein/100ml. 6 × 47 = 282 kcal, 6 × 3.4 = 20g
      { qty: 600, unit: "ml", item: "semi-skimmed milk", aisle: "Dairy & eggs", kcal: 282, protein: 20 },
      // ~10g chives (about one pack). Chives ~30 kcal/100g. 10 × 0.3 = 3 kcal
      { qty: 10, unit: "g", item: "fresh chives, chopped", aisle: "Fruit & veg", kcal: 3, protein: 0 },
      // 1 tsp estimate for "season generously". Salt has no calories
      { qty: 1, unit: "tsp", item: "sea salt", aisle: "Cupboard", kcal: 0, protein: 0, staple: true },
      // 1 tsp estimate. Black pepper ~5 kcal/tsp (matches the ragu and chilli recipes)
      { qty: 1, unit: "tsp", item: "freshly ground black pepper", aisle: "Cupboard", kcal: 5, protein: 0, staple: true }
    ],
    method: [
      "Heat 3 tbsp oil in a large saucepan. Add the 1800g leeks, 3 chopped onions, and 1350g potatoes. Stir well to coat everything and cook for 3–4 minutes.",
      "Add 3 tsp dried thyme, 3.6 litres vegetable stock, 1 tsp sea salt and 1 tsp black pepper. Bring to a simmer.",
      "Simmer gently, uncovered, for 25–30 minutes until the potatoes are soft.",
      "Blend until smooth with a stick blender, or in a liquidiser in batches.",
      "Stir in the 600ml milk and bring back to a simmer. Taste and add more salt and pepper if needed.",
      "Serve in bowls topped with the chopped chives, plus a swirl of milk or cream if you like. To store, let the soup cool and portion into containers."
    ]
  }
];
