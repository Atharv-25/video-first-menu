import { useState } from 'react'

// Premium Custom Indian SVG Icon components
const StartersIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Triangular samosa outline */}
    <path d="M12 3 L3 19 C3 20 4 21 6 21 H18 C20 21 21 20 21 19 Z" />
    {/* Crimp marks at bottom */}
    <path d="M6 21 L8 19M9 21 L10 19M12 21 L12 19M15 21 L14 19M18 21 L16 19" />
  </svg>
)

const MainsIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Kadhai / traditional Indian cooking pot */}
    <path d="M4 10 C4 16 6 18 12 18 C18 18 20 16 20 10 Z" />
    <path d="M3 10 H21" />
    {/* Left handle */}
    <path d="M4 11.5 C1.5 11.5 1.5 14.5 4 14.5" />
    {/* Right handle */}
    <path d="M20 11.5 C22.5 11.5 22.5 14.5 20 14.5" />
    {/* Steam lines */}
    <path d="M9 6 V4M12 7 V3M15 6 V4" />
  </svg>
)

const BreadsIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Tandoori Naan bread shape with char bubbles */}
    <path d="M12 3 C8 3 4 7 4 13 C4 18 8 21 12 21 C16 21 20 18 20 13 C20 7 16 3 12 3 Z" />
    <circle cx="9" cy="11" r="1.2" fill="currentColor" />
    <circle cx="15" cy="13" r="1" fill="currentColor" />
    <circle cx="11" cy="16" r="1.2" fill="currentColor" />
    <circle cx="12" cy="8" r="1.5" fill="currentColor" />
    <circle cx="14" cy="17" r="1" fill="currentColor" />
  </svg>
)

const RiceIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Traditional Handi / Biryani Pot */}
    <path d="M5 13 C5 18 8 19 12 19 C16 19 19 18 19 13 H5 Z" />
    <path d="M5 13 C5 9 8 8 12 8 C16 8 19 9 19 13 Z" />
    <circle cx="12" cy="6" r="1.5" />
    <path d="M5 14.5 H3M19 14.5 H21" />
  </svg>
)

const DessertsIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Bowl of Gulab Jamun */}
    <path d="M4 14 C4 18 8 20 12 20 C16 20 20 18 20 14" />
    <path d="M3 14 H21" />
    <circle cx="9" cy="11" r="3" />
    <circle cx="15" cy="11" r="3" />
    <circle cx="12" cy="8" r="3" />
  </svg>
)

const BeveragesIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Cutting Chai glass / Kullhad */}
    <path d="M6 7 L8 21 C8 21.5 9 22 10 22 H14 C15 22 16 21.5 16 21 L18 7 Z" />
    <ellipse cx="12" cy="7" rx="6" ry="1.5" />
    <path d="M9 10 L10 21M12 8.5 L12 22M15 10 L14 21" />
    <path d="M10 4 C10 2.5 11 2.5 11 1.5M13 4.5 C13 3 14 3 14 2" />
  </svg>
)

// Complete database of 42 dishes with specific, distinct, accurate photo URLs
const DISHES_DATA = [
  // Starters
  {
    id: 'paneer_tikka',
    name: 'Paneer Tikka',
    price: '₹280',
    category: 'Starters',
    ingredients: 'Cottage cheese cubes, bell peppers, onions, yogurt marinade, spices, lemon juice.',
    description: 'Skewered cottage cheese cubes and vegetables marinated in a rich, spiced yogurt blend, charred to smoky perfection in our clay tandoor.',
    photo: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'chicken_65',
    name: 'Chicken 65',
    price: '₹320',
    category: 'Starters',
    ingredients: 'Boneless chicken cubes, curry leaves, red chilies, garlic, yogurt sauce, secret spice mix.',
    description: 'Crispy, deep-fried chicken chunks tossed in a fiery Southern-style yogurt sauce infused with fresh curry leaves and garlic.',
    photo: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'masala_dosa',
    name: 'Masala Dosa',
    price: '₹160',
    category: 'Starters',
    ingredients: 'Fermented rice & lentil batter, spiced potato mash, mustard seeds, curry leaves, sambar, chutneys.',
    description: 'A crispy, golden crepe made from fermented rice-lentil batter, wrapped around a spiced potato mash, served with sambar and fresh coconut chutney.',
    photo: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'samosa',
    name: 'Samosa',
    price: '₹90',
    category: 'Starters',
    ingredients: 'Refined pastry crust, spiced potato & green peas filling, coriander, mint chutney, tamarind chutney.',
    description: 'Flaky, pyramid-shaped golden pastries filled with a savory blend of potatoes and peas, served with chutneys.',
    photo: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'onion_bhaji',
    name: 'Onion Bhaji',
    price: '₹110',
    category: 'Starters',
    ingredients: 'Sliced red onions, gram flour batter, green chilies, ajwain seeds, mint chutney.',
    description: 'Crispy onion fritters seasoned with ajwain and green chilies, fried golden brown in high-quality oil.',
    photo: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'golgappa',
    name: 'Golgappa (Pani Puri)',
    price: '₹80',
    category: 'Starters',
    ingredients: 'Semolina shells, spiced potato & chickpea filling, tangy mint water, sweet tamarind pulp.',
    description: 'Crisp, hollow semolina spheres filled with potatoes and chickpeas, filled at the table with refreshing spiced mint and sweet tamarind waters.',
    photo: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'samosa_chaat',
    name: 'Samosa Chaat',
    price: '₹140',
    category: 'Starters',
    ingredients: 'Crushed samosa, chickpea curry (Chole), sweet yogurt, mint chutney, tamarind sauce, sev, pomegranate.',
    description: 'A chaotic medley of crushed samosas topped with hot chickpea curry, sweetened yogurt, tangy chutneys, sev, and fresh coriander.',
    photo: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'fish_amritsari',
    name: 'Fish Amritsari',
    price: '₹340',
    category: 'Starters',
    ingredients: 'Fish fillets, carom seeds, ginger-garlic, gram flour, lemon juice, chaat masala.',
    description: 'Lightly battered and crispy-fried fish fillets seasoned with carom seeds and traditional Punjabi spices.',
    photo: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'paneer_pakora',
    name: 'Paneer Pakora',
    price: '₹180',
    category: 'Starters',
    ingredients: 'Cottage cheese slices, spiced gram flour batter, mint dip.',
    description: 'Soft cottage cheese slices stuffed with mint chutney, dipped in spiced chickpea batter, fried golden crisp.',
    photo: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'hara_bhara_kabab',
    name: 'Hara Bhara Kabab',
    price: '₹190',
    category: 'Starters',
    ingredients: 'Spinach, green peas, potatoes, fresh coriander, ginger, cashew nut topping.',
    description: 'Healthy pan-seared patties of spinach, green peas, and potatoes, spiced lightly and topped with a whole cashew.',
    photo: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80'
  },

  // Mains
  {
    id: 'butter_chicken',
    name: 'Butter Chicken',
    price: '₹380',
    category: 'Mains',
    ingredients: 'Tandoori chicken pieces, tomato paste, cashew nut paste, fresh cream, butter, fenugreek.',
    description: 'Tender tandoori-grilled chicken simmered in our signature velvet-smooth gravy of ripe tomatoes, butter, and cashew cream.',
    photo: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'dal_makhani',
    name: 'Dal Makhani',
    price: '₹260',
    category: 'Mains',
    ingredients: 'Whole black lentils, red kidney beans, butter, cream, slow-cooked spices, ginger.',
    description: 'Black lentils and red kidney beans slow-cooked overnight with spices, finished with fresh cream and churned farm butter.',
    photo: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'chole_bhature',
    name: 'Chole Bhature',
    price: '₹220',
    category: 'Mains',
    ingredients: 'Chickpeas, onion-tomato gravy, ginger-garlic paste, refined flour fried bread, pickles.',
    description: 'A classic Punjabi combination of spicy, tangy chickpea curry served with two puffed, golden-fried leavened flatbreads.',
    photo: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'pav_bhaji',
    name: 'Pav Bhaji',
    price: '₹180',
    category: 'Mains',
    ingredients: 'Mashed mixed vegetables, butter, Pav Bhaji masala, red onions, lemon, butter-toasted rolls.',
    description: 'A thick, buttery vegetable mash cooked with special spices on a flat tawa, served with fluffy, butter-toasted brioche-style rolls.',
    photo: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'palak_paneer',
    name: 'Palak Paneer',
    price: '₹290',
    category: 'Mains',
    ingredients: 'Spinach puree, cottage cheese cubes, garlic, cumin, heavy cream.',
    description: 'Cubes of cottage cheese simmered in a silky, slow-cooked baby spinach puree scented with golden garlic.',
    photo: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'chana_masala',
    name: 'Chana Masala',
    price: '₹210',
    category: 'Mains',
    ingredients: 'White chickpeas, roasted pomegranate powder, ginger, onion-tomato base, spices.',
    description: 'Soft chickpeas simmered in a dark, highly seasoned onion-tomato gravy flavored with black cardamom and dry pomegranate.',
    photo: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'aloo_gobi',
    name: 'Aloo Gobi',
    price: '₹190',
    category: 'Mains',
    ingredients: 'Potato wedges, cauliflower florets, ginger juliennes, turmeric, garam masala.',
    description: 'A comforting, dry stir-fry of fresh cauliflower florets and potatoes cooked with turmeric, cumin, and ginger.',
    photo: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'lamb_rogan_josh',
    name: 'Lamb Rogan Josh',
    price: '₹440',
    category: 'Mains',
    ingredients: 'Tender lamb chunks, Kashmiri red chilies, dry ginger, fennel powder, saffron.',
    description: 'A signature Kashmiri slow-cooked lamb curry colored naturally with alkanet root and Kashmiri red chilies, rich in fennel flavor.',
    photo: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'tandoori_chicken',
    name: 'Tandoori Chicken',
    price: '₹360',
    category: 'Mains',
    ingredients: 'Chicken bone-in, Kashmiri chili paste, thick yogurt, tandoori masala, lemon.',
    description: 'Succulent bone-in chicken marinated in double-strained yogurt and high-heat roasted spices, char-grilled inside our clay oven.',
    photo: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'paneer_butter_masala',
    name: 'Paneer Butter Masala',
    price: '₹310',
    category: 'Mains',
    ingredients: 'Cottage cheese, sweet tomato gravy, rich cream, butter, dried fenugreek.',
    description: 'Fresh cottage cheese chunks cooked in a rich, creamy, and slightly sweet onion-tomato sauce with pure farm butter.',
    photo: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'kadai_paneer',
    name: 'Kadai Paneer',
    price: '₹300',
    category: 'Mains',
    ingredients: 'Paneer cubes, freshly ground Kadai spices, bell peppers, thick onion gravy.',
    description: 'Cottage cheese cubes tossed with bell peppers and onions in a spicy, freshly pounded coriander and red chili masala.',
    photo: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'lamb_bhuna',
    name: 'Lamb Bhuna',
    price: '₹460',
    category: 'Mains',
    ingredients: 'Tender lamb pieces, caramelized onions, thick garlic-ginger paste, roasted spices.',
    description: 'Succulent pieces of lamb slow-roasted (Bhuna) in a heavy-bottom pot with thick caramelized onion paste and aromatic dry spices.',
    photo: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'chicken_korma',
    name: 'Chicken Korma',
    price: '₹390',
    category: 'Mains',
    ingredients: 'Chicken pieces, yogurt marinade, brown onion paste, green cardamom, almond sauce.',
    description: 'A rich royal Mughlai dish of chicken cooked in a highly aromatic gravy of brown onions, cashew paste, and green cardamom.',
    photo: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=80'
  },

  // Breads
  {
    id: 'tandoori_naan',
    name: 'Tandoori Naan',
    price: '₹60',
    category: 'Breads',
    ingredients: 'Refined flour, milk, yogurt, butter glaze.',
    description: 'Soft and pillowy leavened flatbread slapped onto the inner walls of our high-heat clay tandoor, brushed with melted butter.',
    photo: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'garlic_naan',
    name: 'Garlic Naan',
    price: '₹75',
    category: 'Breads',
    ingredients: 'Refined flour, minced garlic, fresh coriander leaves, butter glaze.',
    description: 'Our traditional tandoori naan topped with heaps of finely minced garlic and fresh coriander, baked hot and glazed.',
    photo: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'butter_naan',
    name: 'Butter Naan',
    price: '₹65',
    category: 'Breads',
    ingredients: 'Refined flour dough, milk wash, salted butter glaze.',
    description: 'A traditional soft naan baked in the clay oven, generously coated with premium salted butter.',
    photo: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'lachha_paratha',
    name: 'Lachha Paratha',
    price: '₹80',
    category: 'Breads',
    ingredients: 'Whole wheat layered dough, ghee, roasted carom seeds.',
    description: 'Multi-layered, flaky flatbread made from whole wheat flour, brushed with pure ghee and cooked crispy.',
    photo: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'papadum',
    name: 'Papadum',
    price: '₹40',
    category: 'Breads',
    ingredients: 'Black gram lentil flour, cracked black pepper, roasted cumin.',
    description: 'Crisp, roasted black gram lentil wafers speckled with cracked black pepper, served alongside sweet mango chutney.',
    photo: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=500&auto=format&fit=crop&q=80'
  },

  // Rice
  {
    id: 'veg_biryani',
    name: 'Veg Biryani',
    price: '₹290',
    category: 'Rice',
    ingredients: 'Long grain Basmati rice, mixed seasonal vegetables, saffron, mint, fried onions, rose water.',
    description: 'Fragrant Basmati rice and spiced seasonal vegetables layered in a clay pot, cooked on a slow fire (Dum) with saffron and mint.',
    photo: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'chicken_biryani',
    name: 'Chicken Biryani',
    price: '₹340',
    category: 'Rice',
    ingredients: 'Basmati rice, chicken marinated in yogurt, fried onions, mint, kewra water.',
    description: 'A classic recipe of Basmati rice layered with spiced marinated chicken and slow-cooked in a sealed pot.',
    photo: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'jeera_rice',
    name: 'Jeera Rice',
    price: '₹150',
    category: 'Rice',
    ingredients: 'Basmati rice, cumin seeds, pure ghee, coriander garnish.',
    description: 'Fragrant steamed Basmati rice tempered in pure ghee with roasted cumin seeds and fresh green coriander.',
    photo: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'kashmiri_pulao',
    name: 'Kashmiri Pulao',
    price: '₹240',
    category: 'Rice',
    ingredients: 'Long grain rice, saffron water, mixed dry fruits, fresh pomegranate seeds.',
    description: 'A festive sweet rice preparation loaded with saffron, raisins, almonds, walnuts, and topped with ruby pomegranate seeds.',
    photo: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'raita',
    name: 'Raita',
    price: '₹70',
    category: 'Rice',
    ingredients: 'Whipped yogurt, roasted cumin, black salt, cucumber bits or boondi, mint.',
    description: 'Cool, whipped yogurt condiment seasoned with roasted cumin and dry mint, perfect to balance the spice of biryani.',
    photo: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=80'
  },

  // Desserts
  {
    id: 'gulab_jamun',
    name: 'Gulab Jamun',
    price: '₹120',
    category: 'Desserts',
    ingredients: 'Reduced milk solids (Khoya), cardamoms, sugar syrup, saffron strands, rose water, pistachios.',
    description: 'Warm, soft milk-solid dumplings golden-fried and steeped in a sticky, fragrant syrup infused with cardamom and saffron.',
    photo: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'rasgulla',
    name: 'Rasgulla',
    price: '₹110',
    category: 'Desserts',
    ingredients: 'Cottage cheese balls (Chenna), light sugar syrup, rose flavor.',
    description: 'Spongy, white cottage cheese spheres boiled in a light, delicate sugar syrup flavored with rose water.',
    photo: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'rasmalai',
    name: 'Rasmalai',
    price: '₹140',
    category: 'Desserts',
    ingredients: 'Cottage cheese discs, sweetened saffron milk (Rabri), pistachios, almonds.',
    description: 'Soft, flattened cottage cheese dumplings steeped in sweet, cardamom-scented condensed milk, served chilled with nuts.',
    photo: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'gajar_halwa',
    name: 'Gajar Ka Halwa',
    price: '₹150',
    category: 'Desserts',
    ingredients: 'Grated red carrots, condensed milk, ghee, golden raisins, nuts.',
    description: 'A warm winter delicacy made by slow-cooking sweet grated red carrots in milk, ghee, and sugar, garnished with dry fruits.',
    photo: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'kheer',
    name: 'Kheer',
    price: '₹130',
    category: 'Desserts',
    ingredients: 'Basmati rice grain, condensed milk, green cardamom, almonds, pistachios, saffron.',
    description: 'Slow-simmered rice pudding enriched with condensed milk, infused with green cardamom and saffron, served chilled.',
    photo: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500&auto=format&fit=crop&q=80'
  },

  // Beverages
  {
    id: 'masala_chai',
    name: 'Masala Chai',
    price: '₹80',
    category: 'Beverages',
    ingredients: 'Assam black tea, fresh milk, ginger, crushed cardamom, cloves, cinnamon, sugar.',
    description: 'Strong, aromatic black tea brewed with fresh milk, crushed ginger, and our house blend of warming spices.',
    photo: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'cold_coffee',
    name: 'Cold Coffee',
    price: '₹140',
    category: 'Beverages',
    ingredients: 'Espresso shot, whole milk, chocolate syrup, vanilla ice cream scoop, ice cubes.',
    description: 'Creamy, frothy blended coffee made with rich espresso, cold milk, and chocolate, topped with a scoop of vanilla ice cream.',
    photo: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'mango_lassi',
    name: 'Mango Lassi',
    price: '₹120',
    category: 'Beverages',
    ingredients: 'Alphonso mango pulp, thick yogurt, milk, cardamoms, sugar.',
    description: 'A thick, velvety yogurt drink blended with sweet Alphonso mango pulp and cardamom.',
    photo: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'sweet_lassi',
    name: 'Sweet Lassi',
    price: '₹100',
    category: 'Beverages',
    ingredients: 'Whipped thick yogurt, sugar, rose water, cardamom cream.',
    description: 'Traditional Punjabi sweet beverage made by churning thick yogurt with sugar and cardamoms, topped with thick cream (Malai).',
    photo: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'jaljeera',
    name: 'Jaljeera',
    price: '₹70',
    category: 'Beverages',
    ingredients: 'Tangy dry mango powder, fresh mint paste, cumin seeds, lemon juice, boondi.',
    description: 'A refreshing, chilled Indian welcome drink made with cumin, black salt, fresh mint, coriander, and lemon juice.',
    photo: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'filter_coffee',
    name: 'Filter Coffee',
    price: '₹90',
    category: 'Beverages',
    ingredients: 'South Indian coffee decoction, frothed milk, chicory.',
    description: 'Traditional South Indian coffee brewed in a brass filter, mixed with frothed hot milk, served in a steel tumbler.',
    photo: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=80'
  }
]

// 6 Menu Categories
const CATEGORIES_DATA = [
  { id: 'Starters', name: 'Starters', icon: <StartersIcon /> },
  { id: 'Mains', name: 'Mains', icon: <MainsIcon /> },
  { id: 'Breads', name: 'Breads', icon: <BreadsIcon /> },
  { id: 'Rice', name: 'Rice', icon: <RiceIcon /> },
  { id: 'Desserts', name: 'Desserts', icon: <DessertsIcon /> },
  { id: 'Beverages', name: 'Beverages', icon: <BeveragesIcon /> }
]

function App() {
  const [activeCategory, setActiveCategory] = useState('Starters')
  const [activeDish, setActiveDish] = useState(null)

  // Filter dishes by active category
  const filteredDishes = DISHES_DATA.filter(dish => dish.category === activeCategory)

  // Open bottom details drawer
  const openDetail = (dish) => {
    setActiveDish(dish)
  }

  return (
    <>
      {/* 1. MINIMAL HEADER BAR */}
      <header className="minimal-header">
        <span className="minimal-header-title">FirstFrame</span>
      </header>

      {/* 2. CIRCULAR CATEGORY SCROLLER ROW */}
      <section className="category-scroller-box">
        <div className="category-flex-row scrollbar-hide">
          {CATEGORIES_DATA.map((cat) => (
            <button
              key={cat.id}
              className={`category-circle-item ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat.id)
                setActiveDish(null)
              }}
            >
              <div className="category-circle">
                {cat.icon}
              </div>
              <span className="category-label">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 3. CATEGORY TITLE HEADER */}
      <div className="category-section-header">
        <h2 className="category-section-title">{activeCategory}</h2>
        <div className="category-section-count">
          {filteredDishes.length} items available
        </div>
      </div>

      {/* 4. TWO-COLUMN DISH GRID */}
      <main className="dishes-grid">
        {filteredDishes.map((dish) => (
          <div 
            key={dish.id} 
            className="dish-grid-card glass glass-interactive"
            onClick={() => openDetail(dish)}
          >
            <div className="dish-grid-media-box">
              <img className="dish-grid-img" src={dish.photo} alt={dish.name} />
            </div>

            <div className="dish-grid-info">
              <h3 className="dish-grid-name">{dish.name}</h3>
              <p className="dish-grid-desc">{dish.description}</p>
              
              <div className="dish-grid-price-row">
                <span className="dish-grid-price">{dish.price}</span>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* 5. BOTTOM SHEET/DRAWER OVERLAY */}
      {activeDish && (
        <div className="backdrop-fade" onClick={() => setActiveDish(null)}>
          <div className="drawer-content glass" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-drag-handle" />
            
            <div className="drawer-title-row">
              <h3 className="drawer-title">{activeDish.name}</h3>
              <span className="drawer-price">{activeDish.price}</span>
            </div>

            <p className="drawer-desc">{activeDish.description}</p>
            
            <div className="drawer-ingredients-box">
              <div className="drawer-ingredients-title">Ingredients</div>
              <div className="drawer-ingredients">{activeDish.ingredients}</div>
            </div>

            <button className="drawer-close-btn" onClick={() => setActiveDish(null)}>
              Close Details
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
