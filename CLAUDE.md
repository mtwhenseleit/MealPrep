# Meal prep tracker: project context

## Why this exists
I'm a busy professional trying to eat more intentionally to build muscle. I tend to skip breakfast
and buy meal deals for lunch, which are expensive and low in calories. The plan:
- Batch-cook lunches (e.g. pasta) and dinners (slow cooker or big pot, freezer-friendly, served with
  rice, pasta or potatoes cooked on the night).
- Make breakfast zero-effort (overnight oats, shakes, boiled eggs).
- Keep bulk-bought high-protein snacks around (biltong, skyr, whey, nuts, protein bars).
- Rough protein target: 1.6–2.2g per kg of bodyweight a day, with a small calorie surplus.
- One ~90-minute cooking session on Sundays should cover most of the week.

## What the app is
A static site: `index.html` (all HTML/CSS/JS) plus `recipes.js` (data). No build step, no
dependencies. Opens by double-clicking `index.html`; can be hosted on GitHub Pages.
- Recipes tab: cards with protein and kcal per portion, filterable by tag. Tapping a card shows
  ingredients (with per-ingredient kcal/protein, batch total and per-portion figures) and the method.
- Shopping list tab: tick recipes for the week; ingredients are merged by item + unit, grouped by
  aisle, with `staple: true` items listed separately under "Check the cupboard".
- "This week" picks and ticked items are saved in localStorage (per browser).

## Recipe data (recipes.js)
Each recipe has: `id`, `name`, `tag` (Breakfast | Lunch | Dinner | Snack), `emoji`, `image`
(optional path in `images/`), `portions`, `storage`, optional `serveWith`, `ingredients`, `method`.
Each ingredient has: `qty`, `unit` ("g", "ml", "tbsp", "tsp", or "" for a count), `item`, `aisle`
(Fruit & veg | Meat & fish | Dairy & eggs | Frozen | Cupboard), `kcal` and `protein` for THAT
quantity, and optional `staple: true`.
Macros are typical UK supermarket label values; treat them as close estimates. The carb a dinner is
served with is not included in its macros.

Current recipes: chicken pesto pasta (lunch, 5 portions), beef and bean chilli (dinner, 6),
protein overnight oats (breakfast, 5).

## Next steps
Work through more recipes one at a time, extracting ingredients into `recipes.js` and adding photos
to `images/`.

## How I like to work
- UK context: British English, UK supermarkets and products, metric units.
- Show how numbers are calculated, not just the result.
- I can read explicit Python/JS but find comprehensions and clever shortcuts hard to follow, so prefer
  plain, readable code and explain what you changed.
- Keep the app simple; don't add features or complexity unless I ask.
