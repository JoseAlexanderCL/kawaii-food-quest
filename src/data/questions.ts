// Daily questions data for the food recommendation app
export interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
}

export interface QuestionOption {
  id: string;
  text: string;
  emoji: string;
  categories: string[];
}

export interface FoodCategory {
  id: string;
  name: string;
  description: string;
  emoji: string;
  dishes: string[];
  image?: string;
}

// Food categories based on the requirements
export const foodCategories: FoodCategory[] = [
  {
    id: 'chilena-tradicional',
    name: 'Chilena Tradicional',
    description: 'Los clásicos que siempre calientan el corazón',
    emoji: '🇨🇱',
    dishes: ['Cazuela', 'Pastel de choclo', 'Porotos con riendas', 'Empanadas']
  },
  {
    id: 'marisqueria',
    name: 'Marisquería/Caleta',
    description: 'Frescos del mar directo a tu mesa',
    emoji: '🦐',
    dishes: ['Paila marina', 'Machas a la parmesana', 'Ceviche', 'Caldillo de congrio']
  },
  {
    id: 'parrilla',
    name: 'Parrilla/Steakhouse',
    description: 'Carnes jugosas a la parrilla',
    emoji: '🥩',
    dishes: ['Asado', 'Bife de chorizo', 'Choripán', 'Provoleta']
  },
  {
    id: 'sanguches',
    name: 'Sánguches y Fuente de Soda',
    description: 'Clásicos de la fuente de soda chilena',
    emoji: '🥪',
    dishes: ['Barros Luco', 'Chacarero', 'Ave Palta', 'Lomito']
  },
  {
    id: 'completos',
    name: 'Completos y Chorrillanas',
    description: 'Los reyes del fast food criollo',
    emoji: '🌭',
    dishes: ['Completo Italiano', 'Chorrillana', 'Completo Dinamita', 'Papas Mayo']
  },
  {
    id: 'picadas',
    name: 'Picadas/Cocina Casera',
    description: 'Como en casa, pero sin cocinar',
    emoji: '🍲',
    dishes: ['Menú del día', 'Guisos caseros', 'Lentejas', 'Estofado']
  },
  {
    id: 'mapuche',
    name: 'Cocina Mapuche/Patagónica',
    description: 'Sabores ancestrales del sur',
    emoji: '🍃',
    dishes: ['Catuto', 'Cordero al palo', 'Sopaipillas', 'Merkén']
  },
  {
    id: 'peruana',
    name: 'Peruana',
    description: 'La explosión de sabores del Perú',
    emoji: '🇵🇪',
    dishes: ['Ceviche', 'Lomo saltado', 'Ají de gallina', 'Anticuchos']
  },
  {
    id: 'nikkei',
    name: 'Nikkei',
    description: 'Fusión peruano-japonesa única',
    emoji: '🍱',
    dishes: ['Tiradito', 'Maki acevichado', 'Causa nikkei', 'Tempura de langostinos']
  },
  {
    id: 'japonesa',
    name: 'Japonesa',
    description: 'Auténtica tradición japonesa',
    emoji: '🍣',
    dishes: ['Sushi', 'Ramen', 'Tempura', 'Yakitori']
  },
  {
    id: 'china',
    name: 'China',
    description: 'Tradiciones culinarias milenarias',
    emoji: '🥢',
    dishes: ['Dim sum', 'Chow mein', 'Pato laqueado', 'Wok de verduras']
  },
  {
    id: 'coreana',
    name: 'Coreana',
    description: 'K-food que conquista paladares',
    emoji: '🍜',
    dishes: ['Korean BBQ', 'Bibimbap', 'Kimchi', 'Bulgogi']
  },
  {
    id: 'tailandesa',
    name: 'Tailandesa',
    description: 'Picante, dulce y aromática',
    emoji: '🌶️',
    dishes: ['Pad Thai', 'Curry rojo', 'Tom Yum', 'Massaman']
  },
  {
    id: 'india',
    name: 'India/Pakistaní',
    description: 'Especias que despiertan los sentidos',
    emoji: '🍛',
    dishes: ['Curry', 'Biryani', 'Naan', 'Tandoori']
  },
  {
    id: 'mexicana',
    name: 'Mexicana',
    description: '¡Viva México y sus sabores!',
    emoji: '🌮',
    dishes: ['Tacos', 'Burritos', 'Quesadillas', 'Guacamole']
  },
  {
    id: 'arabe',
    name: 'Árabe/Levantina',
    description: 'Sabores del Medio Oriente',
    emoji: '🥙',
    dishes: ['Shawarma', 'Falafel', 'Hummus', 'Tabulé']
  },
  {
    id: 'turca',
    name: 'Turca',
    description: 'Puente entre Europa y Asia',
    emoji: '🥙',
    dishes: ['Kebab', 'Dürüm', 'Baklava', 'Döner']
  },
  {
    id: 'italiana',
    name: 'Italiana - Trattoria',
    description: 'Pasta fresca y amor italiano',
    emoji: '🍝',
    dishes: ['Pasta carbonara', 'Lasagna', 'Risotto', 'Gnocchi']
  },
  {
    id: 'pizzeria',
    name: 'Pizzería Napolitana',
    description: 'La vera pizza italiana',
    emoji: '🍕',
    dishes: ['Pizza Margherita', 'Quattro stagioni', 'Prosciutto', 'Calzone']
  },
  {
    id: 'espanola',
    name: 'Española - Tapas',
    description: 'Pequeños platos, grandes sabores',
    emoji: '🥘',
    dishes: ['Paella', 'Jamón ibérico', 'Patatas bravas', 'Gazpacho']
  },
  {
    id: 'francesa',
    name: 'Francesa - Bistró',
    description: 'Elegancia culinaria francesa',
    emoji: '🥖',
    dishes: ['Coq au vin', 'Ratatouille', 'Croissant', 'Bouillabaisse']
  },
  {
    id: 'alemana',
    name: 'Alemana/Cervecería',
    description: 'Tradición bávara con cerveza',
    emoji: '🍺',
    dishes: ['Bratwurst', 'Schnitzel', 'Pretzel', 'Sauerkraut']
  },
  {
    id: 'brasilena',
    name: 'Brasileña - Rodizio',
    description: 'Carnes infinitas del Brasil',
    emoji: '🇧🇷',
    dishes: ['Picanha', 'Feijoada', 'Caipirinha', 'Açaí']
  },
  {
    id: 'venezolana',
    name: 'Venezolana/Colombiana',
    description: 'Sabores tropicales hermanos',
    emoji: '🌴',
    dishes: ['Arepas', 'Patacones', 'Tequeños', 'Bandeja paisa']
  },
  {
    id: 'americana',
    name: 'Americana - BBQ',
    description: 'El sueño americano en tu plato',
    emoji: '🍔',
    dishes: ['Hamburguesa', 'BBQ ribs', 'Mac and cheese', 'Wings']
  },
  {
    id: 'veggie',
    name: 'Veggie/Vegana',
    description: 'Plant-based y delicioso',
    emoji: '🌱',
    dishes: ['Buddha bowl', 'Quinoa', 'Tofu', 'Smoothie bowl']
  },
  {
    id: 'saludable',
    name: 'Saludable/Fit',
    description: 'Nutritivo y sabroso',
    emoji: '🥗',
    dishes: ['Poke bowl', 'Ensaladas', 'Wraps', 'Smoothies']
  },
  {
    id: 'brunch',
    name: 'Brunch y Cafetería',
    description: 'El mejor momento del día',
    emoji: '☕',
    dishes: ['Avocado toast', 'Pancakes', 'Eggs Benedict', 'Café de especialidad']
  },
  {
    id: 'pasteleria',
    name: 'Pastelería/Heladería',
    description: 'Dulces tentaciones',
    emoji: '🍰',
    dishes: ['Torta', 'Helado artesanal', 'Macarons', 'Brownies']
  },
  {
    id: 'autor',
    name: 'Cocina de Autor',
    description: 'Arte culinario en cada plato',
    emoji: '👨‍🍳',
    dishes: ['Tasting menu', 'Molecular gastronomy', 'Fusion creativa', 'Experiencia única']
  }
];

// Daily questions - in a real app, these would rotate daily
export const dailyQuestions: Question[] = [
  {
    id: 'main-preference',
    text: '¿Qué te provoca hoy?',
    options: [
      {
        id: 'carne',
        text: 'Carne',
        emoji: '🥩',
        categories: ['parrilla', 'chilena-tradicional', 'alemana', 'brasilena', 'americana']
      },
      {
        id: 'mariscos',
        text: 'Mariscos',
        emoji: '🦐',
        categories: ['marisqueria', 'peruana', 'nikkei', 'japonesa']
      },
      {
        id: 'vegetariano',
        text: 'Vegetariano',
        emoji: '🌱',
        categories: ['veggie', 'saludable', 'india', 'tailandesa']
      },
      {
        id: 'tradicional',
        text: 'Comida tradicional',
        emoji: '🍲',
        categories: ['chilena-tradicional', 'mapuche', 'picadas']
      },
      {
        id: 'internacional',
        text: 'Algo internacional',
        emoji: '🌍',
        categories: ['japonesa', 'italiana', 'mexicana', 'china', 'coreana', 'tailandesa', 'india', 'arabe', 'francesa']
      },
      {
        id: 'rapido',
        text: 'Algo rápido',
        emoji: '⚡',
        categories: ['sanguches', 'completos', 'americana', 'pizzeria']
      }
    ]
  },
  {
    id: 'pololo-preference',
    text: '¿Cuánto amas a tu pololo?',
    options: [
      {
        id: 'infinito',
        text: 'Infinito :DD',
        emoji: '💕',
        categories: ['autor', 'francesa', 'italiana', 'japonesa', 'nikkei']
      },
      {
        id: 'mucho',
        text: 'Mucho :)',
        emoji: '💖',
        categories: ['parrilla', 'marisqueria', 'brasilena', 'espanola', 'peruana']
      },
      {
        id: 'poquito',
        text: 'Poquito :/',
        emoji: '💛',
        categories: ['sanguches', 'completos', 'picadas', 'americana', 'pizzeria']
      },
      {
        id: 'nada',
        text: 'Nada :(',
        emoji: '💔',
        categories: ['veggie', 'saludable', 'brunch', 'pasteleria']
      }
    ]
  },
  {
    id: 'mood-preference',
    text: '¿Cómo te sientes hoy?',
    options: [
      {
        id: 'picante',
        text: 'Con ganas de picante',
        emoji: '🌶️',
        categories: ['mexicana', 'tailandesa', 'india', 'coreana']
      },
      {
        id: 'comfort',
        text: 'Necesito comfort food',
        emoji: '🤗',
        categories: ['chilena-tradicional', 'picadas', 'italiana', 'americana']
      },
      {
        id: 'aventurero',
        text: 'Aventurero/a',
        emoji: '🎭',
        categories: ['nikkei', 'autor', 'tailandesa', 'coreana', 'mapuche']
      },
      {
        id: 'saludable',
        text: 'Cuidándome',
        emoji: '💪',
        categories: ['saludable', 'veggie', 'japonesa', 'peruana']
      },
      {
        id: 'celebrando',
        text: 'De celebración',
        emoji: '🎉',
        categories: ['parrilla', 'marisqueria', 'autor', 'brasilena', 'francesa']
      },
      {
        id: 'dulce',
        text: 'Antojado/a de dulce',
        emoji: '🍰',
        categories: ['pasteleria', 'brunch']
      }
    ]
  }
];

// Function to get today's question (simulated daily rotation)
export const getTodaysQuestion = (): Question => {
  const today = new Date().getDay(); // 0-6 (Sunday-Saturday)
  return dailyQuestions[today % dailyQuestions.length];
};

// Questions for the assisted mode flow (pololo question + extra questions)
export const assistedQuestions: Question[] = [
  dailyQuestions[1],
  {
    id: 'aventura',
    text: '¿Qué aventura culinaria te hace ojitos hoy? (｡◕‿◕｡)',
    options: [
      {
        id: 'abrazo-casero',
        text: 'Abracito casero (calorcito + cariñito) 🧣',
        emoji: '🧣',
        categories: ['chilena-tradicional', 'picadas', 'italiana', 'espanola']
      },
      {
        id: 'costa-citrico',
        text: 'Brisa de mar con limoncito 🍋🌊',
        emoji: '🌊',
        categories: ['marisqueria', 'peruana', 'nikkei']
      },
      {
        id: 'fuego-humo',
        text: 'Modo dragóncito 🔥 (ahumado rico)',
        emoji: '🔥',
        categories: ['parrilla', 'americana', 'brasilena', 'alemana']
      },
      {
        id: 'tour-asia',
        text: 'Pasaporte a Asia ✈️🍜',
        emoji: '🧭',
        categories: ['china', 'japonesa', 'coreana', 'tailandesa', 'india']
      },
      {
        id: 'calle-antojo',
        text: 'Paseíto callejero (ñam express) 🚶',
        emoji: '🚶',
        categories: ['sanguches', 'completos', 'mexicana', 'venezolana', 'turca', 'arabe', 'pizzeria']
      },
      {
        id: 'dulce-brunch',
        text: 'Dulcecito & brunchito (mimi break) 🍰',
        emoji: '🍰',
        categories: ['pasteleria', 'brunch', 'saludable', 'veggie']
      }
    ]
  },
  {
    id: 'formato',
    text: '¿Cómo quieren vivir este antojito hoy? ✨',
    options: [
      {
        id: 'rapido',
        text: '¡Rápido-rápido! (tengo hambrita) ⏱️',
        emoji: '⏱️',
        categories: ['sanguches', 'completos', 'pizzeria', 'pasteleria']
      },
      {
        id: 'compartir',
        text: 'Para picotear juntitos 🧑‍🤝‍🧑',
        emoji: '🧑‍🤝‍🧑',
        categories: ['espanola', 'arabe', 'turca', 'coreana', 'mexicana']
      },
      {
        id: 'manteles-largos',
        text: 'Plan elegante (wow wow) ✨',
        emoji: '✨',
        categories: ['autor', 'francesa', 'nikkei', 'japonesa']
      },
      {
        id: 'tenedor',
        text: 'Plato apañador (tenedor poderoso) 🍽️',
        emoji: '🍽️',
        categories: ['chilena-tradicional', 'italiana', 'alemana', 'parrilla']
      },
      {
        id: 'ligero',
        text: 'Ligero & fresco (panza feliz) 🌿',
        emoji: '🌿',
        categories: ['saludable', 'veggie', 'peruana', 'marisqueria', 'nikkei']
      }
    ]
  },
  {
    id: 'no-quiero',
    text: 'Cuéntame un “no-no” de hoy 🙈 (opcional)',
    options: [
      { id: 'no-mariscos', text: 'Sin marisquitos hoy, porfi 🐟', emoji: '🐟', categories: [] },
      { id: 'no-picante', text: 'Sin picantito, soy sensible 🌶️💧', emoji: '🌶️', categories: [] },
      { id: 'no-carne-roja', text: 'Hoy sin carnita roja 🥩🚫', emoji: '🥩', categories: [] },
      { id: 'no-frito', text: 'Evitemos lo muy frito 🍳', emoji: '🍳', categories: [] },
      { id: 'no-lacteos', text: 'Sin lácteos (barriguita sensible) 🥛', emoji: '🥛', categories: [] },
      { id: 'no-sopas', text: 'Nada muy caldoso hoy 🥣', emoji: '🥣', categories: [] },
      { id: 'sin-restriccion', text: 'Todo vale, ¡sorpréndeme! ✨', emoji: '🙅', categories: [] }
    ]
  }
];

// Function to get random categories based on user selections
export const getRecommendedCategories = (selectedOptions: string[]): FoodCategory[] => {
  const allCategories: string[] = [];

  selectedOptions.forEach(optionId => {
    assistedQuestions.forEach(question => {
      const option = question.options.find(opt => opt.id === optionId);
      if (option) {
        allCategories.push(...option.categories);
      }
    });
  });

  // Remove duplicates and get random selection
  const uniqueCategories = [...new Set(allCategories)];
  const shuffled = uniqueCategories.sort(() => 0.5 - Math.random());
  const selectedCategoryIds = shuffled.slice(0, Math.min(3, shuffled.length));
  
  return selectedCategoryIds.map(id => 
    foodCategories.find(cat => cat.id === id)
  ).filter(Boolean) as FoodCategory[];
};