/* ==========================================================================
   PARRA'S BISTRO - Mobile-First Engine & Interactive Logic
   ========================================================================== */

// --- DATASET: MENÚ COMPLETO DE PARRA'S BISTRO ---
const MENU_DATA = [

  // ============================================================
  // DESAYUNOS: EMPIEZA EL DÍA
  // ============================================================
  {
    id: "d1", name: "Plato de Fruta", category: "desayunos", price: 99.00,
    description: "Melón, papayo, piña y fresa, con un poco de yogurth natural.",
    image: "imagenes/fotos del lugar y platillos/plato-desayuno.jpg", badge: "Saludable"
  },
  {
    id: "d2", name: "Pan Dulce de la Casa", category: "desayunos", price: 0,
    description: "Pan dulce de la casa recién horneado. Consultar disponibilidad. Precio de acuerdo al tipo de pan.",
    image: "imagenes/fotos del lugar y platillos/roles-canela.jpg"
  },
  // HUEVOS AL GUSTO
  {
    id: "d3", name: "Huevos Estrellados", category: "desayunos", price: 109.00,
    description: "Con tiritas de tocino doraditas, acompañado de chilaquiles de la casa y frijoles con queso.",
    image: "imagenes/fotos del lugar y platillos/plato-desayuno.jpg"
  },
  {
    id: "d4", name: "Huevos Revueltos", category: "desayunos", price: 109.00,
    description: "Con jamón, salchicha, tocino, a la mexicana, con nopales o ejotes. Con chilaquiles de la casa y frijoles con queso.",
    image: "imagenes/fotos del lugar y platillos/plato-desayuno.jpg",
    options: ["Jamón", "Salchicha", "Tocino", "A la Mexicana", "Nopales", "Ejotes"]
  },
  // GUISADOS PREPARADOS
  {
    id: "d5", name: "Guisados Preparados", category: "desayunos", price: 130.00,
    description: "Con chilaquiles y frijoles. Combínalos por $19 extra o conviértelo en Desayuno Completo por $199 (fruta, café y jugo de naranja).",
    image: "imagenes/fotos del lugar y platillos/pizzas-bebidas-guisos.jpg", badge: "Tradicional",
    options: ["Rajas Poblanas con Pollo", "Lengua en Salsa Verde", "Machaca a la Mexicana", "Hígado Encebollado", "Chicharrón en Salsa Roja", "Bisteck Ranchero"]
  },
  // CHILAQUILES
  {
    id: "d6", name: "Chilaquiles de la Casa", category: "desayunos", price: 99.00,
    description: "Verdes o rojos. Top de crema, queso, cebolla, ensaladilla de la casa, frijoles con queso y huevo estrellado al gusto.",
    image: "imagenes/fotos del lugar y platillos/chilaquiles-verdes.jpg", badge: "Popular", popular: true,
    options: ["Salsa Verde", "Salsa Roja"]
  },
  {
    id: "d7", name: "Chilaquiles Poblanos", category: "desayunos", price: 132.00,
    description: "Bañados en salsa de chile poblano, con top de queso, rajas poblanas con pollo, ensaladilla de la casa y frijoles con queso.",
    image: "imagenes/fotos del lugar y platillos/chilaquiles-verdes.jpg"
  },
  {
    id: "d8", name: "Birria-Quiles", category: "desayunos", price: 165.00,
    description: "Bañados en salsa de birria, con top de crema, queso, ensaladilla de la casa, costra de queso, carne de birria tatemada y frijoles con queso.",
    image: "imagenes/fotos del lugar y platillos/chilaquiles-verdes.jpg", badge: "Especialidad", popular: true
  },
  {
    id: "d9", name: "Chilaquiles Parra's", category: "desayunos", price: 155.00,
    description: "Bañados en salsa especial de camarón con toque de picante, costra de queso, camarones al ajillo, crema, queso, ensaladilla de la casa y frijoles con queso.",
    image: "imagenes/fotos del lugar y platillos/chilaquiles-verdes.jpg", badge: "Firma", popular: true
  },
  {
    id: "d10", name: "Chilaquiles Rellenos", category: "desayunos", price: 165.00,
    description: "Rellenos de chicharrón con queso, bañados en salsa de chile secos, top de crema, queso, mix de ensaladilla y frijoles fritos con queso.",
    image: "imagenes/fotos del lugar y platillos/chilaquiles-verdes.jpg"
  },
  // OMELETES
  {
    id: "d11", name: "Omelete Sencillo", category: "desayunos", price: 125.00,
    description: "Tortilla de huevo con queso, con jamón, salchicha o tocino, acompañado de frijoles y chilaquiles de la casa.",
    image: "imagenes/fotos del lugar y platillos/plato-desayuno.jpg",
    options: ["Jamón", "Salchicha", "Tocino"]
  },
  {
    id: "d12", name: "Omelete Poblano", category: "desayunos", price: 175.00,
    description: "Tortilla de huevo rellena con queso y pollo, bañado en salsa poblana de la casa, con frijoles y chilaquiles. (Especialidad del chef).",
    image: "imagenes/fotos del lugar y platillos/plato-desayuno.jpg", badge: "Chef's Choice"
  },
  {
    id: "d13", name: "Omelete Hawaii", category: "desayunos", price: 165.00,
    description: "Tortilla de huevo rellena de queso, jamón salteado con cebolla, piña asada, chilaquiles y mix primavera y tomate cherry.",
    image: "imagenes/fotos del lugar y platillos/plato-desayuno.jpg"
  },
  {
    id: "d14", name: "Omelete del Mar", category: "desayunos", price: 180.00,
    description: "Tortilla de huevo con queso, salteado de vegetales a la mexicana, camarones al ajo, sobre salsa roja de camarón, con frijoles y chilaquiles.",
    image: "imagenes/fotos del lugar y platillos/plato-desayuno.jpg"
  },
  {
    id: "d15", name: "Omelete Champi y Espinaca", category: "desayunos", price: 180.00,
    description: "Tortilla de huevo con queso, rellena con champiñones salteados con espinaca, cebolla morada, tomate cherry confitado, tocino frito, hash brown y ensalada.",
    image: "imagenes/fotos del lugar y platillos/plato-desayuno.jpg"
  },
  {
    id: "d16", name: "Denver Omellete", category: "desayunos", price: 180.00,
    description: "Cubitos de jamón, tocino, cebolla, mix de pimientos morrones, queso manchego y americano, bolitas de papa, mix primavera y tomate cherry.",
    image: "imagenes/fotos del lugar y platillos/plato-desayuno.jpg"
  },

  // ============================================================
  // ESPECIALES DEL CHEF
  // ============================================================
  {
    id: "e1", name: "Arrachera Asada", category: "especiales", price: 295.00,
    description: "300 gr de arrachera, chorizo corona asado, quesadilla, frijoles con queso, chilaquiles y guacamole con pico de gallo.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg", badge: "Premium", popular: true
  },
  {
    id: "e2", name: "Desayuno Vaquero", category: "especiales", price: 295.00,
    description: "300 gr de Rib eye, 2 huevos estrellados o revueltos, papa hash brown, tomate, cebolla y morrón salteados, frijoles con queso de la casa.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg", badge: "Premium", popular: true
  },
  {
    id: "e3", name: "Quesa-Birrias (3 pz)", category: "especiales", price: 175.00,
    description: "3 Quesabirrias chicas de harina o maíz, doraditas, con costra de queso, cebolla, cilantro, cremoso de aguacate, acompañado con consomé. (Especialidad del chef).",
    image: "imagenes/fotos del lugar y platillos/tacos.jpg", badge: "Favorito", popular: true,
    options: ["Harina", "Maíz"]
  },
  {
    id: "e4", name: "Desayuno Americano", category: "especiales", price: 205.00,
    description: "2 piezas de huevo revuelto, 2 hot cakes, papas sazonadas con mantequilla y especias, tocino y salchicha ahumada doradito y miel de maple.",
    image: "imagenes/fotos del lugar y platillos/plato-desayuno.jpg"
  },
  {
    id: "e5", name: "Desayuno Campirano", category: "especiales", price: 205.00,
    description: "Machaca frita guisada con cebolla, tomate y serrano, con tamal de elote en salsa poblana con crema y queso, chilaquiles y frijoles.",
    image: "imagenes/fotos del lugar y platillos/plato-desayuno.jpg"
  },
  {
    id: "e6", name: "Pollo Caprese", category: "especiales", price: 275.00,
    description: "300 gr de pechuga a la plancha, gratinada con queso mozzarella, pesto de la casa, tomate cherry rostizado, ensalada con reducción de balsámico y bites de papa.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg"
  },

  // ============================================================
  // ENSALADAS DE LA CASA ($135.00)
  // ============================================================
  {
    id: "s1", name: "Ensalada Agridulce", category: "ensaladas", price: 135.00,
    description: "Lechuga, betabel, piña, arándanos, aceitunas negras, manzana verde, aderezo de miel mostaza, proteína a elección y crotones.",
    image: "imagenes/fotos del lugar y platillos/comida-evento.jpg", badge: "Saludable",
    options: ["Pollo", "Camarones", "Arrachera"]
  },
  {
    id: "s2", name: "Ensalada Parras", category: "ensaladas", price: 135.00,
    description: "Lechuga, brócoli, coliflor, elote, morrón, aguacate, pepino, aderezo de ajo con limón, proteína a elección y crotones.",
    image: "imagenes/fotos del lugar y platillos/comida-evento.jpg", badge: "Saludable",
    options: ["Pollo", "Camarones", "Arrachera"]
  },
  {
    id: "s3", name: "Hortalizas y Fresas", category: "ensaladas", price: 135.00,
    description: "Mix primavera, fresa, arándanos, pepino, nuez, queso parmesano, aderezo reducción de balsámico, proteína a elegir y crotones.",
    image: "imagenes/fotos del lugar y platillos/comida-evento.jpg",
    options: ["Pollo", "Camarones", "Arrachera"]
  },
  {
    id: "s4", name: "Pasta Lada (Ensalada)", category: "ensaladas", price: 135.00,
    description: "Pasta sazonada con pesto, tomate cherry, cebolla morada, pepino, aceitunas negras, top de queso parmesano, aderezo ranch y crotones.",
    image: "imagenes/fotos del lugar y platillos/pasta-con-camarones.jpg"
  },

  // ============================================================
  // PARA EMPEZAR & SNACKS
  // ============================================================
  {
    id: "sn1", name: "Guacamole con Totopos", category: "snacks", price: 89.00,
    description: "Aguacate molido, con pepino, cebolla, jitomate, cilantro y acompañado con totopos.",
    image: "imagenes/fotos del lugar y platillos/comida-evento.jpg", badge: "Para Empezar"
  },
  {
    id: "sn2", name: "Chistorra", category: "snacks", price: 199.00,
    description: "Chistorra asada, base de queso fundido, y top de tomate cherry y cebolla asada especial.",
    image: "imagenes/fotos del lugar y platillos/comida-evento.jpg"
  },
  {
    id: "sn3", name: "Elotitos", category: "snacks", price: 99.00,
    description: "Elote amarillo asado, bañado en salsa holandesa de la casa, con top de parmesano, hojuelas de chile y cebollín.",
    image: "imagenes/fotos del lugar y platillos/comida-evento.jpg"
  },
  {
    id: "sn4", name: "Papas Francesas", category: "snacks", price: 65.00,
    description: "Crujientes papas francesas de la casa.",
    image: "imagenes/fotos del lugar y platillos/hotdog+papas.jpg"
  },
  {
    id: "sn5", name: "Papas Gajo", category: "snacks", price: 72.00,
    description: "Papas gajo horneadas con especias de la casa.",
    image: "imagenes/fotos del lugar y platillos/hotdog+papas.jpg"
  },
  {
    id: "sn6", name: "Aros de Cebolla", category: "snacks", price: 85.00,
    description: "Aros de cebolla empanizados y dorados.",
    image: "imagenes/fotos del lugar y platillos/hotdog+papas.jpg"
  },
  {
    id: "sn7", name: "Nuggets", category: "snacks", price: 85.00,
    description: "Nuggets de pollo dorados y crujientes.",
    image: "imagenes/fotos del lugar y platillos/boneless.jpg"
  },
  {
    id: "sn8", name: "Dedos de Queso", category: "snacks", price: 100.00,
    description: "Dedos de queso empanizados y gratinados.",
    image: "imagenes/fotos del lugar y platillos/boneless.jpg"
  },
  {
    id: "sn9", name: "Salchichas Fritas", category: "snacks", price: 49.00,
    description: "Salchichas fritas doraditas.",
    image: "imagenes/fotos del lugar y platillos/hotdog+papas.jpg"
  },
  {
    id: "sn10", name: "Nachos con Carne", category: "snacks", price: 179.00,
    description: "Totopos bañados en salsa de queso, jalapeño, guacamole con pico de gallo, crema, queso cotija y carne asada picada.",
    image: "imagenes/fotos del lugar y platillos/comida-evento.jpg", badge: "Popular", popular: true
  },

  // ============================================================
  // ALITAS Y BONELES
  // ============================================================
  {
    id: "ab1", name: "Alitas (300 gr)", category: "alitas", price: 135.00,
    description: "300 gr de alitas bañadas en la salsa de tu preferencia, con papas francesas, apio, zanahoria y ranch.",
    image: "imagenes/fotos del lugar y platillos/boneless.jpg", badge: "Popular", popular: true,
    options: ["BBQ", "BBQ/Hot", "Búfalo", "Tropical", "Chipotle/Naranja", "Mango/Habanero"]
  },
  {
    id: "ab2", name: "Boneles (300 gr)", category: "alitas", price: 145.00,
    description: "300 gr de Boneles bañados en la salsa de tu preferencia, con papas francesas, apio, zanahoria y ranch.",
    image: "imagenes/fotos del lugar y platillos/boneless-bbq.jpg", badge: "Popular", popular: true,
    options: ["BBQ", "BBQ/Hot", "Búfalo", "Tropical", "Chipotle/Naranja", "Mango/Habanero"]
  },

  // ============================================================
  // PIZZAS A LA LEÑA
  // ============================================================
  {
    id: "p1", name: "Margarita", category: "pizzas", price: 210.00,
    description: "Salsa de tomate, queso mozzarella, tomate cherry, espinaca y salsa pesto.",
    image: "imagenes/fotos del lugar y platillos/pizza1.jpg"
  },
  {
    id: "p2", name: "Peperoni & Salami", category: "pizzas", price: 210.00,
    description: "Salsa de tomate, peperoni y salami y queso mozzarella.",
    image: "imagenes/fotos del lugar y platillos/pizza2.jpg", popular: true
  },
  {
    id: "p3", name: "Suprema", category: "pizzas", price: 269.00,
    description: "Salsa de tomate, queso mozzarella, salchicha ahumada, champiñones, cebolla morada, morrón y aceitunas negras.",
    image: "imagenes/fotos del lugar y platillos/pizza3.jpg"
  },
  {
    id: "p4", name: "Hawaiiana", category: "pizzas", price: 210.00,
    description: "Salsa de tomate, queso mozzarella, cebolla y piña rostizadas y jamón.",
    image: "imagenes/fotos del lugar y platillos/pizza1.jpg"
  },
  {
    id: "p5", name: "Carnívora", category: "pizzas", price: 289.00,
    description: "Salsa martajada verde, arrachera, chorizo, cebolla morada, cilantro, cremoso de aguacate y rajas de jalapeño fresco.",
    image: "imagenes/fotos del lugar y platillos/pizza2.jpg", badge: "Top Ventas", popular: true
  },
  {
    id: "p6", name: "Pizza Boneles", category: "pizzas", price: 255.00,
    description: "Salsa de tomate, queso mozzarella, mini boneles de pollo, salsa bbq/hot o búfalo a elegir, ranch y cebollín.",
    image: "imagenes/fotos del lugar y platillos/pizza3.jpg", badge: "Recomendada", popular: true,
    options: ["BBQ", "BBQ/Hot", "Búfalo"]
  },
  {
    id: "p7", name: "Pizza Bianca", category: "pizzas", price: 255.00,
    description: "Salsa blanca con top de camarones, cebolla morada, espinacas, alcaparras, queso manchego y queso parmesano.",
    image: "imagenes/fotos del lugar y platillos/pizza1.jpg", badge: "Gourmet"
  },

  // ============================================================
  // HAMBURGUESAS CLÁSICAS
  // ============================================================
  {
    id: "h1", name: "Burguer Lunch", category: "hamburguesas", price: 162.00,
    description: "Pan brioche, carne con queso americano y manchego, tocino, huevo estrellado al gusto, cebolla asada, tomate, lechuga, ketchup, mostaza, jalapeño y papas francesas.",
    image: "imagenes/fotos del lugar y platillos/hamburgesa.jpg", badge: "Estrella", popular: true
  },
  {
    id: "h2", name: "Americana Burguer", category: "hamburguesas", price: 162.00,
    description: "Pan brioche, carne, queso manchego y americano, jamón, aros de cebolla, salsa bbq, tomate, lechuga, ketchup, mostaza, jalapeños y papas francesas.",
    image: "imagenes/fotos del lugar y platillos/hamburguesa2.jpg", popular: true
  },
  {
    id: "h3", name: "Hamburguesa Doble", category: "hamburguesas", price: 162.00,
    description: "Dos carnes, con queso manchego y queso americano.",
    image: "imagenes/fotos del lugar y platillos/hamburgesa.jpg"
  },
  {
    id: "h4", name: "Mar y Tierra", category: "hamburguesas", price: 110.00,
    description: "Carne con queso, camarones y guacamole.",
    image: "imagenes/fotos del lugar y platillos/hamburgesa.jpg", badge: "Special"
  },
  {
    id: "h5", name: "Chuleta", category: "hamburguesas", price: 118.00,
    description: "Carne con queso, chuleta ahumada y mermelada de tocino.",
    image: "imagenes/fotos del lugar y platillos/hamburguesa2.jpg"
  },
  {
    id: "h6", name: "Hawaii Burguer", category: "hamburguesas", price: 98.00,
    description: "Carne con queso, jamón y piña.",
    image: "imagenes/fotos del lugar y platillos/hamburgesa.jpg"
  },
  {
    id: "h7", name: "Champiqueso", category: "hamburguesas", price: 98.00,
    description: "Carne con queso y champiñones frescos salteados.",
    image: "imagenes/fotos del lugar y platillos/hamburguesa2.jpg"
  },
  {
    id: "h8", name: "Asadera", category: "hamburguesas", price: 86.00,
    description: "Carne con queso y jamón.",
    image: "imagenes/fotos del lugar y platillos/hamburgesa.jpg"
  },
  {
    id: "h9", name: "Salchiqueso", category: "hamburguesas", price: 86.00,
    description: "Carne con queso y salchicha.",
    image: "imagenes/fotos del lugar y platillos/hamburgesa.jpg"
  },
  {
    id: "h10", name: "Pollo Burguer", category: "hamburguesas", price: 90.00,
    description: "Medallón de pollo con queso, tocino y guacamole.",
    image: "imagenes/fotos del lugar y platillos/hamburguesa2.jpg"
  },
  // SMASH BURGUER
  {
    id: "sm1", name: "Smash Burger BBQ", category: "hamburguesas", price: 104.00,
    description: "Carne 'smasheada', queso americano, tocino, aros de cebolla y salsa bbq. Con cebolla cruda, tomate, lechuga, ketchup, mostaza, mayonesa, jalapeños y pepinillos.",
    image: "imagenes/fotos del lugar y platillos/hamburgesa.jpg", badge: "Smash"
  },
  {
    id: "sm2", name: "Smash Americana", category: "hamburguesas", price: 104.00,
    description: "Carne 'smasheada', queso americano, tocino y jamón.",
    image: "imagenes/fotos del lugar y platillos/hamburguesa2.jpg", badge: "Smash"
  },
  {
    id: "sm3", name: "Cruji Pollo", category: "hamburguesas", price: 119.00,
    description: "Tender de pollo con tu salsa de alitas preferida o naturales, con queso americano.",
    image: "imagenes/fotos del lugar y platillos/hamburguesa2.jpg", badge: "Smash",
    options: ["BBQ", "BBQ/Hot", "Búfalo", "Mango/Habanero", "Naturales"]
  },

  // ============================================================
  // HOT DOGS
  // ============================================================
  {
    id: "hd1", name: "Chili Dogo", category: "hotdogs", price: 75.00,
    description: "Salchicha dorada, salsa chili y queso gratinado.",
    image: "imagenes/fotos del lugar y platillos/hotdog+papas.jpg", badge: "Popular", popular: true
  },
  {
    id: "hd2", name: "Hot Dog Hawaii", category: "hotdogs", price: 72.00,
    description: "Salchicha frita, queso manchego, jamón y piña.",
    image: "imagenes/fotos del lugar y platillos/hotdog+papas.jpg"
  },
  {
    id: "hd3", name: "Hot Dog Guacamole", category: "hotdogs", price: 67.00,
    description: "Salchicha frita, guacamole con pico de gallo.",
    image: "imagenes/fotos del lugar y platillos/hotdog+papas.jpg"
  },
  {
    id: "hd4", name: "Champiqueso Dog", category: "hotdogs", price: 69.00,
    description: "Salchicha frita, queso manchego y champiñones.",
    image: "imagenes/fotos del lugar y platillos/hotdog+papas.jpg"
  },
  {
    id: "hd5", name: "Asadero Dog", category: "hotdogs", price: 49.00,
    description: "Salchicha frita y queso manchego.",
    image: "imagenes/fotos del lugar y platillos/hotdog+papas.jpg"
  },
  {
    id: "hd6", name: "Tocino Dog", category: "hotdogs", price: 49.00,
    description: "Salchicha frita con tocino.",
    image: "imagenes/fotos del lugar y platillos/hotdog+papas.jpg"
  },
  {
    id: "hd7", name: "Hot Dog Sencillo", category: "hotdogs", price: 45.00,
    description: "Salchicha frita con cebolla, tomate, mayonesa, mostaza, ketchup y chipotle.",
    image: "imagenes/fotos del lugar y platillos/hotdog+papas.jpg"
  },

  // ============================================================
  // TACOS FIFÍ'S Y TACOS
  // ============================================================
  {
    id: "tf1", name: "Tacos Arrachera Fifí (3 pz)", category: "tacos", price: 239.00,
    description: "Orden de 3 tacos con 'bastones' de arrachera, costra de queso, cebolla y cilantro, cremoso de aguacate y cebollita asada.",
    image: "imagenes/fotos del lugar y platillos/tacos.jpg", badge: "Fifí", popular: true
  },
  {
    id: "tf2", name: "Tacos Rib Eye Fifí (3 pz)", category: "tacos", price: 249.00,
    description: "Orden de 3 tacos con gaonera de Rib eye, sellada, costra de queso, frijoles puercos, cebolla y cilantro, aguacate y cebollita asada. Recomendados con harina.",
    image: "imagenes/fotos del lugar y platillos/tacos2.jpg", badge: "Fifí", popular: true
  },
  {
    id: "t1", name: "Taco de Asada", category: "tacos", price: 27.00,
    description: "Taco suave de carne asada con cilantro y cebolla.",
    image: "imagenes/fotos del lugar y platillos/tacos.jpg"
  },
  {
    id: "t2", name: "Taco de Chorizo Corona", category: "tacos", price: 27.00,
    description: "Taco de chorizo Corona con cilantro y cebolla.",
    image: "imagenes/fotos del lugar y platillos/tacos.jpg"
  },
  {
    id: "t3", name: "Taco de Pastor", category: "tacos", price: 27.00,
    description: "Taco de pastor con cilantro y cebolla.",
    image: "imagenes/fotos del lugar y platillos/tacos2.jpg"
  },
  {
    id: "t4", name: "Taco de Lengua", category: "tacos", price: 27.00,
    description: "Taco de lengua con cilantro y cebolla.",
    image: "imagenes/fotos del lugar y platillos/tacos.jpg"
  },
  {
    id: "t5", name: "Taco de Tripa", category: "tacos", price: 35.00,
    description: "Taco de tripa bien doradita con cilantro y cebolla.",
    image: "imagenes/fotos del lugar y platillos/tacos2.jpg"
  },
  // PELLIZCADAS Y QUESADILLAS
  {
    id: "pq1", name: "Pellizcada / Quesadilla", category: "tacos", price: 75.00,
    description: "Con queso fundido. Elige guisado: Asada, Chorizo Corona, Pastor o Lengua.",
    image: "imagenes/fotos del lugar y platillos/tacos.jpg",
    options: ["Asada", "Chorizo Corona", "Pastor", "Lengua"]
  },
  {
    id: "pq2", name: "Pellizcada / Quesadilla de Tripa", category: "tacos", price: 85.00,
    description: "Con queso fundido y tripa bien doradita.",
    image: "imagenes/fotos del lugar y platillos/tacos2.jpg"
  },

  // ============================================================
  // BURRITAS, BAGUETTES, FAJITAS Y SANDWICHES
  // ============================================================
  {
    id: "bu1", name: "Burrita de Pollo", category: "burritas", price: 140.00,
    description: "Tortilla de harina grande, untada con guacamole, queso manchego, lechuga picada, guisado tipo fajitas y papas francesas.",
    image: "imagenes/fotos del lugar y platillos/burritos.jpg"
  },
  {
    id: "bu2", name: "Burrita de Res", category: "burritas", price: 155.00,
    description: "Tortilla de harina grande, untada con guacamole, queso manchego, lechuga picada, guisado tipo fajitas y papas francesas.",
    image: "imagenes/fotos del lugar y platillos/burritos.jpg", popular: true
  },
  {
    id: "bu3", name: "Burrita de Camarón", category: "burritas", price: 175.00,
    description: "Tortilla de harina grande, untada con guacamole, queso manchego, lechuga picada, guisado tipo fajitas y papas francesas.",
    image: "imagenes/fotos del lugar y platillos/burritos.jpg"
  },
  {
    id: "fj1", name: "Fajitas de Pollo", category: "burritas", price: 139.00,
    description: "Salteado de cebolla, morrón, tomate, gratinado con queso, toque de salsas negras y jugo de naranja, con pasta blanca y ensalada de la casa.",
    image: "imagenes/fotos del lugar y platillos/comida-evento.jpg"
  },
  {
    id: "fj2", name: "Fajitas de Res", category: "burritas", price: 149.00,
    description: "Salteado de cebolla, morrón, tomate, gratinado con queso, toque de salsas negras y jugo de naranja, con pasta blanca y ensalada de la casa.",
    image: "imagenes/fotos del lugar y platillos/comida-evento.jpg", popular: true
  },
  {
    id: "fj3", name: "Fajitas de Camarón", category: "burritas", price: 179.00,
    description: "Salteado de cebolla, morrón, tomate, gratinado con queso, toque de salsas negras y jugo de naranja, con pasta blanca y ensalada de la casa.",
    image: "imagenes/fotos del lugar y platillos/pasta-con-camarones.jpg"
  },
  {
    id: "bg1", name: "Baguette de Pollo", category: "burritas", price: 92.00,
    description: "Pan a elección (Blanco, Integral, Ajo, Especias) con pollo, cebolla morada, tomate, lechuga, aguacate, pepino y aderezos de la casa.",
    image: "imagenes/fotos del lugar y platillos/sandwich.jpg",
    options: ["Blanco", "Integral", "Ajo", "Especias"]
  },
  {
    id: "bg2", name: "Baguette de Jamón", category: "burritas", price: 89.00,
    description: "Pan a elección con jamón, cebolla morada, tomate, lechuga, aguacate, pepino y aderezos de la casa.",
    image: "imagenes/fotos del lugar y platillos/sandwich.jpg",
    options: ["Blanco", "Integral", "Ajo", "Especias"]
  },
  {
    id: "bg3", name: "Baguette de Res", category: "burritas", price: 99.00,
    description: "Pan a elección con res, cebolla morada, tomate, lechuga, aguacate, pepino y aderezos de la casa.",
    image: "imagenes/fotos del lugar y platillos/sandwich.jpg",
    options: ["Blanco", "Integral", "Ajo", "Especias"]
  },
  {
    id: "sw1", name: "Sandwich de Pollo", category: "burritas", price: 69.00,
    description: "Sandwich de pollo con aderezos de la casa.",
    image: "imagenes/fotos del lugar y platillos/sandwich.jpg"
  },
  {
    id: "sw2", name: "Sandwich de Jamón", category: "burritas", price: 69.00,
    description: "Sandwich de jamón con aderezos de la casa.",
    image: "imagenes/fotos del lugar y platillos/sandwich.jpg"
  },
  {
    id: "sw3", name: "Club Sandwich", category: "burritas", price: 169.00,
    description: "Torre de 3 panes rellenos de jamón, queso amarillo, tocino, queso manchego, pollo, cebolla, tomate, lechuga y aguacate, con papas fritas.",
    image: "imagenes/fotos del lugar y platillos/sandwich.jpg", badge: "Popular", popular: true
  },
  {
    id: "sw4", name: "Sandwich Fit", category: "burritas", price: 169.00,
    description: "Pan integral rebanada gruesa, aguacate, espinacas, germinado, pepino, jamón de pechuga de pavo, toque de pesto, panela y yogurth con frutos.",
    image: "imagenes/fotos del lugar y platillos/sandwich.jpg", badge: "Saludable"
  },
  {
    id: "sw5", name: "New York Sandwich", category: "burritas", price: 169.00,
    description: "Pan blanco casero rebanada gruesa, esponjoso omelete, tocino, jamón, untable de queso crema, cebolla asada, bolitas de papa y queso de nachos.",
    image: "imagenes/fotos del lugar y platillos/sandwich.jpg"
  },

  // ============================================================
  // PASTAS
  // ============================================================
  {
    id: "pa1", name: "Pasta Alfredo", category: "pastas", price: 215.00,
    description: "Fetuccini en salsa alfredo con camarones o pollo a elegir, salteados con ajo y vino blanco, top de zuccini asada y brotes de la casa.",
    image: "imagenes/fotos del lugar y platillos/pasta-con-camarones.jpg", badge: "Gourmet", popular: true,
    options: ["Camarones", "Pollo"]
  },
  {
    id: "pa2", name: "Pasta al Pesto", category: "pastas", price: 215.00,
    description: "Fetuccini en pesto cremoso de la casa, arrachera al término de elección, tomate cherry confitado y brotes de la casa.",
    image: "imagenes/fotos del lugar y platillos/pasta-con-camarones.jpg"
  },
  {
    id: "pa3", name: "Lasaña a la Leña", category: "pastas", price: 229.00,
    description: "Láminas de pasta con ragú de res, salsa bechamel, mix de quesos, gratinada en horno de leña y acompañada de ensalada de la casa.",
    image: "imagenes/fotos del lugar y platillos/pasta-con-camarones.jpg", badge: "Horno de Leña"
  },

  // ============================================================
  // CORTES DE CARNE Y PARRILLADAS
  // ============================================================
  {
    id: "c1", name: "Rib Eye (350 gr)", category: "cortes", price: 335.00,
    description: "350 gr de Rib eye, acompañado de 2 guarniciones a elegir: Puré de Papa, Frijoles Puercos, Ensalada de la Casa, Elote Asado o Cebollitas Asadas.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg", badge: "Premium", popular: true,
    options: ["Puré de Papa", "Frijoles Puercos", "Ensalada de la Casa", "Elote Asado", "Cebollitas Asadas"]
  },
  {
    id: "c2", name: "Arrachera (320 gr)", category: "cortes", price: 305.00,
    description: "320 gr de Arrachera acompañado con 2 guarniciones a elegir.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg", popular: true,
    options: ["Puré de Papa", "Frijoles Puercos", "Ensalada de la Casa", "Elote Asado", "Cebollitas Asadas"]
  },
  {
    id: "c3", name: "Cow Boy (400 gr)", category: "cortes", price: 395.00,
    description: "400 gr de Cowboy acompañado con 2 guarniciones a elegir.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg",
    options: ["Puré de Papa", "Frijoles Puercos", "Ensalada de la Casa", "Elote Asado", "Cebollitas Asadas"]
  },
  {
    id: "c4", name: "T-Bone (500 gr)", category: "cortes", price: 445.00,
    description: "500 gr de T-Bone, asado al término de elección, con 2 guarniciones a elegir.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg", badge: "Gran Corte",
    options: ["Puré de Papa", "Frijoles Puercos", "Ensalada de la Casa", "Elote Asado", "Cebollitas Asadas"]
  },
  {
    id: "c5", name: "Costilla BBQ", category: "cortes", price: 275.00,
    description: "Costillar de cerdo ahumado y horneado con salsa bbq, acompañado de elote amarillo y puré de papa.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg"
  },
  {
    id: "c6", name: "Pechuga de Pollo a las Brasas", category: "cortes", price: 275.00,
    description: "Pechuga de pollo asada a las brasas, acompañado con ensalada de casa y puré de papa.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg"
  },
  // PARRILLADAS
  {
    id: "pr1", name: "Parrillada Pareja", category: "cortes", price: 800.00,
    description: "Rib eye 350 gr, chistorra, 2 guarniciones a elección y 1 jarra de clericot.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg", badge: "Para 2", popular: true
  },
  {
    id: "pr2", name: "Parrillada Amigos (~4 personas)", category: "cortes", price: 880.00,
    description: "½ Kg Sirloin, Arrachera 300 gr, orden de chorizo argentino, frijoles puercos, 5 quesadillas de harina, cebollitas asadas, tortillas y salsas.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg", badge: "Compartir", popular: true
  },
  {
    id: "pr3", name: "Parrillada Familia (~6-8 personas)", category: "cortes", price: 1400.00,
    description: "½ Kg Sirloin, Rib eye 350 gr, Arrachera 300 gr, Chistorra, Chorizo Argentino, Frijoles Puercos, Guacamole, 8 quesadillas de harina, cebollitas asadas, tortillas y salsas.",
    image: "imagenes/fotos del lugar y platillos/charola-carne-asada.jpg", badge: "Banquete"
  },

  // ============================================================
  // POSTRES
  // ============================================================
  {
    id: "po1", name: "Brownie de Chocolate", category: "postres", price: 115.00,
    description: "Húmedo y chocolatoso brownie de chocolate, espolvoreado con azúcar glass, bola de helado y compota de frutos rojos.",
    image: "imagenes/fotos del lugar y platillos/roles-canela.jpg", badge: "Favorito", popular: true
  },
  {
    id: "po2", name: "Copa de Helado", category: "postres", price: 45.00,
    description: "Copita con helado de la casa, top de chocolate líquido y chispitas de colores. Consultar sabores con tu mesero.",
    image: "imagenes/fotos del lugar y platillos/roles-canela.jpg"
  },
  {
    id: "po3", name: "Flan Napolitano", category: "postres", price: 89.00,
    description: "Cremoso flan con caramelo, top de crema batida, fresa y tropiezos de nuez.",
    image: "imagenes/fotos del lugar y platillos/roles-canela.jpg"
  },
  {
    id: "po4", name: "Crepas Dulces", category: "postres", price: 89.00,
    description: "Rellena de dulce a elección, fruta del día coronada con helado.",
    image: "imagenes/fotos del lugar y platillos/roles-canela.jpg",
    options: ["Nutella", "Cajeta", "Lechera"]
  },
  {
    id: "po5", name: "Hot Cakes", category: "postres", price: 115.00,
    description: "3 piezas de esponjosos hot cakes, con top de fruta, cuadrito de mantequilla y dulce a elección.",
    image: "imagenes/fotos del lugar y platillos/roles-canela.jpg",
    options: ["Miel de Maple", "Cajeta", "Nutella"]
  },
  {
    id: "po6", name: "Pan Francés", category: "postres", price: 119.00,
    description: "Crema sabor vainilla, coronada con azúcar caramelizada y frutos rojos.",
    image: "imagenes/fotos del lugar y platillos/roles-canela.jpg"
  },

  // ============================================================
  // BEBIDAS SIN ALCOHOL
  // ============================================================
  {
    id: "b1", name: "Café Americano (Refil)", category: "bebidas", price: 40.00,
    description: "Café americano con relleno incluido.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg"
  },
  {
    id: "b2", name: "Capuccino", category: "bebidas", price: 48.00,
    description: "Capuccino clásico.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg"
  },
  {
    id: "b3", name: "Capuccino Vainilla o Caramelo", category: "bebidas", price: 55.00,
    description: "Capuccino caliente sabor vainilla o caramelo.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg",
    options: ["Vainilla", "Caramelo"]
  },
  {
    id: "b4", name: "Refresco 600ml", category: "bebidas", price: 37.00,
    description: "Refresco 600 ml de la marca de tu preferencia.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg"
  },
  {
    id: "b5", name: "Agua Fresca / Limonada / Jugos", category: "bebidas", price: 25.00,
    description: "Limonada / Naranjada / Fresada (500ml $49 | 1Lt $89). Limonjito (500ml $55). Agua Fresca (500ml $25 | 1Lt $50). Jugo Naranja (500ml $49). Jugo Verde (500ml $65).",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg",
    options: ["Limonada", "Naranjada", "Fresada", "Limonjito", "Agua Fresca", "Jugo Naranja", "Jugo Verde"]
  },
  {
    id: "b6", name: "Malteada", category: "bebidas", price: 54.00,
    description: "Malteada cremosa artesanal. 500ml: $54 | 1Lt: $95.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg",
    options: ["Plátano", "Vainilla", "Chocolate", "Fresa", "Frutos Rojos"]
  },
  {
    id: "b7", name: "Soda con Jellys (Base Limonada)", category: "bebidas", price: 89.00,
    description: "Soda refrescante con perlas popping jellys. Sabores: Pink Limonada, Blueberry o Maracuyá.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg", badge: "Trendy", popular: true,
    options: ["Pink Limonada", "Blueberry", "Maracuyá"]
  },
  {
    id: "b8", name: "Latte con Jellys (Base Leche)", category: "bebidas", price: 99.00,
    description: "Café frío cremoso con perlas popping jellys.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg", badge: "Trendy",
    options: ["Café y Vainilla", "Café y Caramelo"]
  },
  // COCTELES
  {
    id: "b9", name: "Mojito", category: "bebidas", price: 95.00,
    description: "Ron, menta, jarabe, jugo de limón, sprite.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg", badge: "Coctel"
  },
  {
    id: "b10", name: "Piña Colada", category: "bebidas", price: 99.00,
    description: "Ron, jugo de piña, kalahua y carnation.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg", badge: "Coctel"
  },
  {
    id: "b11", name: "Margarita (Elige Sabor)", category: "bebidas", price: 95.00,
    description: "Tequila, sal, jugo de limón, contoy y squirt. Sabores: Limón, Fresa o Maracuyá.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg", badge: "Coctel", popular: true,
    options: ["Limón", "Fresa", "Maracuyá"]
  },
  {
    id: "b12", name: "Cantarito", category: "bebidas", price: 95.00,
    description: "Tequila, controy, sal, limón, jugo naranja y squirt.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg", badge: "Coctel", popular: true
  },
  {
    id: "b13", name: "Azulito", category: "bebidas", price: 95.00,
    description: "Vodka, blue curazo y sprite.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg", badge: "Coctel"
  },
  {
    id: "b14", name: "Gin Tonic / Frutos Rojos", category: "bebidas", price: 99.00,
    description: "Ginebra, jugo de limón y agua tónica con frutos rojos.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg", badge: "Coctel"
  },
  {
    id: "b15", name: "Clericot", category: "bebidas", price: 99.00,
    description: "Vino tinto, jarabe, jugo limón, sprite, mix de frutos macerados.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg", badge: "Coctel"
  },
  {
    id: "b16", name: "Española", category: "bebidas", price: 92.00,
    description: "Vino tinto, cerveza clara, granadina.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg", badge: "Coctel"
  },
  {
    id: "b17", name: "Carajillo", category: "bebidas", price: 119.00,
    description: "Licor 43, café espresso.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg", badge: "Coctel"
  },
  {
    id: "b18", name: "Mezcalita (Elige Sabor)", category: "bebidas", price: 115.00,
    description: "Mezcal artesanal, jugo de limón, sal y jarabe natural. Sabores: Jamaica, Maracuyá o Frutos Rojos.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg", badge: "Coctel", popular: true,
    options: ["Jamaica", "Maracuyá", "Frutos Rojos"]
  },
  // CERVEZAS Y MICHELADAS
  {
    id: "b19", name: "Michelada", category: "bebidas", price: 85.00,
    description: "Clásica: $85. Tamarindo o Mango: $92.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg", badge: "Chela",
    options: ["Clásica ($85)", "Tamarindo ($92)", "Mango ($92)"]
  },
  {
    id: "b20", name: "Cerveza Media (355ml)", category: "bebidas", price: 45.00,
    description: "Miller, Indio, XX Laguer, Ultra, TKT Light, Heineken, Corona Extra, Corona Light, Pacífico, Pacífico Suave — $45. Modelo Especial / Negra Modelo — $55.",
    image: "imagenes/fotos del lugar y platillos/bebida-jamaica.jpg", badge: "Chela",
    options: ["Miller $45", "Indio $45", "XX Laguer $45", "Heineken $45", "Corona Extra $45", "Pacífico $45", "Modelo Especial $55", "Negra Modelo $55"]
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

// --- CATEGORY CONFIG FOR SECTION HEADERS ---
const CATEGORY_CONFIG = {
  desayunos:    { label: "Desayunos",              icon: "fa-egg",           subtitle: "Chilaquiles · Omeletes · Huevos · Guisados" },
  especiales:   { label: "Especiales del Chef",    icon: "fa-star",          subtitle: "Platillos premium de temporada" },
  ensaladas:    { label: "Ensaladas de la Casa",   icon: "fa-leaf",          subtitle: "Frescas y balanceadas con proteína a elegir" },
  snacks:       { label: "Para Empezar & Snacks",  icon: "fa-cookie-bite",   subtitle: "Para botanear o compartir" },
  alitas:       { label: "Alitas & Boneles",       icon: "fa-fire-burner",   subtitle: "6 salsas a elegir · BBQ, Búfalo, Mango/Habanero…" },
  pizzas:       { label: "Pizzas a la Leña",       icon: "fa-pizza-slice",   subtitle: "Horneadas en horno de leña artesanal" },
  hamburguesas: { label: "Hamburguesas & Smash",   icon: "fa-burger",        subtitle: "Clásicas, Smash y opciones de pollo" },
  hotdogs:      { label: "Hot Dogs",               icon: "fa-hotdog",        subtitle: "Dorados y llenos de sabor" },
  tacos:        { label: "Tacos, Fifís & Quesadillas", icon: "fa-pepper-hot","subtitle": "Tacos Fifís premium · Tacos sencillos · Pellizcadas" },
  burritas:     { label: "Burritas, Fajitas & Sandwiches", icon: "fa-utensils", subtitle: "Burritas · Baguettes · Fajitas · Club Sandwich" },
  pastas:       { label: "Pastas",                 icon: "fa-bowl-food",     subtitle: "Fetuccini Alfredo · Pesto · Lasaña a la leña" },
  cortes:       { label: "Cortes de Carne & Parrilladas", icon: "fa-drumstick-bite", subtitle: "Rib Eye · Arrachera · T-Bone · Parrilladas" },
  postres:      { label: "Postres",                icon: "fa-cookie",        subtitle: "El dulce final perfecto" },
  bebidas:      { label: "Bebidas & Coctelería",   icon: "fa-wine-glass",    subtitle: "Sin alcohol · Cocteles · Cervezas · Micheladas" }
};

const CATEGORY_ORDER = [
  "desayunos","especiales","ensaladas","pizzas","hamburguesas","hotdogs",
  "tacos","burritas","pastas","cortes","alitas","snacks","postres","bebidas"
];

// --- RENDER MENU (FULL GROUPED LAYOUT) ---
function renderMenu() {
  const grid = document.getElementById("menu-grid");
  const expandContainer = document.getElementById("menu-expand-container");
  if (!grid) return;
  if (expandContainer) expandContainer.innerHTML = "";

  // Search mode: flat filtered list across all categories
  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase();
    const filtered = MENU_DATA.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-8 bg-white rounded-2xl border border-stone-200 p-6">
          <i class="fa-solid fa-utensils text-3xl text-stone-300 mb-2 block"></i>
          <h3 class="text-base font-bold text-stone-700 mt-2">No encontramos platillos con "${searchQuery}"</h3>
          <button onclick="clearSearch()" class="mt-3 px-4 py-1.5 bg-[#c04828] text-white font-bold text-xs rounded-full shadow-md">Ver todo el menú</button>
        </div>
      `;
      return;
    }
    grid.innerHTML = `<div class="col-span-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">${filtered.map(item => renderItemCard(item)).join('')}</div>`;
    return;
  }

  // Single category mode: show all items of that category
  if (currentCategory !== "todos") {
    const filtered = MENU_DATA.filter(item => item.category === currentCategory);
    const cfg = CATEGORY_CONFIG[currentCategory] || { label: currentCategory, icon: "fa-utensils", subtitle: "" };
    grid.innerHTML = `
      ${renderSectionHeader(cfg, filtered.length)}
      <div class="col-span-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        ${filtered.map(item => renderItemCard(item)).join('')}
      </div>
    `;
    return;
  }

  // "Todos" mode: show all categories as sections
  let html = "";
  CATEGORY_ORDER.forEach(cat => {
    const items = MENU_DATA.filter(item => item.category === cat);
    if (items.length === 0) return;
    const cfg = CATEGORY_CONFIG[cat] || { label: cat, icon: "fa-utensils", subtitle: "" };
    html += `
      <div class="col-span-full" id="section-${cat}">
        ${renderSectionHeader(cfg, items.length)}
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          ${items.map(item => renderItemCard(item)).join('')}
        </div>
      </div>
    `;
  });
  grid.innerHTML = html;
}

function renderSectionHeader(cfg, count) {
  return `
    <div class="col-span-full flex items-center gap-3 mb-2 mt-4 pt-4 border-t border-stone-200 first:border-0 first:mt-0 first:pt-0">
      <div class="flex-shrink-0 w-9 h-9 rounded-full bg-[#c04828]/10 flex items-center justify-center">
        <i class="fa-solid ${cfg.icon} text-[#c04828] text-sm"></i>
      </div>
      <div class="flex-1 min-w-0">
        <h3 class="font-serif text-base font-bold text-stone-900 leading-tight">${cfg.label}</h3>
        ${cfg.subtitle ? `<p class="text-[10px] text-stone-400 leading-tight truncate">${cfg.subtitle}</p>` : ''}
      </div>
      <span class="flex-shrink-0 text-[10px] font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">${count} opciones</span>
    </div>
  `;
}

function renderItemCard(item) {
  const priceDisplay = item.price === 0 ? '<span class="font-bold text-[#1e6b52] text-xs whitespace-nowrap">Consultar</span>' : `<span class="font-bold text-[#c04828] text-sm whitespace-nowrap">$${item.price.toFixed(2)}</span>`;
  const badgeClass = item.badge && (item.badge.includes('Smash') || item.badge.includes('Fifí') || item.badge.includes('Gourmet') || item.badge.includes('Horno')) ? 'bg-[#1e6b52] text-white' : 'bg-[#c04828] text-white';
  return `
    <div class="dish-card animate-fade-in">
      <div class="dish-img-wrapper" onclick="openDishDetailModal('${item.id}')">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='imagenes/poster.png'">
        ${item.badge ? `<span class="dish-badge-tag ${badgeClass}">${item.badge}</span>` : ''}
        ${item.popular ? `<span class="absolute top-1 left-1 bg-amber-400 text-stone-900 text-[9px] font-extrabold px-1.5 py-0.5 rounded-full leading-none">⭐ Popular</span>` : ''}
      </div>
      <div class="p-3 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start gap-1 mb-1">
            <h3 class="font-serif text-sm font-bold text-stone-900 leading-tight line-clamp-2 cursor-pointer" onclick="openDishDetailModal('${item.id}')">${item.name}</h3>
            ${priceDisplay}
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
          <span>Agregar al pedido</span>
        </button>
      </div>
    </div>
  `;
}

function toggleExpandMenu() {
  isExpandedCategory = !isExpandedCategory;
  renderMenu();
}

// --- CATEGORY FILTERING ---
function filterCategory(category, btnElement) {
  currentCategory = category;
  isExpandedCategory = false;

  document.querySelectorAll(".menu-tab-btn").forEach(b => b.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  renderMenu();
  // Scroll menu section into view smoothly on mobile
  const menuSection = document.getElementById("menu");
  if (menuSection) menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleSearch(val) {
  searchQuery = val;
  currentCategory = "todos";
  document.querySelectorAll(".menu-tab-btn").forEach(b => b.classList.remove("active"));
  const todosBtn = document.querySelector(".menu-tab-btn");
  if (todosBtn) todosBtn.classList.add("active");
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
