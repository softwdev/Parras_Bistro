/* ==========================================================================
   PARRA'S BISTRO - Mobile-First Engine & Interactive Logic
   ========================================================================== */

// --- DATASET: MENÚ COMPLETO DE PARRA'S BISTRO ---
const MENU_DATA = [
  // --- DESAYUNOS & HUEVOS ---
  {
    id: "d1",
    name: "Chilaquiles de la Casa",
    category: "desayunos",
    price: 99.00,
    description: "Verdes o rojos, con top de crema, queso, cebolla, ensaladilla de la casa, frijoles con queso y huevo estrellado al gusto.",
    image: "imagenes/fotos del lugar y platillos/chilaquiles-verdes.jpg",
    badge: "Popular",
    popular: true,
    options: ["Salsa Verde", "Salsa Roja"]
  },
  {
    id: "d2",
    name: "Birria-Quiles",
    category: "desayunos",
    price: 165.00,
    description: "Bañados en salsa de birria, con top de crema, queso, ensaladilla, costra de queso, carne de birria tatemada y frijoles con queso.",
    image: "imagenes/fotos del lugar y platillos/chilaquiles-verdes.jpg",
    badge: "Especialidad",
    popular: true
  },
  {
    id: "d3",
    name: "Chilaquiles Parra's",
    category: "desayunos",
    price: 155.00,
    description: "Bañados en salsa especial de camarón con toque de picante, costra de queso, camarones al ajillo, crema, queso y frijoles.",
    image: "imagenes/fotos del lugar y platillos/chilaquiles-verdes.jpg",
    badge: "Firma",
    popular: true
  },
  {
    id: "d4",
    name: "Chilaquiles Poblanos",
    category: "desayunos",
    price: 132.00,
    description: "Bañados en salsa poblana, queso, rajas poblanas con pollo, ensaladilla y frijoles con queso.",
    image: "imagenes/fotos del lugar y platillos/chilaquiles-verdes.jpg",
    badge: "Chef Choice"
  },
  {
    id: "d5",
    name: "Chilaquiles Rellenos",
    category: "desayunos",
    price: 165.00,
    description: "Rellenos de chicharrón con queso, bañados en salsa de chile secos, crema, queso, cebolla y frijoles fritos.",
    image: "imagenes/fotos del lugar y platillos/chilaquiles-verdes.jpg"
  },
  {
    id: "d6",
    name: "Huevos Estrellados",
    category: "desayunos",
    price: 109.00,
    description: "Con tiritas de tocino doraditas, acompañado de chilaquiles de la casa y frijoles con queso.",
    image: "imagenes/fotos del lugar y platillos/plato-desayuno.jpg"
  },
  {
    id: "d7",
    name: "Huevos Revueltos",
    category: "desayunos",
    price: 109.00,
    description: "Con jamón, salchicha, tocino, a la mexicana, nopales o ejotes. Con chilaquiles y frijoles.",
    image: "imagenes/fotos del lugar y platillos/plato-desayuno.jpg",
    options: ["Jamón", "Salchicha", "Tocino", "A la Mexicana", "Nopales", "Ejotes"]
  },
  {
    id: "d8",
    name: "Guisados Preparados",
    category: "desayunos",
    price: 130.00,
    description: "Con chilaquiles y frijoles. Elige: Rajas Poblanas, Machaca a la Mexicana, Chicharrón Rojo, Lengua Verde, Hígado Encebollado o Bisteck Ranchero.",
    image: "imagenes/fotos del lugar y platillos/pizzas-bebidas-guisos.jpg",
    badge: "Tradicional",
    options: ["Rajas Poblanas", "Machaca a la Mexicana", "Chicharrón Rojo", "Lengua Verde", "Hígado Encebollado", "Bisteck Ranchero"]
  },
  {
    id: "d11",
    name: "Desayuno Vaquero",
    category: "desayunos",
    price: 295.00,
    description: "300 gr Rib eye, 2 huevos, papa hash brown, tomate, cebolla y morrón salteados, frijoles.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg",
    badge: "Premium",
    popular: true
  },
  {
    id: "d13",
    name: "Quesa-Birrias (3 pz)",
    category: "desayunos",
    price: 175.00,
    description: "3 Quesabirrias doraditas con costra de queso, cebolla, cilantro, cremoso de aguacate y consomé.",
    image: "imagenes/fotos del lugar y platillos/tacos.jpg",
    badge: "Favorito",
    popular: true
  },

  // --- PIZZAS A LA LEÑA ---
  {
    id: "p1",
    name: "Pizza Carnívora",
    category: "pizzas",
    price: 289.00,
    description: "Salsa martajada verde, arrachera, chorizo, cebolla morada, cilantro, cremoso de aguacate y jalapeño.",
    image: "imagenes/fotos del lugar y platillos/pizza1.jpg",
    badge: "Top Ventas",
    popular: true
  },
  {
    id: "p2",
    name: "Pizza Boneles",
    category: "pizzas",
    price: 255.00,
    description: "Salsa de tomate, queso mozzarella, mini boneles de pollo, salsa BBQ, BBQ/Hot o Búfalo, ranch y cebollín.",
    image: "imagenes/fotos del lugar y platillos/pizza2.jpg",
    badge: "Recomendada",
    popular: true,
    options: ["Salsa BBQ", "BBQ / Hot", "Búfalo"]
  },
  {
    id: "p3",
    name: "Pizza Bianca",
    category: "pizzas",
    price: 255.00,
    description: "Salsa blanca con top de camarones, cebolla morada, espinacas, alcaparras, queso manchego y parmesano.",
    image: "imagenes/fotos del lugar y platillos/pizza3.jpg",
    badge: "Gourmet"
  },
  {
    id: "p4",
    name: "Pizza Margarita",
    category: "pizzas",
    price: 210.00,
    description: "Salsa de tomate, queso mozzarella, tomate cherry, espinaca y salsa pesto artesanal.",
    image: "imagenes/fotos del lugar y platillos/pizza1.jpg"
  },
  {
    id: "p5",
    name: "Pizza Peperoni & Salami",
    category: "pizzas",
    price: 210.00,
    description: "Salsa de tomate casera, queso mozzarella derretido, abundante peperoni y salami.",
    image: "imagenes/fotos del lugar y platillos/pizza2.jpg",
    popular: true
  },
  {
    id: "p6",
    name: "Pizza Suprema",
    category: "pizzas",
    price: 269.00,
    description: "Salsa de tomate, mozzarella, salchicha ahumada, champiñones, cebolla morada, morrón y aceitunas.",
    image: "imagenes/fotos del lugar y platillos/pizza3.jpg"
  },

  // --- HAMBURGUESAS & SMASH ---
  {
    id: "h1",
    name: "Burguer Lunch",
    category: "hamburguesas",
    price: 162.00,
    description: "Pan brioche, carne de res, queso americano y manchego, tocino, huevo estrellado, cebolla asada, jalapeño y papas.",
    image: "imagenes/fotos del lugar y platillos/hamburgesa.jpg",
    badge: "Estrella",
    popular: true
  },
  {
    id: "h2",
    name: "Americana Burguer",
    category: "hamburguesas",
    price: 162.00,
    description: "Pan brioche, carne, manchego y americano, jamón, aros de cebolla, salsa BBQ y papas.",
    image: "imagenes/fotos del lugar y platillos/hamburguesa2.jpg",
    popular: true
  },
  {
    id: "h4",
    name: "Smash Burger BBQ",
    category: "hamburguesas",
    price: 104.00,
    description: "Carne smasheada a la plancha, queso americano, tocino crujiente, aros de cebolla y BBQ.",
    image: "imagenes/fotos del lugar y platillos/hamburguesa2.jpg",
    badge: "Smash",
    popular: true
  },
  {
    id: "h5",
    name: "Hamburguesa Mar y Tierra",
    category: "hamburguesas",
    price: 110.00,
    description: "Carne de res con queso, camarones salteados y cremoso guacamole fresco.",
    image: "imagenes/fotos del lugar y platillos/hamburgesa.jpg",
    badge: "Special"
  },
  {
    id: "h6",
    name: "Cruji Pollo Burguer",
    category: "hamburguesas",
    price: 119.00,
    description: "Tender de pollo crujiente bañados en tu salsa favorita o naturales con queso americano.",
    image: "imagenes/fotos del lugar y platillos/hamburguesa2.jpg",
    options: ["Salsa BBQ", "BBQ / Hot", "Búfalo", "Mango Habanero", "Naturales"]
  },
  {
    id: "h7",
    name: "Chili Dogo",
    category: "hamburguesas",
    price: 75.00,
    description: "Salchicha doradita, salsa chili casera y abundante queso gratinado con papas.",
    image: "imagenes/fotos del lugar y platillos/hotdog+papas.jpg"
  },

  // --- CORTES DE CARNE & PARRILLADAS ---
  {
    id: "c1",
    name: "Rib Eye (350 gr)",
    category: "cortes",
    price: 335.00,
    description: "350 gr de Rib eye asado a la parrilla, acompañado de 2 guarniciones a elegir.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg",
    badge: "Premium",
    popular: true
  },
  {
    id: "c2",
    name: "Arrachera (320 gr)",
    category: "cortes",
    price: 305.00,
    description: "320 gr de Arrachera marinada a la leña con 2 guarniciones completas.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg",
    popular: true
  },
  {
    id: "c5",
    name: "Costilla BBQ",
    category: "cortes",
    price: 275.00,
    description: "Costillar de cerdo ahumado y horneado en salsa BBQ con elote dulce y puré de papa.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg"
  },
  {
    id: "c6",
    name: "Parrillada Amigos (4 personas)",
    category: "cortes",
    price: 880.00,
    description: "1/2 Kg Sirloin, Arrachera 300g, chorizo argentino, frijoles puercos, 5 quesadillas y salsas.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg",
    badge: "Compartir",
    popular: true
  },

  // --- TACOS & ANTOJITOS ---
  {
    id: "t1",
    name: "Tacos de Arrachera Fifí (3 pz)",
    category: "tacos",
    price: 239.00,
    description: "3 tacos con bastones de arrachera, costra de queso, cebolla, cilantro, aguacate y cebollita asada.",
    image: "imagenes/fotos del lugar y platillos/tacos.jpg",
    badge: "Fifí",
    popular: true
  },
  {
    id: "t2",
    name: "Tacos Rib Eye Fifí (3 pz)",
    category: "tacos",
    price: 249.00,
    description: "3 tacos con gaonera de Rib eye, costra de queso, frijoles puercos, aguacate y cebollita asada.",
    image: "imagenes/fotos del lugar y platillos/tacos2.jpg",
    badge: "Fifí",
    popular: true
  },
  {
    id: "t3",
    name: "Tacos Individuales",
    category: "tacos",
    price: 27.00,
    description: "Taco suave artesanal. Elige carne: Asada, Chorizo Corona, Pastor o Lengua.",
    image: "imagenes/fotos del lugar y platillos/tacos.jpg",
    options: ["Asada", "Chorizo Corona", "Pastor", "Lengua"]
  },

  // --- PASTAS, BAGUETTES & BURRITAS ---
  {
    id: "pa1",
    name: "Fettuccini Alfredo con Camarones",
    category: "pastas",
    price: 215.00,
    description: "Fettuccini en salsa alfredo cremosa con camarones (o pollo), ajillo, vino blanco y zuccini asada.",
    image: "imagenes/fotos del lugar y platillos/pasta-con-camarones.jpg",
    badge: "Gourmet",
    popular: true
  },
  {
    id: "pa3",
    name: "Lasaña Boloñesa a la Leña",
    category: "pastas",
    price: 229.00,
    description: "Ragú de res, bechamel, mix de quesos horneada a la leña con ensalada fresca.",
    image: "imagenes/fotos del lugar y platillos/pasta-con-camarones.jpg"
  },
  {
    id: "pa4",
    name: "Burrita Gigante de Res/Camarón",
    category: "pastas",
    price: 155.00,
    description: "Tortilla de harina grande con guacamole, queso manchego, lechuga, fajitas y papas.",
    image: "imagenes/fotos del lugar y platillos/burritos.jpg",
    options: ["Res ($155)", "Camarón ($175)", "Pollo ($140)"]
  },
  {
    id: "pa5",
    name: "Club Sandwich Parra's",
    category: "pastas",
    price: 169.00,
    description: "3 panes rellenos de jamón, queso, tocino, pollo, tomate, lechuga, aguacate y papas.",
    image: "imagenes/fotos del lugar y platillos/sandwich.jpg"
  },

  // --- BONELESS & BOTEANAS ---
  {
    id: "s1",
    name: "Boneles (300 gr)",
    category: "ensaladas",
    price: 145.00,
    description: "300 gr de boneless jugosos bañados en la salsa de tu elección, papas francesas y ranch.",
    image: "imagenes/fotos del lugar y platillos/boneless-bbq.jpg",
    badge: "Popular",
    popular: true,
    options: ["Salsa BBQ", "BBQ / Hot", "Búfalo", "Tropical", "Chipotle Naranja", "Mango Habanero"]
  },
  {
    id: "s2",
    name: "Alitas (300 gr)",
    category: "ensaladas",
    price: 135.00,
    description: "Alitas de pollo crujientes bañadas en tu salsa favorita con papas francesas y ranch.",
    image: "imagenes/fotos del lugar y platillos/boneless.jpg",
    popular: true,
    options: ["Salsa BBQ", "BBQ / Hot", "Búfalo", "Tropical", "Chipotle Naranja", "Mango Habanero"]
  },
  {
    id: "s4",
    name: "Guacamole Especial con Totopos",
    category: "ensaladas",
    price: 89.00,
    description: "Aguacate molido con pepino, cebolla, jitomate, cilantro y totopos recién hechos.",
    image: "imagenes/fotos del lugar y platillos/comida-evento.jpg"
  },

  // --- POSTRES & BEBIDAS ---
  {
    id: "po1",
    name: "Brownie Chocolate Supremo",
    category: "postres",
    price: 115.00,
    description: "Brownie de chocolate con azúcar glass, bola de helado y compota de frutos rojos.",
    image: "imagenes/fotos del lugar y platillos/roles-canela.jpg",
    popular: true
  },
  {
    id: "b1",
    name: "Sodas con Jellys",
    category: "bebidas",
    price: 89.00,
    description: "Soda refrescante con perlas popping jellys: Pink Limonada, Blueberry o Maracuyá.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg",
    popular: true,
    options: ["Pink Limonada", "Blueberry", "Maracuyá"]
  },
  {
    id: "b3",
    name: "Cantarito con Tequila",
    category: "bebidas",
    price: 95.00,
    description: "Tequila, controy, sal, limón, naranja y refresco de toronja Squirt en cantarito.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg",
    badge: "Coctel",
    popular: true
  },
  {
    id: "b4",
    name: "Mezcalita de Sabor",
    category: "bebidas",
    price: 115.00,
    description: "Mezcal artesanal, jugo de limón, sal y jarabe. Sabores: Jamaica, Maracuyá o Frutos Rojos.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg",
    options: ["Jamaica", "Maracuyá", "Frutos Rojos"]
  }
];

// --- GALLERY DATASET ---
const GALLERY_DATA = [
  { title: "Instalaciones de Parra's Bistro", category: "lugar", img: "imagenes/fotos del lugar y platillos/local-lleno.jpg" },
  { title: "Pizza Artesanal a la Leña", category: "platillos", img: "imagenes/fotos del lugar y platillos/pizza1.jpg" },
  { title: "Hamburguesa Burguer Lunch", category: "platillos", img: "imagenes/fotos del lugar y platillos/hamburgesa.jpg" },
  { title: "Cortes de Carne y Parrilladas", category: "platillos", img: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg" },
  { title: "Chilaquiles Tradicionales", category: "platillos", img: "imagenes/fotos del lugar y platillos/chilaquiles-verdes.jpg" },
  { title: "Tacos Fifí de Arrachera", category: "platillos", img: "imagenes/fotos del lugar y platillos/tacos.jpg" },
  { title: "Eventos Privados & Catering", category: "eventos", img: "imagenes/fotos del lugar y platillos/mesa-con-arreglos.jpg" }
];

// --- APP STATE ---
let cart = [];
let currentCategory = "todos";
let searchQuery = "";
let isExpandedCategory = false;
const COMPACT_LIMIT = 4; // Shows max 4 items per category by default on mobile to prevent long scrolling!

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initScheduleStatus();
  initPromoDayHighlight();
  renderMenu();
  renderGallery("todos");
  updateCartBadge();
  setupEventListeners();
});

// --- SCHEDULE CHECKER (Miércoles a Lunes) ---
function initScheduleStatus() {
  const statusBadge = document.getElementById("schedule-status-badge");
  if (!statusBadge) return;

  const day = new Date().getDay(); // 0: Sun, 1: Mon, 2: Tue, 3: Wed, 4: Thu, 5: Fri, 6: Sat

  if (day === 2) {
    statusBadge.className = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 border border-red-200";
    statusBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-red-500"></span> CERRADO HOY (Abre Miér)`;
  } else {
    statusBadge.className = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200";
    statusBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> ABIERTO HOY • Desayuno & Cena`;
  }
}

// --- PROMO DAY HIGHLIGHT ---
function initPromoDayHighlight() {
  const day = new Date().getDay(); // 1: Mon, 3: Wed, 4: Thu
  const promoTacos = document.getElementById("promo-card-tacos");
  const promoAlitas = document.getElementById("promo-card-alitas");
  const promoPizzas = document.getElementById("promo-card-pizzas");

  if (day === 1 && promoTacos) {
    promoTacos.classList.add("ring-2", "ring-[#c04828]");
  } else if (day === 3 && promoAlitas) {
    promoAlitas.classList.add("ring-2", "ring-[#c04828]");
  } else if (day === 4 && promoPizzas) {
    promoPizzas.classList.add("ring-2", "ring-[#c04828]");
  }
}

// --- RENDER MENU (SMART COMPACT GRID) ---
function renderMenu() {
  const grid = document.getElementById("menu-grid");
  const expandContainer = document.getElementById("menu-expand-container");
  if (!grid) return;

  let filtered = MENU_DATA;

  if (currentCategory !== "todos") {
    filtered = filtered.filter(item => item.category === currentCategory);
  }

  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.description.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-8 bg-white rounded-2xl border border-stone-200 p-6">
        <i class="fa-solid fa-utensils text-3xl text-stone-300 mb-2"></i>
        <h3 class="text-base font-bold text-stone-700">No encontramos platillos con "${searchQuery}"</h3>
        <button onclick="clearSearch()" class="mt-3 px-4 py-1.5 bg-[#c04828] text-white font-bold text-xs rounded-full shadow-md">Ver todo el menú</button>
      </div>
    `;
    if (expandContainer) expandContainer.innerHTML = "";
    return;
  }

  // Determine items to display (compact limit vs expanded)
  const totalCount = filtered.length;
  const showLimit = (!isExpandedCategory && searchQuery.trim() === "") ? COMPACT_LIMIT : totalCount;
  const itemsToDisplay = filtered.slice(0, showLimit);

  grid.innerHTML = itemsToDisplay.map(item => `
    <div class="dish-card animate-fade-in">
      <div class="dish-img-wrapper" onclick="openDishDetailModal('${item.id}')">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='imagenes/poster.png'">
        ${item.badge ? `<span class="dish-badge-tag ${item.badge.includes('Smash') || item.badge.includes('Fifí') ? 'bg-[#1e6b52] text-white' : 'bg-[#c04828] text-white'}">${item.badge}</span>` : ''}
      </div>
      <div class="p-3 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start gap-1 mb-1">
            <h3 class="font-serif text-sm font-bold text-stone-900 leading-tight line-clamp-1 cursor-pointer" onclick="openDishDetailModal('${item.id}')">${item.name}</h3>
            <span class="font-bold text-[#c04828] text-sm whitespace-nowrap">$${item.price.toFixed(2)}</span>
          </div>
          <p class="text-[11px] text-stone-500 leading-snug line-clamp-2 mb-2">${item.description}</p>
        </div>

        ${item.options ? `
          <div class="mb-2">
            <select id="option-select-${item.id}" class="w-full text-[11px] bg-stone-50 border border-stone-300 rounded-md p-1 font-medium focus:ring-1 focus:ring-[#c04828] outline-none">
              ${item.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
            </select>
          </div>
        ` : ''}

        <button onclick="addToCart('${item.id}')" class="w-full py-2 px-3 bg-[#1e6b52] hover:bg-[#15503d] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95">
          <i class="fa-solid fa-plus text-[10px]"></i>
          <span>Agregar</span>
        </button>
      </div>
    </div>
  `).join('');

  // Expand / Show More Button
  if (expandContainer) {
    if (totalCount > COMPACT_LIMIT && !isExpandedCategory && searchQuery.trim() === "") {
      expandContainer.innerHTML = `
        <button onclick="toggleExpandMenu()" class="w-full sm:w-auto px-6 py-3 bg-stone-900 hover:bg-[#c04828] text-white font-bold text-xs rounded-full shadow-lg transition flex items-center justify-center gap-2 mx-auto">
          <span>Ver los ${totalCount - COMPACT_LIMIT} platillos más en esta sección</span>
          <i class="fa-solid fa-chevron-down"></i>
        </button>
      `;
    } else if (isExpandedCategory && totalCount > COMPACT_LIMIT) {
      expandContainer.innerHTML = `
        <button onclick="toggleExpandMenu()" class="w-full sm:w-auto px-6 py-2.5 bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs rounded-full transition flex items-center justify-center gap-2 mx-auto">
          <span>Mostrar menos</span>
          <i class="fa-solid fa-chevron-up"></i>
        </button>
      `;
    } else {
      expandContainer.innerHTML = "";
    }
  }
}

function toggleExpandMenu() {
  isExpandedCategory = !isExpandedCategory;
  renderMenu();
}

// --- CATEGORY FILTERING ---
function filterCategory(category, btnElement) {
  currentCategory = category;
  isExpandedCategory = false; // Reset compact state on category switch

  document.querySelectorAll(".menu-tab-btn").forEach(b => b.classList.remove("active"));
  if (btnElement) {
    btnElement.classList.add("active");
  }

  renderMenu();
}

function handleSearch(val) {
  searchQuery = val;
  renderMenu();
}

function clearSearch() {
  searchQuery = "";
  document.getElementById("menu-search-input").value = "";
  renderMenu();
}

// --- CART MANAGEMENT ---
function addToCart(itemId) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  let selectedOption = null;
  const optSelect = document.getElementById(`option-select-${itemId}`);
  if (optSelect) {
    selectedOption = optSelect.value;
  }

  const existingIndex = cart.findIndex(c => c.id === itemId && c.option === selectedOption);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      option: selectedOption,
      quantity: 1
    });
  }

  updateCartBadge();
  showToast(`"${item.name}" se agregó a tu pedido`);
}

function updateCartQuantity(index, delta) {
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
  }
  updateCartBadge();
  renderCartModal();
}

function updateCartBadge() {
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const badges = document.querySelectorAll(".cart-badge-count");
  badges.forEach(b => {
    b.textContent = totalItems;
    if (totalItems > 0) {
      b.classList.remove("hidden");
    } else {
      b.classList.add("hidden");
    }
  });
}

// --- CART MODAL & WHATSAPP GENERATOR ---
function openCartModal() {
  renderCartModal();
  document.getElementById("cart-modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCartModal() {
  document.getElementById("cart-modal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function renderCartModal() {
  const container = document.getElementById("cart-items-container");
  const totalEl = document.getElementById("cart-total-price");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-6 text-stone-500">
        <i class="fa-solid fa-basket-shopping text-3xl text-stone-300 mb-2"></i>
        <p class="font-semibold text-sm">Tu carrito está vacío.</p>
        <p class="text-xs text-stone-400 mt-1">Explora nuestro menú y agrega tus platillos favoritos.</p>
      </div>
    `;
    totalEl.textContent = "$0.00";
    return;
  }

  let total = 0;

  container.innerHTML = cart.map((item, idx) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    return `
      <div class="flex items-center justify-between p-2.5 bg-stone-50 rounded-xl border border-stone-200 text-xs">
        <div class="flex-1 pr-2">
          <h4 class="font-bold text-stone-900 leading-tight">${item.name}</h4>
          ${item.option ? `<span class="inline-block text-[10px] text-[#1e6b52] font-semibold bg-emerald-50 px-1.5 py-0.5 rounded mt-0.5">${item.option}</span>` : ''}
          <p class="text-[11px] text-stone-500 font-semibold mt-0.5">$${item.price.toFixed(2)} c/u</p>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex items-center border border-stone-300 rounded-md bg-white overflow-hidden">
            <button onclick="updateCartQuantity(${idx}, -1)" class="px-2 py-0.5 text-stone-600 font-bold">-</button>
            <span class="px-1.5 py-0.5 font-bold text-xs text-stone-800">${item.quantity}</span>
            <button onclick="updateCartQuantity(${idx}, 1)" class="px-2 py-0.5 text-stone-600 font-bold">+</button>
          </div>
          <span class="font-bold text-stone-900 text-xs w-14 text-right">$${itemTotal.toFixed(2)}</span>
        </div>
      </div>
    `;
  }).join('');

  totalEl.textContent = `$${total.toFixed(2)}`;
}

function sendWhatsAppOrder() {
  if (cart.length === 0) {
    showToast("Agrega platillos a tu pedido antes de continuar", "error");
    return;
  }

  const customerName = document.getElementById("cart-client-name").value.trim() || "Cliente";
  const orderType = document.getElementById("cart-order-type").value;
  const address = document.getElementById("cart-address").value.trim();
  const notes = document.getElementById("cart-notes").value.trim();

  let message = `🍷 *NUEVO PEDIDO - PARRA'S BISTRO* 🍷\n`;
  message += `👤 *Cliente:* ${customerName}\n`;
  message += `📌 *Modalidad:* ${orderType}\n`;
  if (orderType === "Domicilio" && address) {
    message += `📍 *Dirección:* ${address}\n`;
  }
  message += `\n📋 *DETALLE DEL PEDIDO:*\n`;

  let total = 0;
  cart.forEach(item => {
    const sub = item.price * item.quantity;
    total += sub;
    message += `• ${item.quantity}x ${item.name}`;
    if (item.option) message += ` (${item.option})`;
    message += ` -> *$${sub.toFixed(2)}*\n`;
  });

  message += `\n💰 *TOTAL A PAGAR:* *$${total.toFixed(2)} MXN*\n`;
  if (notes) {
    message += `📝 *Notas:* ${notes}\n`;
  }
  message += `\n¡Gracias por elegir Parra's Bistro! Quedo en espera de confirmación.`;

  const phone = "523111481757";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

// --- CATERING QUOTE GENERATOR ---
function sendCateringQuote(e) {
  e.preventDefault();
  const name = document.getElementById("cat-name").value.trim();
  const phone = document.getElementById("cat-phone").value.trim();
  const eventType = document.getElementById("cat-event-type").value;
  const guests = document.getElementById("cat-guests").value;
  const location = document.getElementById("cat-location").value;
  const date = document.getElementById("cat-date").value;
  const details = document.getElementById("cat-details").value.trim();

  let msg = `✨ *COTIZACIÓN DE CATERING / EVENTO PRIVADO* ✨\n`;
  msg += `*Parra's Bistro Catering*\n\n`;
  msg += `👤 *Nombre:* ${name}\n`;
  msg += `📞 *Teléfono:* ${phone}\n`;
  msg += `🎉 *Tipo de Evento:* ${eventType}\n`;
  msg += `👥 *Invitados:* ${guests} personas\n`;
  msg += `📍 *Lugar:* ${location}\n`;
  if (date) msg += `📅 *Fecha:* ${date}\n`;
  if (details) msg += `📝 *Detalles:* ${details}\n`;

  msg += `\nHola! Deseo cotizar mi evento con Parra's Bistro. Quedo en espera de información.`;

  window.open(`https://wa.me/523231239895?text=${encodeURIComponent(msg)}`, "_blank");
}

// --- TABLE RESERVATION HANDLER ---
function sendReservation(e) {
  e.preventDefault();
  const name = document.getElementById("res-name").value.trim();
  const phone = document.getElementById("res-phone").value.trim();
  const guests = document.getElementById("res-guests").value;
  const date = document.getElementById("res-date").value;
  const time = document.getElementById("res-time").value;
  const zone = document.getElementById("res-zone").value;
  const occasion = document.getElementById("res-occasion").value.trim();

  let msg = `🍽️ *RESERVACIÓN DE MESA - PARRA'S BISTRO* 🍽️\n\n`;
  msg += `👤 *Nombre:* ${name}\n`;
  msg += `📞 *Teléfono:* ${phone}\n`;
  msg += `👥 *Personas:* ${guests}\n`;
  msg += `📅 *Fecha:* ${date}\n`;
  msg += `⏰ *Hora:* ${time}\n`;
  msg += `🪑 *Zona:* ${zone}\n`;
  if (occasion) msg += `🎉 *Motivo:* ${occasion}\n`;

  msg += `\nSolicito confirmación de disponibilidad para mi mesa. ¡Gracias!`;

  window.open(`https://wa.me/523111481757?text=${encodeURIComponent(msg)}`, "_blank");
}

// --- GALLERY LIGHTBOX ---
function renderGallery(cat) {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  let items = GALLERY_DATA;
  if (cat !== "todos") {
    items = items.filter(i => i.category === cat);
  }

  grid.innerHTML = items.map(item => `
    <div onclick="openLightbox('${item.img}', '${item.title}')" class="group relative rounded-xl overflow-hidden cursor-pointer shadow-sm h-48 border border-stone-200">
      <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 flex flex-col justify-end">
        <span class="text-white font-serif font-bold text-sm leading-tight">${item.title}</span>
        <span class="text-[10px] text-amber-300 font-semibold uppercase tracking-wider">${item.category}</span>
      </div>
    </div>
  `).join('');
}

function openLightbox(imgUrl, caption) {
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const cap = document.getElementById("lightbox-caption");
  if (!modal) return;

  img.src = imgUrl;
  cap.textContent = caption;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

// --- DISH DETAIL MODAL ---
function openDishDetailModal(itemId) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  const modal = document.createElement("div");
  modal.id = "dish-detail-modal";
  modal.className = "fixed inset-0 z-[110] bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4";
  modal.innerHTML = `
    <div class="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl animate-fade-in max-h-[90vh] flex flex-col">
      <div class="relative h-56 w-full bg-stone-900">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
        <button onclick="document.getElementById('dish-detail-modal').remove()" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center text-sm">
          <i class="fa-solid fa-xmark"></i>
        </button>
        ${item.badge ? `<span class="absolute top-3 left-3 bg-[#c04828] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">${item.badge}</span>` : ''}
      </div>
      <div class="p-5 overflow-y-auto space-y-4">
        <div class="flex justify-between items-start gap-2">
          <h3 class="font-serif text-xl font-bold text-stone-900">${item.name}</h3>
          <span class="text-xl font-black text-[#c04828]">$${item.price.toFixed(2)}</span>
        </div>
        <p class="text-xs text-stone-600 leading-relaxed">${item.description}</p>
        ${item.options ? `
          <div>
            <label class="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">Selecciona opción / salsa:</label>
            <select id="modal-option-select" class="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-xs font-semibold outline-none focus:ring-1 focus:ring-[#c04828]">
              ${item.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
            </select>
          </div>
        ` : ''}
        <button onclick="addFromModal('${item.id}')" class="w-full py-3.5 bg-[#1e6b52] text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm">
          <i class="fa-solid fa-cart-plus"></i> Agregar al Pedido • $${item.price.toFixed(2)}
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function addFromModal(itemId) {
  const optSelect = document.getElementById("modal-option-select");
  if (optSelect) {
    const customSelect = document.getElementById(`option-select-${itemId}`);
    if (customSelect) customSelect.value = optSelect.value;
  }
  addToCart(itemId);
  const modal = document.getElementById("dish-detail-modal");
  if (modal) modal.remove();
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 z-[120] px-4 py-3 rounded-xl text-white text-xs font-bold shadow-2xl flex items-center justify-center gap-2 animate-fade-in ${
    type === "error" ? "bg-red-600" : "bg-[#1e6b52]"
  }`;
  toast.innerHTML = `<i class="fa-solid fa-check"></i><span>${message}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// --- EVENT LISTENERS & ACTIVE NAV TRACKING ---
function setupEventListeners() {
  const searchInput = document.getElementById("menu-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => handleSearch(e.target.value));
  }

  // Active Bottom Nav Tracker on Scroll
  const sections = ["inicio", "promociones", "menu", "catering", "contacto"];
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(secId => {
      const sec = document.getElementById(secId);
      if (sec) {
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) {
          current = secId;
        }
      }
    });

    document.querySelectorAll(".mobile-nav-item").forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });
}
