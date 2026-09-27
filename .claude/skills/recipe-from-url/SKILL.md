---
name: recipe-from-url
description: Convert a recipe URL into a recipes.js entry with scaled portions and estimated UK supermarket macros
---

# Recipe from URL

Given a recipe URL, fetch it, scale it to batch size, estimate UK supermarket nutrition for each ingredient, and add it to `recipes.js` after your confirmation.

## Step 1: Fetch and parse the recipe

Use WebFetch to retrieve the HTML at the provided URL. Extract:
- Recipe title/name
- Ingredient list with quantities and units (e.g. "200g chicken", "2 onions", "1 tbsp olive oil")
- Method steps
- Source's stated serving count (e.g. "Serves 4")

If parsing fails or the URL does not contain a readable recipe, stop and tell the user.

## Step 2: Confirm batch size

Show the user the recipe title and original serving count. Ask them how many portions to batch-cook this into. Suggest a sensible default based on the original count (e.g. if it serves 4, suggest 6–8 portions; if 2, suggest 5–6). Show the scaling multiplier: "Original serves 2, you want 5 portions → scale each ingredient by 2.5×".

Wait for their input. Do not proceed until they confirm.

## Step 3: Scale and normalise ingredients

For each ingredient in the original recipe:

1. **Multiply the quantity** by the scaling factor. Show the working: "Original: 200g chicken. Scale: 200g × 2.5 = 500g".

2. **Normalise the unit** to one of: `"g"`, `"ml"`, `"tbsp"`, `"tsp"`, or `""` (for a count, e.g. "2 onions" stays as `qty: 2, unit: ""`).
   - If the source says "200ml milk", keep it as `ml`.
   - If it says "1 cup flour", convert to `g` (e.g. 250g for wheat flour; show your assumption).
   - If it says "a pinch of salt", estimate a workable quantity (e.g. 1 tsp) and call it out.

3. **Assign an aisle** from the existing categories: `"Fruit & veg"`, `"Meat & fish"`, `"Dairy & eggs"`, `"Frozen"`, or `"Cupboard"`. Check the existing recipes ([recipes.js:33–100](recipes.js#L33-L100)) for how similar items are categorised.

4. **Estimate kcal and protein** for that ingredient and quantity using typical UK supermarket label values:
   - Look up a common UK brand or average value (e.g. Tesco, Sainsbury's packaging).
   - Work backwards from per-100g figures: if chicken breast is ~165 kcal and 31g protein per 100g, then 500g = 825 kcal and 155g protein. **Always show this calculation** in a comment so the user can sanity-check it.
   - For processed items (pasta, canned beans, pesto), use label values from a typical UK tin/jar.
   - If exact nutrition is hard to find, use a sensible estimate (e.g. olive oil ≈ 120 kcal/tbsp, onion ≈ 40 kcal/100g) and note the source.
   - Write the kcal and protein values for the **quantity used in the batch**, not per 100g.

5. **Flag staples** with `staple: true` if the ingredient is a cupboard basic you'd expect to have (olive oil, spices, stock cubes, salt). Omit the flag for fresh items or things you'd buy specifically for this recipe.

## Step 4: Compile the recipe record

Create a JavaScript object matching the schema in [recipes.js:5–22](recipes.js#L5-L22):

- **id**: a kebab-case slug (e.g. `"thai-green-curry"`). Check the existing ids in `recipes.js` (currently: `chicken-pesto-pasta`, `beef-chilli`, `protein-overnight-oats`) and ensure no collision.
- **name**: the recipe title, in UK English (e.g. "Thai green curry", not "Thai Green Curry" unless that's how it's branded).
- **tag**: infer from the original recipe and the user's context (usually Breakfast, Lunch, Dinner, or Snack; call out your choice for confirmation if it's unclear).
- **emoji**: pick one that represents the dish (🍛 for curry, 🥗 for salad, etc.).
- **image**: **Check the `images/` folder for a file matching the recipe id** (e.g. if id is `"thai-green-curry"`, look for `images/thai-green-curry.jpg`, `.png`, `.webp`, etc.). If a matching image exists, populate this field with that path (e.g. `"images/thai-green-curry.jpg"`). Otherwise, leave as `""` — images can be added by hand later per the README. **Always mention to the user if you found and used an image.**
- **portions**: the batch size the user confirmed in step 2.
- **storage**: a one-line note in the style of existing recipes (e.g. "Fridge 3–4 days, freezer 3 months"). Infer from the dish type if not stated in the source.
- **serveWith** (optional): if the recipe suggests serving with rice, pasta, potatoes, or bread (not counted in the macros), note it here (e.g. `"rice or couscous (not included in the macros)"`). Omit if it's a complete dish.
- **ingredients**: the array you built in step 3, with **comments showing the kcal/protein calculation** for each item. Example:

  ```javascript
  {
    qty: 500,
    unit: "g",
    item: "chicken breast",
    aisle: "Meat & fish",
    kcal: 825,  // 165 kcal/100g × 5 = 825
    protein: 155,  // 31g/100g × 5 = 155g
  }
  ```

- **method**: the original steps, rewritten for the batch quantities and in plain, readable English. Use UK English spellings (e.g. "diced" not "diced", "grill" not "broil"). Example:

  ```javascript
  method: [
    "Boil the 500g pasta in salted water for 10 minutes. Drain, keep a mug of the water.",
    "Meanwhile, fry the 500g chicken in 1 tbsp oil over a high heat for 10 minutes until cooked through.",
    // ... etc
  ]
  ```

## Step 5: Show the draft and wait for confirmation

Display the full recipe object **formatted as it would appear in `recipes.js`** (2-space indent, commas, etc.). Below it, show a summary:

```
Batch size: 6 portions
Per portion: ~230 kcal, ~38g protein
Scaled from: [original title] (originally serves 4)
```

If an image was found and used, mention it: "✓ Image found: `images/recipe-name.jpg`"

Ask the user: "Does this look right? Reply 'yes' to add it to recipes.js, or give me feedback to adjust."

Wait for confirmation. Do not edit any file until they approve.

## Step 6: Write to recipes.js and add image if found

Once confirmed:

1. Read the current `recipes.js` file.
2. Locate the `window.RECIPES = [` line.
3. Add the new recipe object **before the closing `]`**, with a trailing comma (matching the existing format). Preserve the existing header comment block and formatting.
4. If an image was found in Step 4, also stage it for commit (it should already be in `images/`).
5. Write the file and commit to git (if using git).
6. Tell the user: "Recipe added! Open `index.html` in your browser to check it renders correctly. The new recipe should appear in the Recipes tab." If an image was used, add: "The photo is already included in the card." Otherwise: "If the numbers look good or you want to tweak anything (e.g. add a photo path), let me know."

## Notes

- **Show your working**: Every kcal/protein figure should have a visible calculation (comment or explanation in chat).
- **UK context**: Use British English, UK supermarket brands/values, metric units (g, ml, tbsp, tsp). Assume the user has access to UK shops.
- **Readability**: Match the style of the existing recipes — plain, clear code, no comprehensions or clever tricks.
- **Ask if unsure**: If a tag, aisle, or macro estimate is ambiguous, ask the user rather than guessing.
- **Image auto-detection**: Always check `images/` for a file matching the recipe's kebab-case id (any image format: `.jpg`, `.png`, `.webp`). If found, automatically populate the `image` field with the path and tell the user which image was used. This saves manual updates after uploading photos.
