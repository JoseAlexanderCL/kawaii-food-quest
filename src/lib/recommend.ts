import { assistedQuestions, foodCategories, FoodCategory } from "@/data/questions";

export type CategoryId = (typeof foodCategories)[number]["id"];

export const EXCLUDE_MAP: Record<string, CategoryId[]> = {
  "no-mariscos": ["marisqueria", "peruana", "nikkei", "japonesa"],
  "no-picante": ["mexicana", "tailandesa", "india", "coreana"],
  "no-carne-roja": ["parrilla", "alemana", "brasilena", "americana"],
  "no-frito": ["completos", "sanguches", "americana", "pizzeria", "venezolana"],
  "no-sopas": ["chilena-tradicional", "marisqueria", "mapuche", "japonesa"],
};

// Extra weights for thematic boosts based on certain answers
export const BOOSTS: Record<string, Partial<Record<CategoryId, number>>> = {
  picante: { mexicana: 1, tailandesa: 1, india: 1, coreana: 1 },
  comfort: { "chilena-tradicional": 1, picadas: 1, italiana: 1, americana: 1 },
  aventurero: { nikkei: 1, autor: 1, tailandesa: 1, coreana: 1, mapuche: 1 },
  saludable: { saludable: 1, veggie: 1, japonesa: 1, peruana: 1 },
  celebrando: { parrilla: 1, marisqueria: 1, autor: 1, brasilena: 1, francesa: 1 },
  dulce: { pasteleria: 1, brunch: 1 },
  "costa-citrico": { marisqueria: 1, peruana: 1, nikkei: 1 },
  "fuego-humo": { parrilla: 1, americana: 1, brasilena: 1, alemana: 1 },
  "tour-asia": { china: 1, japonesa: 1, coreana: 1, tailandesa: 1, india: 1 },
  "calle-antojo": {
    sanguches: 1,
    completos: 1,
    mexicana: 1,
    venezolana: 1,
    turca: 1,
    arabe: 1,
    pizzeria: 1,
  },
  "dulce-brunch": { pasteleria: 1, brunch: 1, saludable: 0.5, veggie: 0.5 },
  rapido: { sanguches: 1, completos: 1, pizzeria: 1, pasteleria: 1 },
  compartir: { espanola: 1, arabe: 1, turca: 1, coreana: 1, mexicana: 1 },
  "manteles-largos": { autor: 1, francesa: 1, nikkei: 1, japonesa: 1 },
  tenedor: { "chilena-tradicional": 1, italiana: 1, alemana: 1, parrilla: 1 },
  ligero: { saludable: 1, veggie: 1, peruana: 1, marisqueria: 1, nikkei: 1 },
};

const DAIRY_CATEGORIES: CategoryId[] = [
  "italiana",
  "pizzeria",
  "pasteleria",
  "brunch",
  "francesa",
];

/**
 * Recommend top 3 categories based on user selected options.
 * Applies base scoring, thematic boosts, exclusions and a soft ban on dairy.
 */
export function recommendTop3(selectedOptions: string[]): FoodCategory[] {
  const scores: Record<CategoryId, number> = {};
  const excluded = new Set<CategoryId>();

  selectedOptions.forEach((optionId) => {
    // Base scores from question option categories
    assistedQuestions.forEach((question) => {
      const option = question.options.find((o) => o.id === optionId);
      if (option) {
        option.categories.forEach((cat) => {
          const id = cat as CategoryId;
          scores[id] = (scores[id] || 0) + 1;
        });
      }
    });

    // Apply thematic boosts
    const boost = BOOSTS[optionId];
    if (boost) {
      Object.entries(boost).forEach(([cat, value]) => {
        const id = cat as CategoryId;
        scores[id] = (scores[id] || 0) + value!;
      });
    }

    // Collect exclusions
    const toExclude = EXCLUDE_MAP[optionId];
    if (toExclude) {
      toExclude.forEach((c) => excluded.add(c));
    }
  });

  // Soft ban for dairy heavy categories
  if (selectedOptions.includes("no-lacteos")) {
    DAIRY_CATEGORIES.forEach((cat) => {
      scores[cat] = (scores[cat] || 0) - 2; // Penalty instead of exclusion
    });
  }

  // Build final sorted list excluding hard bans
  const ranked = foodCategories
    .filter((cat) => !excluded.has(cat.id as CategoryId))
    .map((cat) => ({ cat, score: scores[cat.id as CategoryId] || 0 }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.cat);

  return ranked;
}

export default recommendTop3;
