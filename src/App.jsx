import { useState, useEffect, useRef } from 'react'

// Premium Custom Indian SVG Icon components
const AllIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
)

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

const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '2px' }}>
    <polygon points="6 3 20 12 6 21 6 3" />
  </svg>
)

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

// Complete database of 42 dishes with correct names, descriptions, and 22 active local loop videos
const DISHES_DATA = [
  // Starters (10 items)
  {
    id: 'korean_paneer_sticks',
    name: 'Korean Paneer Sticks',
    price: '₹240',
    category: 'Starters',
    ingredients: 'Paneer fingers, Gochujang paste, honey, soy sauce, garlic, sesame seeds, cornflour batter.',
    description: 'Crispy Cottage Cheese Sticks tossed in a Spicy and savory Korean Sauce, topped with toasted sesame.',
    photo: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format&fit=crop&q=80',
    video: '/videos/korean_paneer_sticks.mp4',
    hasVideo: true
  },
  {
    id: 'spicy_coconut_mushroom',
    name: 'Spicy Coconut Mushroom',
    price: '₹260',
    category: 'Starters',
    ingredients: 'Button mushrooms, Kashmiri red chili, fresh coconut chunks, garlic, mustard seeds, curry leaves.',
    description: 'Mushrooms pan-seared with Kashmiri red chili paste, fresh coconut flesh, and green curry leaves.',
    photo: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&auto=format&fit=crop&q=80',
    video: '/videos/spicy_coconut_mushroom.mp4',
    hasVideo: true
  },
  {
    id: 'nepali_cucumber_achar',
    name: 'Nepali Cucumber Achar',
    price: '₹90',
    category: 'Starters',
    ingredients: 'Cucumbers, toasted sesame powder, green chilies, mustard oil, fenugreek seeds, lemon juice.',
    description: 'A refreshing, traditional Nepali cucumber salad flavored with roasted sesame seeds, green chilies, and lemon juice.',
    photo: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=80',
    video: '/videos/nepali_cucumber_achar.mp4',
    hasVideo: true
  },
  {
    id: 'soya_koliwada',
    name: 'Soya Koliwada',
    price: '₹180',
    category: 'Starters',
    ingredients: 'Soya chunks, ginger-garlic paste, red chili powder, gram flour, lemon, whole garlic cloves.',
    description: 'Soya chunks marinated in spicy Maharashtrian Spices and fried with whole garlic cloves until crispy.',
    photo: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=80',
    video: '/videos/soya_koliwada.mp4',
    hasVideo: true
  },
  {
    id: 'onion_palak_pakoda',
    name: 'Onion Palak Pakoda',
    price: '₹120',
    category: 'Starters',
    ingredients: 'Onions, baby spinach, gram flour (besan), green chilies, carom seeds (ajwain), spices.',
    description: 'Crispy onion and spinach fritters seasoned with aromatic Indian spices, fried to golden perfection.',
    photo: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&auto=format&fit=crop&q=80',
    video: '/videos/onion_palak_pakoda.mp4',
    hasVideo: true
  },
  {
    id: 'peri_peri_paneer_fries',
    name: 'Peri Peri Paneer Fries',
    price: '₹220',
    category: 'Starters',
    ingredients: 'Paneer blocks, peri peri spice mix, cornstarch dust, olive oil.',
    description: 'Cottage cheese logs fried to perfection and tossed in a spicy, fiery peri peri dust.',
    photo: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80',
    video: '/videos/peri_peri_paneer_fries.mp4',
    hasVideo: true
  },
  {
    id: 'cheesy_potatoes',
    name: 'Cheesy Potatoes',
    price: '₹160',
    category: 'Starters',
    ingredients: 'Potatoes, cheddar cheese, milk, butter, oregano, chili flakes, garlic.',
    description: 'Diced potatoes tossed with herbs, simmered in a creamy milk sauce, and baked with heaps of cheese.',
    photo: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80',
    video: '/videos/cheesy_potatoes.mp4',
    hasVideo: true
  },
  {
    id: 'cheese_chilli_sandwich',
    name: 'Cheese Chilli Sandwich',
    price: '₹150',
    category: 'Starters',
    ingredients: 'Bread slices, green capsicum, mozzarella cheese, chili flakes, butter, green chili.',
    description: 'Street style cheese chilli sandwich made healthy with the twist of Hung Curd and paneer.',
    photo: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=80',
    video: '/videos/cheese_chilli_sandwich.mp4',
    hasVideo: true
  },
  {
    id: 'golgappa',
    name: 'Golgappa (Pani Puri)',
    price: '₹80',
    category: 'Starters',
    ingredients: 'Semolina shells, potato mash, tangy mint water, tamarind pulp.',
    description: 'Crisp, hollow spheres filled with potatoes and served with refreshing spiced mint and sweet waters.',
    photo: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },
  {
    id: 'paneer_pakora',
    name: 'Paneer Pakora',
    price: '₹180',
    category: 'Starters',
    ingredients: 'Cottage cheese slices, gram flour batter, mint dip.',
    description: 'Soft cottage cheese slices stuffed with mint chutney, dipped in spiced chickpea batter, fried golden.',
    photo: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },

  // Mains (13 items)
  {
    id: 'butter_chicken',
    name: 'Champaran Chicken Curry',
    price: '₹380',
    category: 'Mains',
    ingredients: 'Chicken, whole garlic bulbs, mustard oil, onions, ginger, special spice mix.',
    description: 'A slow-cooked, rustic Bihari chicken curry prepared in a sealed clay pot with whole garlic bulbs and mustard oil.',
    photo: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=80',
    video: '/videos/butter_chicken.mp4',
    hasVideo: true
  },
  {
    id: 'soya_sukkha',
    name: 'Soya Sukkha',
    price: '₹260',
    category: 'Mains',
    ingredients: 'Soya chunks, grated fresh coconut, Mangalorean spice mix, curry leaves, red onions.',
    description: 'A vegetarian, high-protein dry dish crafted with soya chunks, cooked with traditional Mangalorean spices.',
    photo: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80',
    video: '/videos/soya_sukkha.mp4',
    hasVideo: true
  },
  {
    id: 'kakdicha_korda',
    name: 'Kakdicha Korda',
    price: '₹190',
    category: 'Mains',
    ingredients: 'Cucumbers, gram flour (besan), green chilies, mustard seeds, coriander leaves, ghee.',
    description: 'Freshly grated cucumber cooked in spicy Maharashtrian spices and gram flour, slow-cooked to perfection.',
    photo: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop&q=80',
    video: '/videos/kakdicha_korda.mp4',
    hasVideo: true
  },
  {
    id: 'kathiyawadi_lasooni_aloo',
    name: 'Kathiyawadi Lasooni Aloo',
    price: '₹210',
    category: 'Mains',
    ingredients: 'Baby potatoes, garlic paste, red chili powder, cumin, coriander powder, mustard oil.',
    description: 'Baby potatoes tossed in a spicy, garlicky Kathiyawadi curry base cooked to perfection.',
    photo: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format&fit=crop&q=80',
    video: '/videos/kathiyawadi_lasooni_aloo.mp4',
    hasVideo: true
  },
  {
    id: 'veg_fish_curry',
    name: 'Veg Fish Curry',
    price: '₹290',
    category: 'Mains',
    ingredients: 'Raw green banana, fresh coconut paste, tamarind pulp, red chili, mustard seeds.',
    description: 'Crispy fried raw banana slices simmered in a delightful, tangy Maharashtrian coconut-based curry.',
    photo: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=500&auto=format&fit=crop&q=80',
    video: '/videos/veg_fish_curry.mp4',
    hasVideo: true
  },
  {
    id: 'spicy_asian_noodles',
    name: 'Spicy Asian Noodles',
    price: '₹240',
    category: 'Mains',
    ingredients: 'Shirataki noodles, peanut butter, chili oil, soy sauce, garlic, scallions, sesame oil.',
    description: 'Low-calorie Shirataki noodles made in a spicy Korean peanut sauce, served hot.',
    photo: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500&auto=format&fit=crop&q=80',
    video: '/videos/spicy_asian_noodles.mp4',
    hasVideo: true
  },
  {
    id: 'dal_makhani',
    name: 'Dal Makhani',
    price: '₹260',
    category: 'Mains',
    ingredients: 'Whole black lentils, kidney beans, cream, butter, slow spices.',
    description: 'Black lentils slow-cooked overnight with spices, finished with fresh cream and farm butter.',
    photo: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },
  {
    id: 'chole_bhature',
    name: 'Chole Bhature',
    price: '₹220',
    category: 'Mains',
    ingredients: 'Spicy chickpeas, refined flour fried bread, pickles.',
    description: 'A classic Punjabi combination of spicy chickpea curry served with puffed, golden-fried flatbreads.',
    photo: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },
  {
    id: 'palak_paneer',
    name: 'Hyderabadi Paneer Masala',
    price: '₹290',
    category: 'Mains',
    ingredients: 'Paneer slabs, capsicum, onions, roasted spice powder, cream, ghee.',
    description: 'An authentic, highly flavorful Hyderabadi paneer curry cooked with a special roasted spice paste.',
    photo: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=500&auto=format&fit=crop&q=80',
    video: '/videos/kadai_paneer.mp4',
    hasVideo: true
  },
  {
    id: 'chana_masala',
    name: 'Chana Masala',
    price: '₹210',
    category: 'Mains',
    ingredients: 'White chickpeas, roasted pomegranate powder, ginger, onion-tomato curry.',
    description: 'Soft chickpeas simmered in a dark, seasoned onion-tomato gravy with dry pomegranate.',
    photo: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },
  {
    id: 'lamb_rogan_josh',
    name: 'Lamb Rogan Josh',
    price: '₹440',
    category: 'Mains',
    ingredients: 'Tender lamb chunks, Kashmiri red chilies, dry ginger, fennel, saffron.',
    description: 'A signature Kashmiri slow-cooked lamb curry colored naturally with Kashmiri red chilies.',
    photo: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },
  {
    id: 'paneer_butter_masala',
    name: 'Dhaba Style Paneer Masala',
    price: '₹310',
    category: 'Mains',
    ingredients: 'Paneer cubes, tomatoes, onions, butter, ginger-garlic paste, cream, kitchen king masala.',
    description: 'A rich, spiced dhaba-style cottage cheese curry loaded with onions, tomatoes, and aromatic Indian spices.',
    photo: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=80',
    video: '/videos/paneer_butter_masala.mp4',
    hasVideo: true
  },
  {
    id: 'lamb_bhuna',
    name: 'Lamb Bhuna',
    price: '₹460',
    category: 'Mains',
    ingredients: 'Tender lamb pieces, caramelized onions, garlic-ginger paste, roasted spices.',
    description: 'Succulent pieces of lamb slow-roasted in a heavy pot with caramelized onions.',
    photo: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },

  // Breads (5 items)
  {
    id: 'thecha_bati',
    name: 'Thecha Bati',
    price: '₹140',
    category: 'Breads',
    ingredients: 'Whole wheat flour, green chilies, garlic cloves, roasted peanuts, ghee, salt.',
    description: 'Spicy wheat dough balls filled with Maharashtrian green chili and garlic Thecha, roasted golden.',
    photo: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80',
    video: '/videos/thecha_bati.mp4',
    hasVideo: true
  },
  {
    id: 'tandoori_naan',
    name: 'Tandoori Naan',
    price: '₹60',
    category: 'Breads',
    ingredients: 'Refined flour, milk, yogurt, butter glaze.',
    description: 'Soft leavened flatbread baked on the walls of our tandoor, brushed with butter.',
    photo: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },
  {
    id: 'garlic_naan',
    name: 'Delicious Aloo Paratha',
    price: '₹140',
    category: 'Breads',
    ingredients: 'Whole wheat flour, potatoes, coriander leaves, green chilies, red chili powder, garam masala, butter.',
    description: 'Crispy, golden-brown pan-fried flatbread stuffed with a spiced mashed potato mixture.',
    photo: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&auto=format&fit=crop&q=80',
    video: '/videos/garlic_naan.mp4',
    hasVideo: true
  },
  {
    id: 'butter_naan',
    name: 'Butter Naan',
    price: '₹65',
    category: 'Breads',
    ingredients: 'Refined flour dough, milk wash, salted butter glaze.',
    description: 'A traditional soft naan baked in the clay oven, coated with premium melted butter.',
    photo: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },
  {
    id: 'papadum',
    name: 'Papadum',
    price: '₹40',
    category: 'Breads',
    ingredients: 'Black gram lentil flour, cracked black pepper, roasted cumin.',
    description: 'Crisp, roasted black gram lentil wafers speckled with cracked black pepper.',
    photo: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },

  // Rice (9 items)
  {
    id: 'tomato_rice',
    name: 'Tomato Rice',
    price: '₹180',
    category: 'Rice',
    ingredients: 'Basmati rice, fresh tomatoes, mustard seeds, curry leaves, turmeric, green cardamoms, ghee.',
    description: 'A perfect one-pot rice recipe featuring fresh tomatoes and aromatic Indian spices.',
    photo: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80',
    video: '/videos/tomato_rice.mp4',
    hasVideo: true
  },
  {
    id: 'pahadi_raita',
    name: 'Pahadi Raita',
    price: '₹80',
    category: 'Rice',
    ingredients: 'Yogurt, cucumber, black mustard seeds, fresh turmeric, green chilies, coriander.',
    description: 'Traditional Kumaoni mountain-style spiced yogurt condiment loaded with grated cucumbers and local mustard.',
    photo: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=80',
    video: '/videos/pahadi_raita.mp4',
    hasVideo: true
  },
  {
    id: 'paneer_schezwan_fried_rice',
    name: 'Paneer Schezwan Fried Rice',
    price: '₹220',
    category: 'Rice',
    ingredients: 'Basmati rice, paneer cubes, Schezwan chili sauce, spring onions, capsicum, soy sauce.',
    description: 'Desi-Chinese style wok-fried rice tossed with golden paneer cubes, veggies, and a spicy Schezwan sauce.',
    photo: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=80',
    video: '/videos/paneer_schezwan_fried_rice.mp4',
    hasVideo: true
  },
  {
    id: 'phodnicha_batate_bhaat',
    name: 'Phodnicha Batate Bhaat',
    price: '₹170',
    category: 'Rice',
    ingredients: 'Rice, potatoes, turmeric, mustard seeds, curry leaves, green chilies, ghee.',
    description: 'Maharashtrian style tempered rice tossed with thinly sliced potato pieces and golden turmeric.',
    photo: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80',
    video: '/videos/phodnicha_batate_bhaat.mp4',
    hasVideo: true
  },
  {
    id: 'chana_yakhni_pulao',
    name: 'Chana Yakhni Pulao',
    price: '₹210',
    category: 'Rice',
    ingredients: 'Basmati rice, boiled chickpeas, fennel seeds, coriander seeds, cardamom, yogurt, ghee.',
    description: 'A fragrant, one-pot chickpea rice preparation cooked in a slow-simmered spiced broth.',
    photo: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=80',
    video: '/videos/chana_yakhni_pulao.mp4',
    hasVideo: true
  },
  {
    id: 'chicken_biryani',
    name: 'Muradabadi Chicken Biryani',
    price: '₹340',
    category: 'Rice',
    ingredients: 'Chicken, Basmati rice, green chilies, whole garam masala, ginger-garlic paste, curd.',
    description: 'A lighter, white-spiced chicken biryani cooked with green chilies, whole spices, and chicken stock.',
    photo: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=80',
    video: '/videos/chicken_biryani.mp4',
    hasVideo: true
  },
  {
    id: 'veg_biryani',
    name: 'Veg Dum Biryani',
    price: '₹290',
    category: 'Rice',
    ingredients: 'Basmati rice, mixed seasonal vegetables, onions, yogurt, mint leaves, whole garam masala, rose water.',
    description: 'A fragrant and flavorful homemade Veg Dum Biryani loaded with fresh vegetables, slow-cooked to perfection.',
    photo: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80',
    video: '/videos/veg_biryani.mp4',
    hasVideo: true
  },
  {
    id: 'jeera_rice',
    name: 'Jeera Rice',
    price: '₹150',
    category: 'Rice',
    ingredients: 'Basmati rice, cumin seeds, pure ghee, coriander.',
    description: 'Steamed Basmati rice tempered in pure ghee with roasted cumin seeds.',
    photo: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },
  {
    id: 'kashmiri_pulao',
    name: 'Kashmiri Pulao',
    price: '₹240',
    category: 'Rice',
    ingredients: 'Rice, saffron water, mixed dry fruits, pomegranate seeds.',
    description: 'A festive rice preparation loaded with saffron, raisins, almonds, and pomegranate.',
    photo: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },

  // Desserts (5 items)
  {
    id: 'matka_kulfi',
    name: 'Matka Kulfi',
    price: '₹120',
    category: 'Desserts',
    ingredients: 'Full cream milk, green cardamom powder, saffron, pistachios, almonds, sugar.',
    description: 'Traditional Indian ice cream made with condensed milk and dry fruits, served chilled in a clay pot.',
    photo: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80',
    video: '/videos/matka_kulfi.mp4',
    hasVideo: true
  },
  {
    id: 'gulab_jamun',
    name: 'Gulab Jamun',
    price: '₹120',
    category: 'Desserts',
    ingredients: 'Reduced milk solids, cardamoms, sugar syrup, pistachios.',
    description: 'Warm, soft milk-solid dumplings golden-fried and steeped in a sugar syrup.',
    photo: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },
  {
    id: 'rasgulla',
    name: 'Rasgulla',
    price: '₹110',
    category: 'Desserts',
    ingredients: 'Cottage cheese balls, light sugar syrup, rose flavor.',
    description: 'Spongy, white cottage cheese spheres boiled in a light sugar syrup flavored with rose.',
    photo: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },
  {
    id: 'rasmalai',
    name: 'Rasmalai',
    price: '₹140',
    category: 'Desserts',
    ingredients: 'Cottage cheese discs, sweetened saffron milk, pistachios, almonds.',
    description: 'Soft cottage cheese dumplings steeped in sweet, cardamom-scented milk, served chilled.',
    photo: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },
  {
    id: 'gajar_halwa',
    name: 'Gajar Ka Halwa',
    price: '₹150',
    category: 'Desserts',
    ingredients: 'Grated carrots, milk, ghee, raisins, nuts.',
    description: 'A warm winter delicacy made by slow-cooking sweet grated red carrots in milk and ghee.',
    photo: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },

  // Beverages (5 items)
  {
    id: 'masala_chai',
    name: 'Masala Chai',
    price: '₹80',
    category: 'Beverages',
    ingredients: 'Assam black tea, fresh milk, ginger, crushed cardamom, cloves, cinnamon, sugar.',
    description: 'Strong, aromatic black tea brewed with fresh milk and our house blend of spices.',
    photo: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80',
    video: '/videos/masala_chai.mp4',
    hasVideo: true
  },
  {
    id: 'cold_coffee',
    name: 'Cold Coffee',
    price: '₹140',
    category: 'Beverages',
    ingredients: 'Espresso shot, whole milk, chocolate syrup, vanilla ice cream scoop, ice cubes.',
    description: 'Creamy, frothy coffee blended with rich espresso, cold milk, and chocolate.',
    photo: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80',
    video: '/videos/cold_coffee.mp4',
    hasVideo: true
  },
  {
    id: 'mango_lassi',
    name: 'Mango Lassi',
    price: '₹120',
    category: 'Beverages',
    ingredients: 'Alphonso mango pulp, thick yogurt, milk, cardamoms, sugar.',
    description: 'A thick, creamy yogurt drink blended with sweet Alphonso mango pulp.',
    photo: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },
  {
    id: 'sweet_lassi',
    name: 'Sweet Lassi',
    price: '₹100',
    category: 'Beverages',
    ingredients: 'Whipped yogurt, sugar, rose water, cardamom cream.',
    description: 'Traditional Punjabi sweet beverage made by churning thick yogurt with rose water.',
    photo: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  },
  {
    id: 'jaljeera',
    name: 'Jaljeera',
    price: '₹70',
    category: 'Beverages',
    ingredients: 'Tangy mango powder, mint paste, cumin seeds, lemon juice, boondi.',
    description: 'A refreshing, chilled Indian welcome drink flavored with cumin, black salt, and fresh mint.',
    photo: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
  }
]

// 6 Menu Categories
const CATEGORIES_DATA = [
  { id: 'All', name: 'All', icon: <AllIcon /> },
  { id: 'Starters', name: 'Starters', icon: <StartersIcon /> },
  { id: 'Mains', name: 'Mains', icon: <MainsIcon /> },
  { id: 'Breads', name: 'Breads', icon: <BreadsIcon /> },
  { id: 'Rice', name: 'Rice', icon: <RiceIcon /> },
  { id: 'Desserts', name: 'Desserts', icon: <DessertsIcon /> },
  { id: 'Beverages', name: 'Beverages', icon: <BeveragesIcon /> }
]

// Custom high-performance intersection observer media item
function DishCardMedia({ dish }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (!dish.hasVideo) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            // Play video only when it's highly visible in viewport (80%+)
            videoRef.current.play().catch(() => {})
          } else {
            videoRef.current.pause()
          }
        }
      },
      { threshold: 0.3 } // Lower threshold so videos start playing sooner as they scroll in
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [dish.hasVideo])

  if (dish.hasVideo) {
    return (
      <video
        ref={videoRef}
        className="dish-grid-img"
        src={dish.video.replace('.mp4', '_grid.mp4')}
        loop
        muted
        playsInline
        preload="metadata"
        poster={dish.photo}
      />
    )
  }

  return <img className="dish-grid-img" src={dish.photo} alt={dish.name} loading="lazy" />
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeDish, setActiveDish] = useState(null)
  
  // Search and AI Assistant States
  const [searchQuery, setSearchQuery] = useState('')
  const [isAiOpen, setIsAiOpen] = useState(false)
  const [aiFilter, setAiFilter] = useState(null)
  const [aiMessages, setAiMessages] = useState([
    { role: 'assistant', text: 'Namaste! I am your Saffron AI Assistant. Tap a quick option below or search dishes above to explore the menu!' }
  ])

  // States for spring video lightbox
  const [lightboxVideo, setLightboxVideo] = useState(null)
  const [isClosing, setIsClosing] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [clickedCardRect, setClickedCardRect] = useState(null)
  const [isHeroAnimating, setIsHeroAnimating] = useState(false)

  // Preemptive preloading for high-res videos to minimize click loading time
  const preloadedVideos = useRef({})

  const handleCardPointerDown = (videoUrl) => {
    if (!videoUrl) return
    if (preloadedVideos.current[videoUrl]) return

    const tempVideo = document.createElement('video')
    tempVideo.src = videoUrl
    tempVideo.preload = 'auto'
    tempVideo.muted = true
    tempVideo.load()
    
    preloadedVideos.current[videoUrl] = tempVideo
  }

  // Table Order / Cart States
  const [tableOrders, setTableOrders] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToTable = (dish) => {
    setTableOrders(prev => {
      const existing = prev.find(item => item.id === dish.id)
      if (existing) {
        return prev.map(item => 
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...dish, quantity: 1 }]
    })
  }

  const removeFromTable = (dishId) => {
    setTableOrders(prev => {
      const existing = prev.find(item => item.id === dishId)
      if (!existing) return prev
      if (existing.quantity === 1) {
        return prev.filter(item => item.id !== dishId)
      }
      return prev.map(item => 
        item.id === dishId ? { ...item, quantity: item.quantity - 1 } : item
      )
    })
  }

  const removeAllFromTable = (dishId) => {
    setTableOrders(prev => prev.filter(item => item.id !== dishId))
  }

  // Reels Interaction States
  const [likedDishes, setLikedDishes] = useState({})
  const [bookmarkedDishes, setBookmarkedDishes] = useState({})
  const [showRecipeDetails, setShowRecipeDetails] = useState(false)

  const toggleLike = (dishId) => {
    setLikedDishes(prev => ({
      ...prev,
      [dishId]: !prev[dishId]
    }))
  }

  const toggleBookmark = (dishId) => {
    setBookmarkedDishes(prev => ({
      ...prev,
      [dishId]: !prev[dishId]
    }))
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('✨ Saffron Reel link copied to clipboard!')
  }

  // Combined Filter logic (Category + Search Query + AI Quick Filter)
  const filteredDishes = DISHES_DATA.filter(dish => {
    // 1. Category Filter
    if (activeCategory === 'All') {
      if (!dish.hasVideo) return false
    } else {
      if (dish.category !== activeCategory) return false
    }
    
    // 2. Search Query Filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      const matchName = dish.name.toLowerCase().includes(query)
      const matchDesc = dish.description.toLowerCase().includes(query)
      const matchIng = dish.ingredients.toLowerCase().includes(query)
      if (!matchName && !matchDesc && !matchIng) return false
    }
    
    // 3. AI Quick Filter
    if (aiFilter) {
      const descLower = dish.description.toLowerCase()
      const nameLower = dish.name.toLowerCase()
      const ingLower = dish.ingredients.toLowerCase()
      
      if (aiFilter === 'spicy') {
        const isSpicy = descLower.includes('spicy') || descLower.includes('chili') || descLower.includes('chilli') || nameLower.includes('chilli') || nameLower.includes('chili') || descLower.includes('fiery')
        if (!isSpicy) return false
      }
      if (aiFilter === 'protein') {
        const isHighProtein = descLower.includes('protein') || ingLower.includes('paneer') || ingLower.includes('chicken') || ingLower.includes('soya') || nameLower.includes('paneer') || nameLower.includes('chicken') || nameLower.includes('soya')
        if (!isHighProtein) return false
      }
      if (aiFilter === 'healthy') {
        const isHealthy = descLower.includes('healthy') || descLower.includes('low calorie') || descLower.includes('low-calorie') || descLower.includes('refreshing') || nameLower.includes('achar') || nameLower.includes('raita')
        if (!isHealthy) return false
      }
      if (aiFilter === 'specials') {
        const isSpecial = descLower.includes('traditional') || descLower.includes('authentic') || descLower.includes('signature') || descLower.includes('special') || nameLower.includes('special') || nameLower.includes('kumaoni')
        if (!isSpecial) return false
      }
    }
    
    return true
  })

  const handleAiPrompt = (promptType, promptLabel) => {
    const userMsg = { role: 'user', text: promptLabel }
    let responseText = ''
    
    if (promptType === 'spicy') {
      responseText = '🌶️ Spicy flavor profile unlocked! I have highlighted our spiciest dishes like the Korean Paneer Sticks and Dhaba Style Paneer Masala.'
      setAiFilter('spicy')
    } else if (promptType === 'protein') {
      responseText = '💪 High protein power-ups! Showing protein-rich items containing paneer, chicken, or soya chunks.'
      setAiFilter('protein')
    } else if (promptType === 'healthy') {
      responseText = '🥗 Keeping it light! Showing clean, refreshing, and low-calorie dishes like Nepali Cucumber Achar and Pahadi Raita.'
      setAiFilter('healthy')
    } else if (promptType === 'specials') {
      responseText = '✨ Chef\'s recommendation! Highlighting our signature specials, including Champaran Chicken Curry and traditional Matka Kulfi.'
      setAiFilter('specials')
    } else if (promptType === 'reset') {
      responseText = 'All AI filters cleared. You can search or select a new prompt suggestion!'
      setAiFilter(null)
    }
    
    setAiMessages(prev => [...prev, userMsg, { role: 'assistant', text: responseText }])
  }

  // Handles smooth Hero zoom-back close transition
  const closeLightbox = () => {
    setIsClosing(true)
    // Container morphs back to card position (0.45s), then backdrop fades out (0.4s)
    // Total animation time ~500ms before cleanup
    setTimeout(() => {
      setLightboxVideo(null)
      setShowRecipeDetails(false)
      setIsVideoLoaded(false)
      setIsClosing(false)
      setClickedCardRect(null)
    }, 500)
  }

  const handleCardClick = (dish, e) => {
    if (dish.hasVideo) {
      setIsVideoLoaded(false)
      
      // Get the bounding box of the media container in viewport coordinates
      const cardElement = e.currentTarget.querySelector('.dish-grid-media-box') || e.currentTarget
      const rect = cardElement.getBoundingClientRect()
      
      setClickedCardRect(rect)
      setLightboxVideo(dish)
      setIsHeroAnimating(true)
      
      // Let React paint the initial position, then trigger expansion in the next frame
      setTimeout(() => {
        setIsHeroAnimating(false)
      }, 30)
    } else {
      setActiveDish(dish)
    }
  }

  // Calculate dynamic inline styles for the shared element (Hero) transition
  const getHeroStyle = () => {
    if (!clickedCardRect) return {}
    
    // Zoom morph back to card position or initial frame
    if (isHeroAnimating || isClosing) {
      return {
        position: 'fixed',
        top: `${clickedCardRect.top}px`,
        left: `${clickedCardRect.left}px`,
        width: `${clickedCardRect.width}px`,
        height: `${clickedCardRect.height}px`,
        borderRadius: '22px',
        boxShadow: 'none',
        transition: 'all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    }
    
    // Centered overlay sizing (80% viewport size capped at max dimensions)
    const targetWidth = Math.min(window.innerWidth * 0.8, 400)
    const targetHeight = Math.min(window.innerHeight * 0.8, 700)
    const targetTop = (window.innerHeight - targetHeight) / 2
    const targetLeft = (window.innerWidth - targetWidth) / 2
    
    return {
      position: 'fixed',
      top: `${targetTop}px`,
      left: `${targetLeft}px`,
      width: `${targetWidth}px`,
      height: `${targetHeight}px`,
      borderRadius: '20px',
      transition: 'all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
  }

  return (
    <>
      {/* 1. MINIMAL HEADER BAR */}
      <header className="minimal-header">
        <span className="minimal-header-title">FirstFrame</span>
        <button 
          className="header-cart-btn" 
          onClick={() => setIsCartOpen(true)}
          aria-label="View Table Orders"
        >
          <svg className="cart-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          {tableOrders.length > 0 && (
            <span className="cart-badge">
              {tableOrders.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </button>
      </header>



      {/* 2. GOOGLE STYLE CATEGORY WIDGET BAR */}
      <div className="google-category-container">
        <div className="google-category-bar">
          <div className="google-category-scroller scrollbar-hide">
            {CATEGORIES_DATA.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  className={`google-category-btn ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat.id)
                    setActiveDish(null)
                  }}
                >
                  <span className="google-category-icon">{cat.icon}</span>
                  {isActive && <span className="google-category-text">{cat.name}</span>}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* 3. CATEGORY TITLE HEADER */}
      <div className="category-section-header">
        <h2 className="category-section-title">{activeCategory}</h2>
        <div className="category-section-count">
          {filteredDishes.length} items available
        </div>
      </div>

      {/* 4. TWO-COLUMN DISH GRID (Videos play inline on repeat) */}
      <main className="dishes-grid">
        {filteredDishes.map((dish) => (
          <div 
            key={dish.id} 
            className="dish-grid-card glass glass-interactive"
            onClick={(e) => handleCardClick(dish, e)}
            onMouseEnter={() => handleCardPointerDown(dish.video)}
            onTouchStart={() => handleCardPointerDown(dish.video)}
          >
            <div className="dish-grid-media-box">
              <DishCardMedia dish={dish} />
              
              {dish.hasVideo && (
                <div className="dish-grid-play-overlay">
                  <div className="dish-grid-play-circle">
                    <PlayIcon />
                  </div>
                </div>
              )}
            </div>

            <div className="dish-grid-info">
              <h3 className="dish-grid-name">{dish.name}</h3>
              <div className="dish-grid-price-row">
                <span className="dish-grid-price">{dish.price}</span>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* 5. BOTTOM SHEET/DRAWER OVERLAY (For static photos details) */}
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

      {/* 6. INSTA REEL WIDGET OVERLAY (Empty, clean video player screen with shared element transition) */}
      {lightboxVideo && (
        <div 
          className={`video-lightbox ${isClosing ? 'closing' : 'open'}`} 
          onClick={closeLightbox}
        >
          <div 
            className="reel-container" 
            onClick={closeLightbox}
            style={getHeroStyle()}
          >
            
            {/* Seamless custom loader spinner (Fades out when video plays) */}
            {!isVideoLoaded && (
              <div className="reel-loader">
                <div className="reel-spinner" />
              </div>
            )}

            {/* Reel Video Player (Muted autoplay, keyed, and fades in smoothly) */}
            <video 
              key={lightboxVideo.id}
              className="reel-video" 
              autoPlay 
              loop 
              muted
              playsInline
              preload="auto"
              src={lightboxVideo.video}
              onPlaying={() => setIsVideoLoaded(true)}
              style={{
                opacity: isVideoLoaded ? 1 : 0,
                transition: 'opacity 0.4s ease'
              }}
            />

            {/* Dish info overlay at bottom of reel */}
            {isVideoLoaded && !isClosing && (() => {
              const orderedItem = tableOrders.find(item => item.id === lightboxVideo.id);
              return (
                <div className="reel-dish-info" onClick={(e) => e.stopPropagation()}>
                  <p className="reel-dish-desc">{lightboxVideo.description}</p>
                  <p className="reel-dish-ingredients">
                    <span className="reel-ingredients-label">🧂 </span>
                    {lightboxVideo.ingredients}
                  </p>
                  <div className="reel-action-row">
                    {!orderedItem ? (
                      <button 
                        className="reel-add-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToTable(lightboxVideo);
                        }}
                      >
                        Add to Table
                      </button>
                    ) : (
                      <div className="reel-qty-selector">
                        <button 
                          className="reel-qty-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFromTable(lightboxVideo.id);
                          }}
                        >
                          −
                        </button>
                        <span className="reel-qty-val">{orderedItem.quantity} in Table</span>
                        <button 
                          className="reel-qty-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToTable(lightboxVideo);
                          }}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}

          </div>
        </div>
      )}
      {/* 7. SAFFRON AI CHEF ASSISTANT DRAW SHEET */}
      {isAiOpen && (
        <div className="ai-modal-backdrop" onClick={() => setIsAiOpen(false)}>
          <div className="ai-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="ai-header">
              <div className="ai-title">
                <svg className="sparkle-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c-.13 0-.26 0-.39.01a7.5 7.5 0 0 0-7.92 7.92c-.01.13-.01.26-.01.39 0 5.38 4.36 9.75 9.75 9.75s9.75-4.37 9.75-9.75S17.38 2 12 2Z" />
                </svg>
                <span>Saffron AI Assistant</span>
              </div>
              <button className="ai-close-btn" onClick={() => setIsAiOpen(false)}>
                <CloseIcon />
              </button>
            </div>
            
            <div className="ai-chat-area">
              {aiMessages.map((msg, index) => (
                <div key={index} className={`ai-message ${msg.role}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '12px' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: '700', color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                Ask Saffron AI Chef:
              </div>
              <div className="ai-prompts-grid">
                <button className="ai-prompt-btn" onClick={() => handleAiPrompt('spicy', '🌶️ Show Spiciest Dishes')}>
                  🌶️ Spiciest Dishes
                </button>
                <button className="ai-prompt-btn" onClick={() => handleAiPrompt('protein', '💪 High Protein Options')}>
                  💪 High Protein
                </button>
                <button className="ai-prompt-btn" onClick={() => handleAiPrompt('healthy', '🥗 Low Calorie / Healthy')}>
                  🥗 Low Cal / Healthy
                </button>
                <button className="ai-prompt-btn" onClick={() => handleAiPrompt('specials', '✨ Chef\'s Signature Dishes')}>
                  ✨ Chef's Specials
                </button>
              </div>
              
              {aiFilter && (
                <button 
                  className="drawer-close-btn" 
                  style={{ marginTop: '12px', background: 'rgba(219, 68, 85, 0.15)', color: '#ff4d6d', borderColor: 'rgba(219, 68, 85, 0.3)' }}
                  onClick={() => handleAiPrompt('reset', '❌ Clear Filters')}
                >
                  Clear AI Filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {/* 8. TABLE ORDERS CART DRAW SHEET */}
      {isCartOpen && (
        <div className="cart-modal-backdrop" onClick={() => setIsCartOpen(false)}>
          <div className="cart-modal-content glass" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <div className="cart-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span>Table Orders</span>
              </div>
              <button className="cart-close-btn" onClick={() => setIsCartOpen(false)}>
                <CloseIcon />
              </button>
            </div>

            <div className="cart-items-list">
              {tableOrders.length === 0 ? (
                <div className="cart-empty-state">
                  <span className="cart-empty-icon">🍽️</span>
                  <p className="cart-empty-text">Your table is empty</p>
                  <p className="cart-empty-subtext">Add dishes from videos to build your order list</p>
                </div>
              ) : (
                tableOrders.map(item => (
                  <div key={item.id} className="cart-item-card">
                    <div className="cart-item-info">
                      <div className="cart-item-name">{item.name}</div>
                      <div className="cart-item-price-qty">
                        <span className="cart-item-price">{item.price}</span>
                        <span className="cart-item-multiplier">×</span>
                        <span className="cart-item-qty">{item.quantity}</span>
                      </div>
                    </div>
                    <div className="cart-item-actions">
                      <div className="cart-item-qty-controls">
                        <button 
                          className="cart-qty-adjust-btn"
                          onClick={() => removeFromTable(item.id)}
                        >
                          −
                        </button>
                        <span className="cart-qty-number">{item.quantity}</span>
                        <button 
                          className="cart-qty-adjust-btn"
                          onClick={() => addToTable(item)}
                        >
                          +
                        </button>
                      </div>
                      <button 
                        className="cart-item-remove-btn"
                        onClick={() => removeAllFromTable(item.id)}
                        aria-label="Remove item"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {tableOrders.length > 0 && (() => {
              // Extract numeric value from price strings like "₹120"
              const getNumericPrice = (priceStr) => {
                const num = parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
                return isNaN(num) ? 0 : num;
              };
              const subtotal = tableOrders.reduce((sum, item) => sum + (getNumericPrice(item.price) * item.quantity), 0);

              return (
                <div className="cart-footer">
                  <div className="cart-subtotal-row">
                    <span className="cart-subtotal-label">Subtotal</span>
                    <span className="cart-subtotal-value">₹{subtotal}</span>
                  </div>
                  <button className="cart-place-order-btn" onClick={() => {
                    alert('Order placed and sent to the Saffron kitchen! 👨‍🍳🔥');
                    setTableOrders([]);
                    setIsCartOpen(false);
                  }}>
                    Place Table Order
                  </button>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </>
  )
}

export default App
