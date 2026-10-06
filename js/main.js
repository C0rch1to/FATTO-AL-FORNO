/**
 * FATTO - Al Forno -
 * Interactive Engine: Fire particle canvas, 3D card tilt, real-time menu list filter/search,
 * and direct integration with Pedix portal.
 */

// ==========================================
// 1. Full Authentic Menu Database
// ==========================================
const MENU_ITEMS = [
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

const PEDIX_URL = 'https://pedix.app/fatto-al-forno';

// ==========================================
// 2. Fire Particle Canvas Simulation
// ==========================================
function initFireParticles() {
  const canvas = document.getElementById('fire-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const colors = [
    'rgba(230, 36, 41, ',   // Red
    'rgba(255, 106, 19, ',  // Amber
    'rgba(255, 170, 41, ',  // Gold
    'rgba(255, 220, 100, '  // Warm white
  ];

  class Ember {
    constructor() {
      this.reset();
      this.y = Math.random() * height;
    }

    reset() {
      this.x = Math.random() * width;
      this.y = height + 10 + Math.random() * 20;
      this.radius = Math.random() * 2.2 + 0.8;
      this.speedY = Math.random() * 1.5 + 0.6;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.opacity = Math.random() * 0.7 + 0.3;
      this.fadeSpeed = Math.random() * 0.006 + 0.003;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.wobble = Math.random() * Math.PI * 2;
      this.wobbleSpeed = Math.random() * 0.03 + 0.01;
    }

    update() {
      this.y -= this.speedY;
      this.wobble += this.wobbleSpeed;
      this.x += this.speedX + Math.sin(this.wobble) * 0.5;
      this.opacity -= this.fadeSpeed;

      if (this.opacity <= 0 || this.y < -10) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.opacity + ')';
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color + '0.8)';
      ctx.fill();
    }
  }

  const count = window.innerWidth < 768 ? 35 : 65;
  for (let i = 0; i < count; i++) {
    particles.push(new Ember());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let p of particles) {
      p.update();
      p.draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// ==========================================
// 3. 3D Tilt Effect for Hero Card
// ==========================================
function init3DTilt() {
  const card = document.querySelector('.hero-card-3d');
  if (!card) return;

  const container = document.querySelector('.hero-visual');
  if (!container) return;

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  container.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

// ==========================================
// 4. Menu List View Rendering and Search Engine
// ==========================================
let activeCategory = 'todas';
let searchQuery = '';

function renderMenu() {
  const listContainer = document.getElementById('menu-list-container');
  if (!listContainer) return;

  const filtered = MENU_ITEMS.filter(item => {
    const matchesCat = activeCategory === 'todas' || item.category === activeCategory;
    const matchesQuery = searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery) ||
      item.desc.toLowerCase().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-results">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3>No encontramos opciones para "${searchQuery}"</h3>
        <p>Probá buscando por ingrediente como "carne", "queso", "bondiola", o seleccioná otra categoría.</p>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = filtered.map(item => {
    const badgesHtml = item.badges.map(b => {
      let label = b.toUpperCase();
      let cls = 'badge-' + b;
      if (b === 'gourmet') label = '★ Gourmet';
      if (b === 'favorito') label = '🔥 Favorito';
      if (b === 'veggie') label = '🌱 Vegetariana';
      if (b === 'picante') label = '🌶️ Picante';
      if (b === 'dulce') label = '🍯 Dulce';
      if (b === 'integral') label = '🌾 100% Integral';
      return `<span class="badge ${cls}">${label}</span>`;
    }).join('');

    return `
      <div class="menu-list-item" data-id="${item.id}">
        <div class="list-item-icon-col">
          <span class="list-category-icon">${item.icon}</span>
        </div>

        <div class="list-item-content">
          <div class="list-item-header">
            <h4 class="list-item-name">${item.name}</h4>
            <div class="item-badges">${badgesHtml}</div>
          </div>
          <p class="list-item-desc">${item.desc}</p>
        </div>

        <div class="list-item-action">
          <a href="${PEDIX_URL}" target="_blank" rel="noopener noreferrer" class="btn-pedix-item" title="Pedir ${item.name} en Pedix">
            <span>Pedir en Pedix</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function initMenuControls() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-cat');
      renderMenu();
    });
  });

  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderMenu();
    });
  }
}

// Quick filter helper for specialty category cards
function filterByCat(catName) {
  activeCategory = catName;
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(t => {
    if (t.getAttribute('data-cat') === catName) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });
  renderMenu();
  const menuSection = document.getElementById('menu-completo');
  if (menuSection) {
    menuSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==========================================
// 5. Navbar & Mobile Drawer
// ==========================================
function initNavbarAndScroll() {
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile navigation
  const menuToggle = document.getElementById('menu-toggle-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileBackdrop = document.getElementById('mobile-nav-backdrop');
  const closeMobileNav = document.getElementById('close-mobile-nav');

  function openDrawer() {
    mobileNav?.classList.add('open');
    mobileBackdrop?.classList.add('open');
  }

  function closeDrawer() {
    mobileNav?.classList.remove('open');
    mobileBackdrop?.classList.remove('open');
  }

  menuToggle?.addEventListener('click', openDrawer);
  closeMobileNav?.addEventListener('click', closeDrawer);
  mobileBackdrop?.addEventListener('click', closeDrawer);

  document.querySelectorAll('.mobile-nav-links a').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });
}

// ==========================================
// 6. Floating Back to Top Button
// ==========================================
function initScrollToTop() {
  const btnScrollTop = document.getElementById('btn-scroll-top');
  if (!btnScrollTop) return;

  const handleScroll = () => {
    if (window.scrollY > 280) {
      btnScrollTop.classList.add('visible');
    } else {
      btnScrollTop.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check in case page is already scrolled

  btnScrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==========================================
// Init on DOM Content Loaded
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initFireParticles();
  init3DTilt();
  renderMenu();
  initMenuControls();
  initNavbarAndScroll();
  initScrollToTop();
});
