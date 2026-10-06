/**
 * FATTO - Al Forno -
 * Database Central de Variedades del Menu
 * Compartido entre la pagina principal y el gestor de variedades.
 */

// 1. Full Authentic Menu Database
// ==========================================
var MENU_ITEMS = [
  // --- EMPANADAS ---
  {
    id: 'emp-carne-cuchillo',
    name: 'Carne a Cuchillo',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Trozos tiernos de carne vacuna cortada a cuchillo, cebollita de verdeo y especias criollas.',
    badges: ['gourmet', 'favorito']
  },
  {
    id: 'emp-bondiola-bbq',
    name: 'Bondiola BBQ',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Bondiola braseada desmechada con salsa barbacoa ahumada artesanal.',
    badges: ['gourmet', 'favorito']
  },
  {
    id: 'emp-vacio-provoleta',
    name: 'Vacío y Provoleta',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Vacío jugoso al horno con queso provoleta fundido y hierbas.',
    badges: ['gourmet']
  },
  {
    id: 'emp-matambre-pizza',
    name: 'Matambre a la Pizza',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Tierno matambre desmechado con salsa de tomate especial, muzzarella y orégano.',
    badges: ['favorito']
  },
  {
    id: 'emp-carne-picante',
    name: 'Carne Picante',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Carne seleccionada con toque justo de ají picante y pimentón ahumado.',
    badges: ['picante']
  },
  {
    id: 'emp-carne-suave',
    name: 'Carne Suave',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'El clásico argentino con cebollas doradas y condimentos tradicionales.',
    badges: ['favorito']
  },
  {
    id: 'emp-carne-dulce',
    name: 'Carne Dulce',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Receta tradicional con pasas y un sutil toque dulce equilibrado.',
    badges: []
  },
  {
    id: 'emp-pollo-newyork',
    name: 'Pollo New York',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Pechuga tierna combinada con crocante panceta dorada y abundante cheddar.',
    badges: ['gourmet', 'favorito']
  },
  {
    id: 'emp-pollo-mostaza',
    name: 'Pollo a la Mostaza',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Pollo salteado en cremosa salsa suave de mostaza y crema.',
    badges: ['gourmet']
  },
  {
    id: 'emp-pollo-blanca',
    name: 'Pollo con Salsa Blanca',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Pechuga en dados con salsa bechamel suave y gratinada al horno.',
    badges: []
  },
  {
    id: 'emp-pollo-clasica',
    name: 'Pollo',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Pechuga desmenuzada con cebollas dulces y pimientos suaves.',
    badges: []
  },
  {
    id: 'emp-cheeseburger',
    name: 'Cheeseburger',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Carne de hamburguesa sazonada, queso cheddar fundido y panceta.',
    badges: ['favorito']
  },
  {
    id: 'emp-salchicha-cheddar',
    name: 'Salchicha y Cheddar',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Salchicha de primera línea con abundante salsa cheddar cremosa.',
    badges: ['favorito']
  },
  {
    id: 'emp-jamon-queso',
    name: 'Jamón y Queso',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Jamón cocido de alta calidad y muzzarella derretida abundante.',
    badges: ['favorito']
  },
  {
    id: 'emp-4-quesos',
    name: '4 Quesos',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Mezcla fundida de muzzarella, roquefort, provolone y queso suave.',
    badges: ['favorito']
  },
  {
    id: 'emp-muzza-panceta-ciruelas',
    name: 'Muzza, Panceta y Ciruelas',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Contraste agridulce perfecto con queso muzzarella fundido.',
    badges: ['gourmet']
  },
  {
    id: 'emp-roquefort-apio-nuez',
    name: 'Roquefort, Apio y Nuez',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Queso azul intenso con la frescura del apio y crocante de nueces.',
    badges: ['gourmet']
  },
  {
    id: 'emp-roquefort-jamon',
    name: 'Roquefort y Jamón',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Intenso queso azul con dados de jamón cocido seleccionado.',
    badges: []
  },
  {
    id: 'emp-capresse',
    name: 'Capresse',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Muzzarella fresca, tomates seleccionados y hojas de albahaca aromática.',
    badges: ['veggie']
  },
  {
    id: 'emp-humita',
    name: 'Humita',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Cremoso maíz dulce con salsa bechamel y condimentos norteños.',
    badges: ['veggie']
  },
  {
    id: 'emp-espinaca-blanca',
    name: 'Espinaca y Salsa Blanca',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Hojas tiernas de espinaca con salsa bechamel y muzzarella.',
    badges: ['veggie']
  },
  {
    id: 'emp-verdura',
    name: 'Verdura',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Salteado de espinaca, acelga y vegetales frescos de estación.',
    badges: ['veggie']
  },
  {
    id: 'emp-fugazzeta',
    name: 'Fugazzeta',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Abundante cebolla dulce caramelizada al horno con centro de muzzarella.',
    badges: ['veggie']
  },
  {
    id: 'emp-queso-aceitunas',
    name: 'Queso y Aceitunas',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Muzzarella suave fundida con aceitunas verdes seleccionadas.',
    badges: ['veggie']
  },
  {
    id: 'emp-calabaza-integral',
    name: 'Calabaza Integral',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Puré suave de calabaza asada con especias en masa 100% integral.',
    badges: ['veggie', 'integral']
  },
  {
    id: 'emp-verdura-integral',
    name: 'Verdura Integral',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🥟',
    desc: 'Mix de verduras al vapor con masa integral crocante.',
    badges: ['veggie', 'integral']
  },
  {
    id: 'emp-dulce-leche-nuez',
    name: 'Dulce de Leche y Nuez',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🍯',
    desc: 'Masa crujiente espolvoreada con azúcar, dulce de leche repostero y nueces.',
    badges: ['dulce']
  },
  {
    id: 'emp-membrillo-muzza',
    name: 'Membrillo y Muzzarella',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🍯',
    desc: 'El clásico postre vigilante al horno con queso derretido.',
    badges: ['dulce']
  },
  {
    id: 'emp-batata-muzza',
    name: 'Batata y Muzzarella',
    category: 'empanadas',
    categoryName: 'Empanada',
    icon: '🍯',
    desc: 'Dulce artesanal de batata fundido con muzzarella tibia.',
    badges: ['dulce']
  },

  // --- PIZZAS ---
  {
    id: 'piz-muzarella',
    name: 'Pizza Muzarella',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Salsa de tomate casera, muzzarella abundante, aceitunas verdes y orégano.',
    badges: ['favorito']
  },
  {
    id: 'piz-especial',
    name: 'Pizza Especial',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Muzza, láminas de jamón cocido, morrones rojos asados y orégano.',
    badges: ['favorito']
  },
  {
    id: 'piz-crudo-rucula',
    name: 'Jamón Crudo y Rúcula',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Base de muzzarella, jamón crudo estacionado, rúcula fresca y lluvia de queso duro.',
    badges: ['gourmet', 'favorito']
  },
  {
    id: 'piz-panceta-cheddar',
    name: 'Panceta y Cheddar',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Muzza fundida, abundante panceta crocante y cremosa salsa cheddar.',
    badges: ['favorito']
  },
  {
    id: 'piz-panceta-roquefort',
    name: 'Panceta y Roquefort',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Contraste único de panceta ahumada dorada y queso azul derretido.',
    badges: ['gourmet']
  },
  {
    id: 'piz-panceta-huevo',
    name: 'Panceta con Huevo',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Panceta crocante al horno, huevos picados y toque aromático de orégano.',
    badges: []
  },
  {
    id: 'piz-verdeo-cherry',
    name: 'Verdeo y Cherry',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Cebollitas de verdeo frescas salteadas, tomatitos cherry dulces y muzzarella.',
    badges: ['gourmet']
  },
  {
    id: 'piz-verdeo-cheddar',
    name: 'Verdeo y Cheddar',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Cebolla de verdeo aromática con baño de queso cheddar fundido.',
    badges: []
  },
  {
    id: 'piz-roquefort-cherry',
    name: 'Roquefort y Cherry',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Intenso roquefort suavizado con tomates cherry asados.',
    badges: ['gourmet']
  },
  {
    id: 'piz-roquefort',
    name: 'Roquefort',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Base de salsa, muzzarella y abundante queso azul fundido.',
    badges: []
  },
  {
    id: 'piz-jamon-roquefort',
    name: 'Jamón Cocido y Roquefort',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Jamón cocido de alta calidad y trozos de queso azul gratinados.',
    badges: []
  },
  {
    id: 'piz-calabresa',
    name: 'Calabresa',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Muzza con abundantes rodajas de longaniza calabresa crocante.',
    badges: ['picante']
  },
  {
    id: 'piz-champignones',
    name: 'Champignones',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Muzzarella con champignones salteados en oliva y hierbas frescas.',
    badges: ['veggie', 'gourmet']
  },
  {
    id: 'piz-napolitana',
    name: 'Napolitana',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Muzza, rodajas de tomate natural fresco, ajo picado, perejil y orégano.',
    badges: ['favorito']
  },
  {
    id: 'piz-provolone',
    name: 'Provolone',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Gratinada con generoso queso provolone curado y pimienta negra.',
    badges: []
  },
  {
    id: 'piz-4-quesos',
    name: '4 Quesos',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Muzzarella, roquefort, provolone y queso parmesano gratinado.',
    badges: ['favorito']
  },
  {
    id: 'piz-margarita',
    name: 'Margarita',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Salsa de tomate, muzzarella, hojas de albahaca fresca y aceite de oliva.',
    badges: ['veggie']
  },
  {
    id: 'piz-primavera',
    name: 'Primavera',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Muzza, jamón cocido, rodajas de tomate, morrones y huevo cocido.',
    badges: []
  },
  {
    id: 'piz-fugazzeta',
    name: 'Fugazzeta',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Cebolla dorada al horno, muzzarella abundante y orégano fresco.',
    badges: ['veggie', 'favorito']
  },
  {
    id: 'piz-provenzal',
    name: 'Provenzal',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Muzzarella gratinada con emulsión aromática de ajo tierno y perejil.',
    badges: ['veggie']
  },
  {
    id: 'piz-capresse',
    name: 'Pizza Capresse',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Tomates cherry y redondos frescos, muzzarella y finas hebras de albahaca.',
    badges: ['veggie']
  },
  {
    id: 'piz-brocoli-roquefort',
    name: 'Brócoli con Roquefort',
    category: 'pizzas',
    categoryName: 'Pizza',
    icon: '🍕',
    desc: 'Flores de brócoli al punto cubiertas con queso roquefort gratinado.',
    badges: ['veggie', 'gourmet']
  },

  // --- TARTAS INDIVIDUALES ---
  {
    id: 'tar-capresse',
    name: 'Tarta Capresse',
    category: 'tartas',
    categoryName: 'Tarta',
    icon: '🥧',
    desc: 'Masa hojaldrada rellena de muzzarella, tomates frescos y albahaca.',
    badges: ['veggie']
  },
  {
    id: 'tar-cebolla-caramelizada',
    name: 'Cebolla Caramelizada',
    category: 'tartas',
    categoryName: 'Tarta',
    icon: '🥧',
    desc: 'Cebollas cocinadas a fuego lento hasta su dulzor natural con queso cremoso.',
    badges: ['veggie', 'gourmet', 'favorito']
  },
  {
    id: 'tar-pollo',
    name: 'Tarta de Pollo',
    category: 'tartas',
    categoryName: 'Tarta',
    icon: '🥧',
    desc: 'Pechuga tierna desmenuzada con salteado de verduras aromáticas.',
    badges: ['favorito']
  },
  {
    id: 'tar-humita',
    name: 'Tarta de Humita',
    category: 'tartas',
    categoryName: 'Tarta',
    icon: '🥧',
    desc: 'Choclo dulce en crema bechamel suave con queso gratinado al horno.',
    badges: ['veggie']
  },
  {
    id: 'tar-jamon-queso',
    name: 'Jamón y Queso',
    category: 'tartas',
    categoryName: 'Tarta',
    icon: '🥧',
    desc: 'Relleno generoso de jamón cocido seleccionado y queso muzzarella.',
    badges: ['favorito']
  },
  {
    id: 'tar-brocoli-integral',
    name: 'Brócoli Integral',
    category: 'tartas',
    categoryName: 'Tarta',
    icon: '🥧',
    desc: 'Brócoli fresco salteado con crema ligera en masa 100% integral.',
    badges: ['veggie', 'integral']
  },
  {
    id: 'tar-calabaza-integral',
    name: 'Calabaza Integral',
    category: 'tartas',
    categoryName: 'Tarta',
    icon: '🥧',
    desc: 'Calabaza dulce asada condimentada al horno con masa integral crocante.',
    badges: ['veggie', 'integral']
  },
  {
    id: 'tar-espinaca-integral',
    name: 'Espinaca Integral',
    category: 'tartas',
    categoryName: 'Tarta',
    icon: '🥧',
    desc: 'Espinacas tiernas con salsa blanca y queso en masa integral saludable.',
    badges: ['veggie', 'integral']
  },

  // --- SALSAS Y DIPS ---
  {
    id: 'sal-ranchera',
    name: 'Salsa Ranchera',
    category: 'salsas',
    categoryName: 'Dip',
    icon: '🥫',
    desc: 'La salsa insignia de FATTO: cremosa con notas de especias suaves y hierbas.',
    badges: ['gourmet', 'favorito']
  },
  {
    id: 'sal-cheddar',
    name: 'Dip de Cheddar Fundido',
    category: 'salsas',
    categoryName: 'Dip',
    icon: '🥫',
    desc: 'Queso cheddar suave, untuoso y perfecto para dippear masa caliente.',
    badges: ['favorito']
  },
  {
    id: 'sal-honey-mustard',
    name: 'Honey Mustard',
    category: 'salsas',
    categoryName: 'Dip',
    icon: '🥫',
    desc: 'Mostaza especial equilibrada con miel pura y sutiles toques agridulces.',
    badges: ['gourmet']
  },
  {
    id: 'sal-chimichurri',
    name: 'Chimichurri Especial',
    category: 'salsas',
    categoryName: 'Dip',
    icon: '🥫',
    desc: 'Receta criolla artesanal macerada con orégano, ají y aceite perfumado.',
    badges: ['favorito']
  },
  {
    id: 'sal-barbacoa',
    name: 'Salsa Barbacoa (BBQ)',
    category: 'salsas',
    categoryName: 'Dip',
    icon: '🥫',
    desc: 'Salsa BBQ con notas ahumadas profundas y caramelizadas al fuego.',
    badges: ['favorito']
  },
  {
    id: 'sal-ketchup-mexicano',
    name: 'Ketchup Mexicano',
    category: 'salsas',
    categoryName: 'Dip',
    icon: '🥫',
    desc: 'Tomate especiado con toque picante mexicano para despertar el paladar.',
    badges: ['picante']
  },
  {
    id: 'sal-tasty',
    name: 'Salsa Tasty',
    category: 'salsas',
    categoryName: 'Dip',
    icon: '🥫',
    desc: 'Salsa estilo americana especial con toque ahumado gourmet.',
    badges: ['gourmet']
  },
  {
    id: 'sal-criolla',
    name: 'Salsa Criolla',
    category: 'salsas',
    categoryName: 'Dip',
    icon: '🥫',
    desc: 'Pimientos rojos y verdes, cebollita fresca y vinagre suave de campo.',
    badges: []
  }
];

var PEDIX_URL = 'https://pedix.app/fatto-al-forno';

