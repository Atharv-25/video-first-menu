import { useState, useEffect, useRef } from 'react'

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
    name: 'Palak Paneer',
    price: '₹290',
    category: 'Mains',
    ingredients: 'Spinach puree, cottage cheese, garlic, cumin, heavy cream.',
    description: 'Cubes of cottage cheese simmered in a silky spinach puree scented with golden garlic.',
    photo: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
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
    name: 'Paneer Butter Masala',
    price: '₹310',
    category: 'Mains',
    ingredients: 'Cottage cheese, sweet tomato gravy, rich cream, butter.',
    description: 'Fresh cottage cheese chunks cooked in a rich, creamy onion-tomato sauce with pure butter.',
    photo: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
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
    name: 'Garlic Naan',
    price: '₹75',
    category: 'Breads',
    ingredients: 'Refined flour, minced garlic, fresh coriander leaves, butter glaze.',
    description: 'Our traditional tandoori naan topped with heaps of finely minced garlic and coriander.',
    photo: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
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
    name: 'Veg Biryani',
    price: '₹290',
    category: 'Rice',
    ingredients: 'Basmati rice, mixed seasonal vegetables, saffron, mint, rose water.',
    description: 'Fragrant Basmati rice and vegetables layered and cooked on a slow fire (Dum) with saffron.',
    photo: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80',
    hasVideo: false
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
            videoRef.current.play().catch(() => {})
          } else {
            videoRef.current.pause()
          }
        }
      },
      { threshold: 0.1 }
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
        src={dish.video}
        loop
        muted
        playsInline
        poster={dish.photo}
      />
    )
  }

  return <img className="dish-grid-img" src={dish.photo} alt={dish.name} />
}

function App() {
  const [activeCategory, setActiveCategory] = useState('Starters')
  const [activeDish, setActiveDish] = useState(null)
  
  // States for spring video lightbox
  const [lightboxVideo, setLightboxVideo] = useState(null)
  const [isClosing, setIsClosing] = useState(false)

  // Filter dishes by active category
  const filteredDishes = DISHES_DATA.filter(dish => dish.category === activeCategory)

  // Handles smooth popup close transition
  const closeLightbox = () => {
    setIsClosing(true)
    setTimeout(() => {
      setLightboxVideo(null)
      setIsClosing(false)
    }, 300) // matches index.css transition times
  }

  const handleCardClick = (dish) => {
    if (dish.hasVideo) {
      setLightboxVideo(dish)
    } else {
      setActiveDish(dish)
    }
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

      {/* 4. TWO-COLUMN DISH GRID (Videos play inline on repeat) */}
      <main className="dishes-grid">
        {filteredDishes.map((dish) => (
          <div 
            key={dish.id} 
            className="dish-grid-card glass glass-interactive"
            onClick={() => handleCardClick(dish)}
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
              <p className="dish-grid-desc">{dish.description}</p>
              
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

      {/* 6. SPRING VIDEO LIGHTBOX OVERLAY (Smooth scale spring transition) */}
      {lightboxVideo && (
        <div className={`video-lightbox ${isClosing ? '' : 'open'}`} onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-close-btn" onClick={closeLightbox}>
              <CloseIcon />
            </div>
            
            <div className="lightbox-video-container">
              <video 
                className="lightbox-video" 
                autoPlay 
                loop 
                playsInline
                poster={lightboxVideo.photo}
              >
                <source src={lightboxVideo.video} type="video/mp4" />
              </video>
            </div>
            
            <div className="lightbox-info">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '24px' }}>{lightboxVideo.name}</h3>
                <span style={{ fontFamily: 'var(--font-price)', fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)' }}>{lightboxVideo.price}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13.5px', color: 'var(--text-secondary)', margin: '0 0 16px 0', lineHeight: '1.5' }}>
                {lightboxVideo.description}
              </p>
              <div className="drawer-ingredients-box" style={{ margin: 0 }}>
                <div className="drawer-ingredients-title">Ingredients</div>
                <div className="drawer-ingredients">{lightboxVideo.ingredients}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
