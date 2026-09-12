import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Car,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  Flame,
  Heart,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  Quote,
  Send,
  Sparkles,
  Star,
  Users,
  UsersRound,
  UtensilsCrossed,
  X,
  ZoomIn,
} from "lucide-react";

import maninderSinghFounderImage from "@/assets/maninder-singh-founder.jpg";
import masterpieceInteriorImage from "@/assets/g2g-masterpiece-interior.jpg";
import seatingLoungeImage from "@/assets/g2g-seating-lounge.jpg";
import bambooLoungeImage from "@/assets/g2g-bamboo-cafe-lounge.jpg";
import tropicalMuralImage from "@/assets/g2g-tropical-mural-dining.jpg";
import chandelierAmbianceImage from "@/assets/g2g-chandelier-ambiance.jpg";
import entrancePergolaImage from "@/assets/g2g-entrance-pergola-walkway.jpg";
import emeraldLoungeImage from "@/assets/g2g-emerald-lounge-art.jpg";
import bambooWindowBoothImage from "@/assets/g2g-bamboo-window-booth.jpg";
import palmDiningRoomImage from "@/assets/g2g-palm-dining-room.jpg";
import grandDiningHallImage from "@/assets/g2g-grand-dining-hall.jpg";
import heroFoodImage from "@/assets/get2gather-hero.jpg";
import foodImage from "@/assets/get2gather-food.jpg";
import cafeImage from "@/assets/get2gather-cafe.jpg";
import tableImage from "@/assets/get2gather-table.jpg";
import officialLogoImage from "@/assets/get2gather-official-logo.jpg";
import occasionCafeImage from "@/assets/g2g-occasion-cafe.jpg";
import occasionCelebrationImage from "@/assets/g2g-occasion-celebration.jpg";
import occasionFamilyImage from "@/assets/g2g-occasion-family.jpg";
import tasteTandooriSizzler from "@/assets/taste-tandoori-sizzler.jpg";
import tasteDumBiryani from "@/assets/taste-dum-biryani.jpg";
import tasteStonePizza from "@/assets/taste-stone-pizza.jpg";
import tasteBotanicalMocktail from "@/assets/taste-botanical-mocktail.jpg";
import signaturePaneerTikkaImage from "@/assets/signature-paneer-tikka.jpg";

const phoneDisplay = "094637 17523";
const phoneHref = "tel:+919463717523";
const whatsappNumber = "919463717523";
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hello Get 2 Gather, I would like to reserve a table / place an order."
)}`;
const instagramHandle = "@get2gather.gsp";
const instagramHref = "https://www.instagram.com/get2gather.gsp";
const directionsHref =
  "https://www.google.com/maps/search/?api=1&query=Get+2+Gather+Tibri+Road+near+Punjab+Nursery+Gurdaspur+Punjab+143521";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

/* ========================================================
   LIGHTWEIGHT INTERACTIVE 3D TILT WRAPPER
   ======================================================== */
interface Card3DTiltProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function Card3DTilt({
  children,
  className = "",
  maxTilt = 7,
  style = {},
  onClick,
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [glare, setGlare] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2
      )}deg) scale3d(1.015, 1.015, 1.015)`
    );
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.14,
    });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className={`card-3d-tilt-wrap ${className}`}
      style={{ ...style, transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
      <div
        className="card-3d-glare"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(201, 164, 92, ${glare.opacity}) 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />
    </div>
  );
}

/* ========================================================
   OFFICIAL SOCIAL SVG ICONS
   ======================================================== */
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.031 2C6.495 2 2 6.494 2 12.03c0 1.769.46 3.497 1.334 5.015L2 22l5.127-1.344A10.005 10.005 0 0 0 12.031 22c5.536 0 10.03-4.494 10.03-10.03C22.062 6.494 17.567 2 12.031 2zm0 18.344c-1.5 0-2.969-.403-4.25-1.164l-.305-.181-3.155.827.842-3.076-.199-.315a8.27 8.27 0 0 1-1.267-4.405c0-4.595 3.738-8.334 8.334-8.334 4.596 0 8.334 3.739 8.334 8.334 0 4.596-3.738 8.335-8.334 8.335zm4.569-6.242c-.25-.125-1.48-.73-1.71-.812-.23-.083-.396-.125-.562.125-.167.25-.646.812-.792.979-.146.166-.292.187-.542.062-.25-.125-1.054-.388-2.008-1.239-.743-.663-1.245-1.482-1.391-1.732-.146-.25-.016-.385.109-.51.113-.112.25-.292.375-.438.125-.146.167-.25.25-.417.084-.166.042-.312-.02-.438-.063-.125-.563-1.354-.771-1.854-.203-.488-.41-.422-.563-.43-.146-.008-.313-.01-.48-.01s-.437.063-.666.313c-.23.25-.875.854-.875 2.083s.896 2.417 1.021 2.583c.125.167 1.76 2.688 4.266 3.771.596.258 1.062.412 1.425.528.599.191 1.144.164 1.575.1.48-.072 1.48-.605 1.688-1.188.209-.584.209-1.084.146-1.188-.062-.104-.229-.166-.479-.291z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

/* ========================================================
   RESTAURANT DATA
   ======================================================== */
const atmosphereHighlights = [
  {
    id: "chandeliers",
    tag: "SIGNATURE LIGHTING",
    title: "Golden Crystal Chandeliers",
    subtitle: "Radiant Ambient Glow",
    description:
      "Multi-tiered golden crystal chandeliers and frosted orb pendant lamps casting a warm cinematic glow across rustic timber rafters.",
    image: chandelierAmbianceImage,
  },
  {
    id: "vaulted-dining",
    tag: "ARCHITECTURAL HALL",
    title: "Sculpted Timber Vaults",
    subtitle: "Spacious Dining Sanctuary",
    description:
      "Masterpiece vaulted wooden ceiling with hand-carved beams, deep-buttoned Chesterfield booths, and lush hanging indoor greenery.",
    image: masterpieceInteriorImage,
  },
  {
    id: "tropical-mural",
    tag: "BOTANICAL DINING",
    title: "Tropical Palm Room",
    subtitle: "Intimate Mural Setting",
    description:
      "Chic table setting accented by hand-painted exotic palm murals, warm perimeter cove glow, and floating orb fixtures.",
    image: tropicalMuralImage,
  },
  {
    id: "bamboo-cafe",
    tag: "COZY CORNER",
    title: "Rustic Bamboo Cafe Retreat",
    subtitle: "Woven Lanterns & Alcoves",
    description:
      "Slatted bamboo craft ceilings, handwoven lantern pendants, arched plaster wall niches, and relaxed banquet seating.",
    image: bambooLoungeImage,
  },
  {
    id: "emerald-lounge",
    tag: "CELEBRATION LOUNGE",
    title: "Emerald Art Lounge",
    subtitle: "Plush Velvet & Wall Niches",
    description:
      "Deep emerald tufted booth seating paired with fluted wooden panelling and illuminated niches for milestone family gatherings.",
    image: emeraldLoungeImage,
  },
  {
    id: "entrance-pergola",
    tag: "WARM WELCOME",
    title: "Pergola Walkway & Greenery",
    subtitle: "Scenic Entrance Experience",
    description:
      "A scenic outdoor timber pergola framed with cascading potted foliage and patterned stone tiles welcoming you to Get 2 Gather.",
    image: entrancePergolaImage,
  },
];

const serviceCards = [
  {
    icon: UtensilsCrossed,
    number: "01",
    tag: "CHANDELIER DINING",
    title: "DINE IN",
    subtitle: "Warm Ambience & Table Service",
    copy: "Savour freshly crafted North Indian specialties under ambient wooden rafters and glowing chandeliers with attentive table hospitality.",
    image: chandelierAmbianceImage,
    actionLabel: "View Menu",
    actionHref: "#menu",
  },
  {
    icon: PackageCheck,
    number: "02",
    tag: "QUICK PICKUP",
    title: "KERBSIDE PICKUP",
    subtitle: "Fast & Convenient",
    copy: "Call ahead to have your favorite starters, fresh tandoor breads, and curries packaged hot and handed directly to your vehicle with zero wait.",
    image: foodImage,
    actionLabel: "Call To Pickup",
    actionHref: phoneHref,
  },
  {
    icon: Car,
    number: "03",
    tag: "DOORSTEP COMFORT",
    title: "NO-CONTACT DELIVERY",
    subtitle: "Safe & Contactless",
    copy: "Experience the rich authentic flavours of Get 2 Gather at home with prompt, hygienically sealed, no-contact doorstep delivery across Gurdaspur.",
    image: heroFoodImage,
    actionLabel: "Order Delivery",
    actionHref: phoneHref,
  },
  {
    icon: UsersRound,
    number: "04",
    tag: "CELEBRATIONS & LOUNGE",
    title: "GATHER TOGETHER",
    subtitle: "Family & Milestone Moments",
    copy: "Spacious Chesterfield booth seating, warm lighting, and private dining arrangements designed to celebrate family milestones and memories.",
    image: seatingLoungeImage,
    actionLabel: "Reserve Table",
    actionHref: phoneHref,
  },
];

interface MenuItem {
  title: string;
  price: string;
  description: string;
  isVeg: boolean;
  isPopular?: boolean;
}

interface MenuCategory {
  id: string;
  label: string;
  tag: string;
  eyebrow: string;
  description: string;
  image: string;
  items: MenuItem[];
}

const menuCategoriesData: MenuCategory[] = [
  {
    id: "breakfast",
    label: "BREAKFAST",
    tag: "MORNING KITCHEN",
    eyebrow: "FRESH & WHOLESOME",
    description: "Start your morning with freshly toasted breads, stuffed tandoori paranthas and farm-fresh egg preparations.",
    image: tableImage,
    items: [
      { title: "Butter Toast", price: "₹60", description: "Golden toasted artisan bread slices served with generous salted butter.", isVeg: true },
      { title: "Channa Bhatura", price: "₹120", description: "Fluffy golden puffed bhature paired with spiced Punjabi chickpea gravy and house pickle.", isVeg: true, isPopular: true },
      { title: "Mix Parantha with Curd", price: "₹90", description: "Tandoori layered flatbread stuffed with spiced potato, paneer and herbs, served with fresh curd.", isVeg: true, isPopular: true },
      { title: "Plain Omelette", price: "₹70", description: "Two farm eggs whisked with sea salt and cracked pepper, cooked to golden fluffiness.", isVeg: false },
      { title: "Omelette Masala", price: "₹90", description: "Classic street-style omelette folded with chopped onions, green chilies and coriander.", isVeg: false, isPopular: true },
      { title: "Omelette with Slice", price: "₹100", description: "Fluffy masala omelette served with warm buttered toast slices.", isVeg: false },
      { title: "Boiled Egg", price: "₹50", description: "Tender farm eggs served with rock salt and roasted cumin.", isVeg: false },
    ],
  },
  {
    id: "mocktails",
    label: "MOCKTAILS",
    tag: "REFRESHERS & BAR",
    eyebrow: "HANDCRAFTED & CHILLED",
    description: "Vibrant botanical infusions, fruit nectars and effervescent sparkling refreshers crafted fresh to order.",
    image: cafeImage,
    items: [
      { title: "Lovers Passion", price: "₹149", description: "Sensational blend of ruby berry reduction, passion fruit nectar and sparkling fizz.", isVeg: true, isPopular: true },
      { title: "Blue Ocean", price: "₹149", description: "Vibrant blue curacao layered with lime essence, mint sprigs and chilled mountain soda.", isVeg: true, isPopular: true },
      { title: "Virgin Mojito", price: "₹149", description: "Hand-muddled garden mint leaves, fresh key lime wedges and pure cane sweetness over crushed ice.", isVeg: true },
      { title: "Orange Delight", price: "₹139", description: "Sun-ripened Valencia orange juice with citrus zest, mint essence and sparkle.", isVeg: true },
      { title: "Mango Delight", price: "₹139", description: "Velvety Alphonso mango puree kissed with chilled vanilla fizz and lime.", isVeg: true },
      { title: "Pink Lady", price: "₹149", description: "Delicate pomegranate syrup, tart cranberry splash and a sparkling botanical finish.", isVeg: true },
    ],
  },
  {
    id: "veg-pizza",
    label: "VEG PIZZA",
    tag: "ARTISAN OVEN",
    eyebrow: "STONE-BAKED CRUSTS",
    description: "Hand-stretched dough stone-baked to crisp perfection, topped with slow-simmered tomato sauce and bubbling mozzarella.",
    image: foodImage,
    items: [
      { title: "Margherita Cheese", price: "₹189", description: "Classic crust layered with rich San Marzano tomato herb sauce and melted mozzarella.", isVeg: true },
      { title: "Onion, Capsicum, Tomato", price: "₹219", description: "Crisp bell peppers, farm tomatoes and sweet red onions on a bubbling herb cheese bed.", isVeg: true },
      { title: "Farm House", price: "₹249", description: "Loaded with sweetcorn kernels, sliced mushrooms, crisp capsicum and black olives.", isVeg: true, isPopular: true },
      { title: "Get 2 Gather Special Pizza", price: "₹279", description: "Chef's signature pie with spiced paneer, roasted peppers, jalapenos and double cheese.", isVeg: true, isPopular: true },
      { title: "Cheese Chilly Pizza", price: "₹249", description: "Fiery fusion of wok-tossed spicy chilli paneer, capsicum and melted cheddar mozzarella.", isVeg: true },
      { title: "Mushroom Cheese Pizza", price: "₹259", description: "Sauteed forest button mushrooms sprinkled with fragrant thyme and smothered in mozzarella.", isVeg: true },
    ],
  },
  {
    id: "non-veg-pizza",
    label: "NON-VEG PIZZA",
    tag: "ARTISAN OVEN",
    eyebrow: "SMOKY & SAVOURY",
    description: "Tender tandoori roasted chicken, smoky barbecue cuts and premium meats on crisp hand-tossed crusts.",
    image: heroFoodImage,
    items: [
      { title: "Chicken Tikka Pizza", price: "₹289", description: "Clay-oven charred chicken tikka cubes, red onions and bell peppers over bubbling mozzarella.", isVeg: false, isPopular: true },
      { title: "Chicken BBQ Pizza", price: "₹299", description: "Smoky barbecue glazed shredded chicken, sweet caramelized onions and double cheese blend.", isVeg: false },
      { title: "Meat Lovers Pizza", price: "₹329", description: "Abundant feast of seasoned chicken sausages, spiced tikka morsels and herbs on cheese.", isVeg: false, isPopular: true },
    ],
  },
  {
    id: "starters",
    label: "STARTERS",
    tag: "APPETISERS",
    eyebrow: "CRISP & FLAVOURFUL",
    description: "Irresistible small plates and hot appetisers designed for sharing across the table.",
    image: tableImage,
    items: [
      { title: "Crispy Corn Salt & Pepper", price: "₹179", description: "Sweet American corn kernels wok-crisped with crushed black pepper, spring onion and garlic.", isVeg: true },
      { title: "Veg Spring Rolls", price: "₹169", description: "Golden flaky pastry rolls packed with julienned vegetables, served with sweet chili sauce.", isVeg: true },
      { title: "Honey Chilli Potato", price: "₹179", description: "Crisp fried potato fingers tossed in a sticky sesame honey chili reduction.", isVeg: true, isPopular: true },
      { title: "Chicken Lollipop", price: "₹289", description: "Frenched chicken drumettes crisped to perfection and served with fiery house schezwan dip.", isVeg: false, isPopular: true },
      { title: "Chilli Chicken Dry", price: "₹279", description: "Tender chicken chunks tossed with diced bell peppers, shallots and dark soy reduction.", isVeg: false, isPopular: true },
    ],
  },
  {
    id: "tandoori",
    label: "TANDOORI",
    tag: "LIVE CLAY OVEN",
    eyebrow: "CHARRED OVER HOT EMBERS",
    description: "Authentic tandoor-roasted delicacies marinated in mustard oil, hung curd and hand-ground Punjabi spices.",
    image: heroFoodImage,
    items: [
      { title: "Paneer Tikka", price: "₹269", description: "Succulent cottage cheese cubes marinated in Kashmiri chili and curd, roasted in clay oven.", isVeg: true, isPopular: true },
      { title: "Paneer Malai Tikka", price: "₹289", description: "Cottage cheese marinated in cashew paste, fresh dairy cream and green cardamom.", isVeg: true },
      { title: "Paneer Achari Tikka", price: "₹279", description: "Tangy mustard and pickle-spiced paneer skewers grilled over red hot embers.", isVeg: true },
      { title: "Paneer Angara Tikka", price: "₹279", description: "Smoky, fiery red tandoori paneer infused with roasted clove and chili smoke.", isVeg: true },
      { title: "Mushroom Tikka", price: "₹249", description: "Plump button mushrooms marinated in aromatic tandoori spices and charred golden.", isVeg: true },
      { title: "Stuffed Mushroom Tikka", price: "₹279", description: "Tender mushroom caps filled with spiced cheese and herbs, clay oven baked.", isVeg: true, isPopular: true },
      { title: "Chicken Tikka", price: "₹329", description: "Boneless chicken morsels marinated in spiced mustard oil and yogurt, roasted over embers.", isVeg: false, isPopular: true },
      { title: "Chicken Malai Tikka", price: "₹349", description: "Melt-in-mouth chicken steeped in cream, cheese and mild fragrant cardamom.", isVeg: false, isPopular: true },
      { title: "Tandoori Chicken", price: "₹299 (Half) / ₹549 (Full)", description: "The quintessential Punjabi tandoori roast with rustic spices, lime and chaat masala.", isVeg: false, isPopular: true },
    ],
  },
  {
    id: "chinese",
    label: "CHINESE",
    tag: "WOK SPECIALITIES",
    eyebrow: "INDO-CHINESE FLAVOURS",
    description: "Sizzling wok-tossed gravies, fragrant fried rice and silky soups balancing savory garlic, soy and fresh scallions.",
    image: foodImage,
    items: [
      { title: "Veg Manchurian Gravy", price: "₹199", description: "Minced vegetable dumplings simmered in savory garlic, ginger and dark soy reduction.", isVeg: true, isPopular: true },
      { title: "Chilli Paneer Gravy", price: "₹249", description: "Crisp paneer batons tossed with onions and green chilies in a glossy dark gravy.", isVeg: true, isPopular: true },
      { title: "Veg Fried Rice", price: "₹179", description: "Fragrant wok-tossed basmati rice with finely diced carrots, beans and spring onions.", isVeg: true },
      { title: "Chilli Chicken Gravy", price: "₹289", description: "Juicy chicken morsels in spicy soy-garlic gravy with slit green chilies and scallions.", isVeg: false, isPopular: true },
      { title: "Chicken Fried Rice", price: "₹229", description: "Long grain rice wok-tossed with egg ribbons, shredded chicken and light soy.", isVeg: false },
      { title: "Veg Sweet Corn Soup", price: "₹119", description: "Silky, comforting sweetcorn soup with minced vegetable confetti and white pepper.", isVeg: true },
      { title: "Hot & Sour Chicken Soup", price: "₹149", description: "Spicy, tangy broth infused with white pepper, chicken shreds and bamboo shoots.", isVeg: false },
    ],
  },
  {
    id: "main-course",
    label: "MAIN COURSE",
    tag: "HERITAGE CURRIES",
    eyebrow: "SLOW-COOKED EXCELLENCE",
    description: "Traditional Punjabi curries, rich slow-simmered lentils, velvety cottage cheese gravies and buttery chicken classics.",
    image: foodImage,
    items: [
      { title: "Dal Makhani", price: "₹229", description: "Black lentils slow-cooked overnight on gentle tandoor coals with butter and cream.", isVeg: true, isPopular: true },
      { title: "Butter Chicken", price: "₹349", description: "Tandoor-roasted chicken simmered in rich velvety makhani gravy enriched with butter.", isVeg: false, isPopular: true },
      { title: "Paneer Butter Masala", price: "₹279", description: "Cottage cheese simmered in a silky tomato, cashew nut and butter gravy.", isVeg: true, isPopular: true },
      { title: "Chicken Curry", price: "₹319", description: "Traditional Punjabi countryside chicken curry simmered with rustic whole spices.", isVeg: false },
      { title: "Kadhai Paneer", price: "₹249", description: "Paneer batons and bell peppers wok-tossed with freshly crushed coriander and red chilies.", isVeg: true },
      { title: "Shahi Paneer", price: "₹299", description: "Royally prepared cottage cheese in a velvety white and golden saffron-nut gravy.", isVeg: true, isPopular: true },
      { title: "Chicken Tikka Masala", price: "₹359", description: "Smoky charred chicken tikka pieces finished in spicy, thick tomato-onion masala.", isVeg: false, isPopular: true },
      { title: "Yellow Dal Tadka", price: "₹189", description: "Tempered yellow lentils with cumin, garlic, ripe tomatoes and desi ghee.", isVeg: true },
      { title: "Chicken Handi", price: "₹349", description: "Slow-simmered in an earthen handi with special pot spices and rich gravy.", isVeg: false },
      { title: "Mushroom Matar Methi Malai", price: "₹279", description: "Earthy mushrooms, peas and fresh fenugreek folded in rich dairy cream.", isVeg: true, isPopular: true },
    ],
  },
  {
    id: "rice-biryani",
    label: "RICE & BIRYANI",
    tag: "AROMATIC GRAINS",
    eyebrow: "DUM-SEALED BASMATI",
    description: "Royal aged long-grain basmati layered with fragrant spices, kewra essence, caramelized onions and served with chilled raita.",
    image: tasteDumBiryani,
    items: [
      { title: "Chicken Biryani with Raita", price: "₹319", description: "Fragrant long-grain basmati layered with marinated chicken, saffron and mint.", isVeg: false, isPopular: true },
      { title: "Chicken Dum Biryani with Raita", price: "₹349", description: "Sealed dum cooked chicken biryani infused with kewra, fried onions and boiled egg.", isVeg: false, isPopular: true },
      { title: "Veg Biryani", price: "₹219", description: "Garden vegetables and basmati rice slow-steamed with whole spices and saffron.", isVeg: true },
      { title: "Dum Veg Biryani with Raita", price: "₹269", description: "Clay-pot dum cooked vegetable biryani served with chilled cucumber raita.", isVeg: true, isPopular: true },
      { title: "Veg Pulao", price: "₹189", description: "Fluffy basmati tossed with cumin, whole cardamom and seasonal vegetable medley.", isVeg: true },
      { title: "Jeera Rice", price: "₹149", description: "Steamed basmati rice tempered with aromatic cumin seeds and golden desi ghee.", isVeg: true },
    ],
  },
  {
    id: "desserts",
    label: "DESSERTS",
    tag: "SWEET CONFECTIONS",
    eyebrow: "MEMORABLE FINALE",
    description: "Warm traditional milk confections, artisanal ice cream sundaes and hot decadent fudge.",
    image: cafeImage,
    items: [
      { title: "Hot Gulab Jamun (2 Pcs)", price: "₹79", description: "Deep-fried milk dumplings soaked in warm saffron and cardamom sugar syrup.", isVeg: true, isPopular: true },
      { title: "Choice of Ice Cream", price: "₹89", description: "Two generous scoops of vanilla bean, Alphonso mango, Belgian chocolate or kesar pista.", isVeg: true },
      { title: "Tooti Frooti Small", price: "₹99", description: "Candied fruit and fruit ice cream delight served chilled.", isVeg: true },
      { title: "Tooti Chocolate Frooti Large", price: "₹149", description: "Large ice cream sundae layered with chocolate drizzle, nuts and candied fruits.", isVeg: true, isPopular: true },
      { title: "Hot Chocolate Fudge", price: "₹149", description: "Vanilla bean ice cream layered with hot homemade dark chocolate fudge and roasted nuts.", isVeg: true, isPopular: true },
    ],
  },
];

const signatureDishesData = [
  {
    title: "Dal Makhani",
    category: "MAIN COURSE VEG",
    price: "₹229",
    description: "Slow-simmered black lentils cooked overnight on gentle clay coals with white butter and fresh dairy cream.",
    image: foodImage,
    isVeg: true,
  },
  {
    title: "Butter Chicken",
    category: "MAIN COURSE NON-VEG",
    price: "₹349",
    description: "Tender tandoor-roasted chicken morsels steeped in a velvety makhani gravy enriched with churned butter.",
    image: heroFoodImage,
    isVeg: false,
  },
  {
    title: "Paneer Tikka",
    category: "TANDOORI",
    price: "₹269",
    description: "Succulent cottage cheese cubes marinated in Kashmiri chili and hung curd, roasted over live embers.",
    image: signaturePaneerTikkaImage,
    isVeg: true,
  },
  {
    title: "Amritsari Fish Fry",
    category: "FISH SPECIALITY",
    price: "₹359",
    description: "Crispy carom seed-scented river sole fillets fried golden, served hot with house mint chutney.",
    image: heroFoodImage,
    isVeg: false,
  },
  {
    title: "Get 2 Gather Special Pizza",
    category: "ARTISAN PIZZA",
    price: "₹279",
    description: "Stone-baked hand-stretched pie loaded with spiced paneer, roasted peppers, jalapenos and double cheese.",
    image: foodImage,
    isVeg: true,
  },
  {
    title: "Hot Chocolate Fudge",
    category: "DESSERT",
    price: "₹149",
    description: "Artisan vanilla bean ice cream drenched in warm homemade dark chocolate fudge and toasted cashews.",
    image: cafeImage,
    isVeg: true,
  },
];

const galleryItemsData = [
  {
    src: masterpieceInteriorImage,
    alt: "Vaulted ceiling dining hall with chandeliers and emerald booths at Get 2 Gather",
    title: "Masterpiece Timber Hall",
    category: "interior",
    categoryLabel: "Grand Dining",
    description: "Dramatic sculpted ceiling rafters and crystal lighting reflecting across spacious family booth dining.",
    className: "gallery-tile-hero",
    objectPosition: "center 45%",
    isFeatured: true,
  },
  {
    src: entrancePergolaImage,
    alt: "Outdoor bamboo pergola entrance walkway framed with potted greenery and tiles",
    title: "Pergola Walkway Entrance",
    category: "outdoor",
    categoryLabel: "Outdoor Pergola",
    description: "A scenic outdoor bamboo pergola walkway with lush potted greenery and traditional patterned tile flooring welcoming you into the restaurant.",
    className: "gallery-tile-tall",
    objectPosition: "center 28%",
  },
  {
    src: emeraldLoungeImage,
    alt: "Emerald green tufted booth seating with illuminated arched art niches",
    title: "Emerald Art Lounge",
    category: "lounge",
    categoryLabel: "Art Lounge",
    description: "Boutique dining lounge featuring deep emerald tufted booth seating, warm wood fluting with cove illumination, and illuminated arched wall niches.",
    className: "gallery-tile-tall",
    objectPosition: "center 66%",
  },
  {
    src: seatingLoungeImage,
    alt: "Chesterfield sofa booths and wooden tables under vaulted architectural ceiling",
    title: "Chesterfield Sofa Lounge",
    category: "interior",
    categoryLabel: "Grand Dining",
    description: "Deep-buttoned Chesterfield sofas paired with dark wood tables and olive green dining chairs under the sculpted vaulted ceiling.",
    className: "gallery-tile-tall",
    objectPosition: "center 88%",
  },
  {
    src: foodImage,
    alt: "Authentic freshly prepared Indian curry dishes and tandoori breads",
    title: "Authentic Indian Feast",
    category: "culinary",
    categoryLabel: "Culinary",
    description: "A rich assortment of freshly prepared curries, warm tandoori breads, and comforting North Indian culinary favorites.",
    className: "gallery-tile-standard",
    objectPosition: "center center",
  },
  {
    src: cafeImage,
    alt: "Artisanal espresso coffee and refreshing cold beverages at Get 2 Gather cafe",
    title: "Artisanal Cafe & Beverages",
    category: "culinary",
    categoryLabel: "Cafe Bar",
    description: "Handcrafted coffee, specialty mocktails, and freshly prepared shakes crafted with premium ingredients.",
    className: "gallery-tile-standard",
    objectPosition: "center center",
  },
  {
    src: palmDiningRoomImage,
    alt: "Tropical palm mural dining room with pergola wooden rafters and orb lights",
    title: "Tropical Palm Room",
    category: "interior",
    categoryLabel: "Grand Dining",
    description: "Chic dining accented with an exotic palm tree mural wall, geometric wooden beams, and soft perimeter glow for intimate meals.",
    className: "gallery-tile-tall",
    objectPosition: "center 82%",
  },
  {
    src: grandDiningHallImage,
    alt: "Spacious grand dining hall with vaulted ceiling and crystal chandeliers",
    title: "Grand Dining Hall",
    category: "interior",
    categoryLabel: "Grand Dining",
    description: "Expansive family dining hall with warm architectural chandeliers, soaring vaulted ceiling, and comfortable seating.",
    className: "gallery-tile-tall",
    objectPosition: "center 75%",
  },
  {
    src: bambooWindowBoothImage,
    alt: "Sunlit bamboo ceiling dining booth with window and flower niche",
    title: "Sunlit Bamboo Corner",
    category: "lounge",
    categoryLabel: "Bamboo Cafe",
    description: "Cozy daylight seating framed by handcrafted bamboo ceilings, elegant window drapes, ochre benches, and illuminated flower niches.",
    className: "gallery-tile-tall",
    objectPosition: "center 78%",
  },
  {
    src: bambooLoungeImage,
    alt: "Rustic bamboo cafe lounge with lanterns and arched niches",
    title: "Rustic Bamboo Cafe & Alcoves",
    category: "lounge",
    categoryLabel: "Bamboo Cafe",
    description: "Cozy retreat featuring handcrafted bamboo slatted ceilings, woven pendant lanterns, arched alcoves with lush planters, and comfortable banquet seating.",
    className: "gallery-tile-wide",
    objectPosition: "center 60%",
  },
  {
    src: tableImage,
    alt: "Elegantly arranged dining table set for family gathering",
    title: "Curated Table Setup",
    category: "culinary",
    categoryLabel: "Dining Setup",
    description: "Thoughtfully arranged dining tables set with fine tableware, ready to host family gatherings and memorable get-togethers.",
    className: "gallery-tile-standard",
    objectPosition: "center center",
  },
];

/* ========================================================
   CUSTOM DESKTOP CURSOR
   ======================================================== */
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let rafId: number;

    const onMouseMove = (e: globalThis.MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, [role='button'], input, select, textarea, .card-3d-tilt-wrap");
        if (interactive && !isHovering) {
          isHovering = true;
          ringRef.current?.classList.add("cursor-hover-active");
        } else if (!interactive && isHovering) {
          isHovering = false;
          ringRef.current?.classList.remove("cursor-hover-active");
        }
      }
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
    </>
  );
}

/* ========================================================
   RESERVATION MODAL
   ======================================================== */
interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("Dinner (07:30 PM - 09:00 PM)");
  const [guests, setGuests] = useState("4 Guests");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleWhatsAppReserve = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Get 2 Gather, I would like to reserve a table:
• Name: ${name || "Guest"}
• Phone: ${phone || "Not specified"}
• Date: ${date || "Today / Upcoming"}
• Time: ${timeSlot}
• Guests: ${guests}
${notes ? `• Special Notes: ${notes}` : ""}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
    onClose();
  };

  return (
    <div className="reservation-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="reservation-modal-panel cinematic-reveal is-revealed"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="reservation-modal-close"
          onClick={onClose}
          aria-label="Close Reservation Modal"
        >
          <X />
        </button>

        <div className="reservation-modal-header">
          <div className="eyebrow eyebrow-gold">
            <Sparkles size={13} className="eyebrow-icon-spin" aria-hidden="true" />
            <span>TABLE RESERVATION</span>
            <Sparkles size={13} className="eyebrow-icon-spin" aria-hidden="true" />
          </div>
          <h3>RESERVE YOUR TABLE</h3>
          <p>Experience heartfelt hospitality, glowing chandeliers and authentic flavours.</p>
        </div>

        <form onSubmit={handleWhatsAppReserve} className="reservation-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="res-name">Your Name</label>
              <input
                id="res-name"
                type="text"
                required
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="res-phone">Phone Number</label>
              <input
                id="res-phone"
                type="tel"
                required
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="res-date">Preferred Date</label>
              <input
                id="res-date"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="res-guests">Number of Guests</label>
              <select
                id="res-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="2 Guests">2 Guests (Couple / Pair)</option>
                <option value="4 Guests">4 Guests (Family Table)</option>
                <option value="6 Guests">6 Guests (Group Dining)</option>
                <option value="8 Guests">8 Guests (Large Family)</option>
                <option value="10+ Guests">10+ Guests (Celebration Party)</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="res-time">Seating Time</label>
              <select
                id="res-time"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
              >
                <option value="Lunch (12:30 PM - 02:00 PM)">Lunch (12:30 PM - 02:00 PM)</option>
                <option value="Afternoon Cafe (03:30 PM - 05:30 PM)">Afternoon Cafe (03:30 PM - 05:30 PM)</option>
                <option value="Dinner - Early (07:00 PM - 08:30 PM)">Dinner - Early (07:00 PM - 08:30 PM)</option>
                <option value="Dinner - Prime (08:30 PM - 10:00 PM)">Dinner - Prime (08:30 PM - 10:00 PM)</option>
                <option value="Dinner - Late (10:00 PM - 11:00 PM)">Dinner - Late (10:00 PM - 11:00 PM)</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="res-notes">Special Requests (Optional)</label>
              <input
                id="res-notes"
                type="text"
                placeholder="Birthday, anniversary, quiet corner booth, high chair..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>

          <div className="reservation-modal-actions">
            <button type="submit" className="modal-submit-whatsapp-btn">
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              <span>Confirm via WhatsApp</span>
            </button>
            <a href={phoneHref} className="modal-call-btn">
              <Phone size={15} />
              <span>Direct Call: {phoneDisplay}</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ========================================================
   FLOATING WHATSAPP & INSTAGRAM SOCIAL DOCK
   ======================================================== */
function FloatingSocialDock() {
  return (
    <aside className="floating-social-dock" aria-label="Social and messaging shortcuts">
      {/* Floating Instagram Button */}
      <a
        href={instagramHref}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-social-btn floating-instagram-btn"
        aria-label="Follow Get 2 Gather on Instagram (@get2gather.gsp)"
      >
        <span className="social-tooltip" role="tooltip">Follow us</span>
        <div className="social-icon-box instagram-box">
          <InstagramIcon className="w-5 h-5 text-white" />
        </div>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-social-btn floating-whatsapp-btn"
        aria-label="Chat with Get 2 Gather on WhatsApp"
      >
        <span className="social-pulse-aura" aria-hidden="true" />
        <span className="social-tooltip" role="tooltip">Chat with us</span>
        <div className="social-icon-box whatsapp-box">
          <WhatsAppIcon className="w-6 h-6 text-white" />
        </div>
      </a>
    </aside>
  );
}

/* ========================================================
   LUXURY BRAND INSIGNIA EMBLEM
   ======================================================== */
function BrandInsignia({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`brand-seal-badge ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div className="brand-seal-frame">
        <img
          src={officialLogoImage}
          alt="Get To Gether Restaurant Official Logo"
          className="brand-official-logo-img"
          width={size}
          height={size}
          loading="eager"
        />
      </div>
      <div className="brand-seal-glow" />
    </div>
  );
}

/* ========================================================
   FLOATING NAVBAR COMPONENT
   ======================================================== */
interface NavbarProps {
  onOpenReservation: () => void;
}

function Navbar({ onOpenReservation }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number; opacity: number }>({
    x: 0,
    y: 0,
    opacity: 0,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 25);

      const sectionIds = ["home", "about", "menu", "experience", "gallery", "reviews", "contact"];
      const scrollPos = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleNavMouseLeave = () => {
    setCursorPos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <header className={`site-header-wrapper ${scrolled ? "header-scrolled" : ""}`}>
      {/* Cinematic Ambient Glow Aura Behind Header */}
      <div className="navbar-cinematic-aura" aria-hidden="true" />

      {/* Main Floating Luxury Glass Island */}
      <div className="site-navbar-island">
        {/* Brand Mark Area */}
        <a href="#home" className="brand-mark-luxe" aria-label="Get 2 Gather Restaurant & Cafe Home">
          <BrandInsignia size={44} />
          <div className="brand-text-block">
            <span className="brand-name-serif">GET 2 GATHER</span>
            <span className="brand-sub-badge">
              <span className="brand-sub-diamond">✦</span>
              RESTAURANT &amp; CAFE
              <span className="brand-sub-diamond">✦</span>
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Track with Cursor Halo */}
        <nav
          className="desktop-nav-island"
          aria-label="Main Navigation"
          onMouseMove={handleNavMouseMove}
          onMouseLeave={handleNavMouseLeave}
        >
          {/* Subtle Cursor-Following Glow Spotlight */}
          <div
            className="nav-cursor-spotlight"
            style={{
              transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) translate(-50%, -50%)`,
              opacity: cursorPos.opacity,
            }}
            aria-hidden="true"
          />

          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link-luxe ${isActive ? "active" : ""}`}
              >
                <span>{item.label}</span>
                {isActive && <span className="nav-active-pip" aria-hidden="true" />}
              </a>
            );
          })}
        </nav>

        {/* Right Reserve A Table Button (Desktop) */}
        <div className="desktop-navbar-right-actions">
          <button
            type="button"
            onClick={onOpenReservation}
            className="desktop-reserve-luxe-btn"
            aria-label="Reserve a table"
          >
            <Calendar size={13} className="reserve-cal-icon" aria-hidden="true" />
            <span className="reserve-btn-text">RESERVE A TABLE</span>
            <div className="reserve-shine-beam" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Right Controls: Quick Call + Quick Reserve Pill + Animated Hamburger */}
        <div className="mobile-navbar-actions">
          <a
            href={phoneHref}
            className="mobile-quick-call-btn"
            aria-label="Call Restaurant"
            title={`Call ${phoneDisplay}`}
          >
            <Phone size={13} aria-hidden="true" />
            <span className="mobile-btn-text">CALL</span>
          </a>

          <button
            type="button"
            onClick={onOpenReservation}
            className="mobile-quick-reserve-btn"
            aria-label="Reserve a table"
          >
            <Calendar size={13} aria-hidden="true" />
            <span className="mobile-btn-text">RESERVE</span>
          </button>

          <button
            type="button"
            className={`mobile-menu-trigger-luxe ${open ? "is-open" : ""}`}
            aria-label={open ? "Close Navigation Menu" : "Open Navigation Menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="hamburger-bar hamburger-bar-top" />
            <span className="hamburger-bar hamburger-bar-mid" />
            <span className="hamburger-bar hamburger-bar-bot" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Cinematic Glass Panel) */}
      {open && (
        <div className="mobile-menu-luxe" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <div className="mobile-drawer-aura" aria-hidden="true" />
          <div className="mobile-menu-top">
            <a href="#home" className="brand-mark-luxe" onClick={() => setOpen(false)}>
              <BrandInsignia size={42} />
              <div className="brand-text-block">
                <span className="brand-name-serif">GET 2 GATHER</span>
                <span className="brand-sub-badge">RESTAURANT &amp; CAFE</span>
              </div>
            </a>
            <button
              type="button"
              className="mobile-menu-close-luxe"
              aria-label="Close Navigation"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick 4-Action Matrix: Call / Menu / Reserve / Map */}
          <div className="mobile-drawer-quick-actions">
            <a
              href={phoneHref}
              className="mobile-quick-card"
              onClick={() => setOpen(false)}
              aria-label="Call Restaurant"
            >
              <div className="quick-card-icon">
                <Phone size={16} />
              </div>
              <div className="quick-card-text">
                <span className="quick-card-label">CALL</span>
                <span className="quick-card-sub">{phoneDisplay}</span>
              </div>
            </a>

            <a
              href="#menu"
              className="mobile-quick-card"
              onClick={() => setOpen(false)}
              aria-label="View Menu"
            >
              <div className="quick-card-icon">
                <UtensilsCrossed size={16} />
              </div>
              <div className="quick-card-text">
                <span className="quick-card-label">MENU</span>
                <span className="quick-card-sub">120+ Dishes</span>
              </div>
            </a>

            <button
              type="button"
              className="mobile-quick-card"
              onClick={() => {
                setOpen(false);
                onOpenReservation();
              }}
              aria-label="Reserve a Table"
            >
              <div className="quick-card-icon">
                <Calendar size={16} />
              </div>
              <div className="quick-card-text">
                <span className="quick-card-label">RESERVE</span>
                <span className="quick-card-sub">Table Booking</span>
              </div>
            </button>

            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-quick-card"
              onClick={() => setOpen(false)}
              aria-label="Get Directions"
            >
              <div className="quick-card-icon">
                <MapPin size={16} />
              </div>
              <div className="quick-card-text">
                <span className="quick-card-label">MAP</span>
                <span className="quick-card-sub">Get Directions</span>
              </div>
            </a>
          </div>

          <nav className="mobile-nav-links">
            {navItems.map((item, idx) => {
              const id = item.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={isActive ? "active" : ""}
                  style={{ animationDelay: `${0.05 + idx * 0.04}s` }}
                  onClick={() => setOpen(false)}
                >
                  <span className="mobile-link-name">{item.label}</span>
                  <ArrowUpRight size={17} className="mobile-link-arrow" />
                </a>
              );
            })}
          </nav>

          <div className="mobile-drawer-footer">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onOpenReservation();
              }}
              className="mobile-drawer-reserve-btn"
            >
              <Calendar size={16} />
              <span>RESERVE A TABLE</span>
              <div className="reserve-shine-beam" aria-hidden="true" />
            </button>

            <a href={phoneHref} className="desktop-call-luxe mobile-full-call">
              <div className="call-luxe-icon-wrap">
                <Phone className="call-luxe-icon" size={15} />
              </div>
              <div className="call-luxe-text">
                <span className="call-luxe-label">CALL DIRECT</span>
                <span className="call-luxe-num">{phoneDisplay}</span>
              </div>
            </a>
            <p className="mobile-drawer-address">
              Tibri Rd, near Punjab Nursery, Gurdaspur, Punjab 143521
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

/* ========================================================
   CINEMATIC HERO COMPONENT (PERMANENT CINEMATIC HERO)
   ======================================================== */
interface HeroProps {
  onOpenReservation: () => void;
}

function Hero({ onOpenReservation }: HeroProps) {
  const heroParallaxRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroRatingRef = useRef<HTMLDivElement>(null);
  const heroScrollRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId: number;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight || 800;

      if (scrollY <= vh * 1.3) {
        const progress = Math.min(1, Math.max(0, scrollY / vh));

        // Parallax depth & slow reveal scaling on the background interior image
        if (heroParallaxRef.current) {
          const pY = scrollY * 0.35;
          const pScale = 1.0 + progress * 0.08;
          heroParallaxRef.current.style.transform = `translate3d(0, ${pY.toFixed(1)}px, 0) scale(${pScale.toFixed(3)})`;
        }

        // Title and typography float upward, scale gently and fade out smoothly
        if (heroContentRef.current) {
          const cY = -scrollY * 0.4;
          const cScale = 1.0 - progress * 0.08;
          const cOpacity = Math.max(0, 1.0 - progress * 1.55);
          heroContentRef.current.style.transform = `translate3d(0, ${cY.toFixed(1)}px, 0) scale(${cScale.toFixed(3)})`;
          heroContentRef.current.style.opacity = cOpacity.toFixed(3);
        }

        // Floating cues fade out gracefully upon initial scroll
        if (heroRatingRef.current) {
          heroRatingRef.current.style.opacity = Math.max(0, 1.0 - progress * 3).toFixed(2);
        }
        if (heroScrollRef.current) {
          heroScrollRef.current.style.opacity = Math.max(0, 1.0 - progress * 3).toFixed(2);
        }
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-wrap">
        <div ref={heroParallaxRef} className="hero-parallax-layer">
          <img
            src={masterpieceInteriorImage}
            alt="Get 2 Gather Restaurant & Cafe interior with glowing chandeliers, dark wooden beams, and lush greenery"
            className="hero-image-kenburns"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="hero-overlay" />
        </div>
      </div>

      <div ref={heroContentRef} className="hero-content cinematic-hero-center">
        <div className="hero-brand-seal">
          <div className="hero-seal-disc">
            <img src={officialLogoImage} alt="Get To Gether Emblem" width={42} height={42} />
          </div>
        </div>

        <h1 className="hero-cinematic-title">GET TO GETHER</h1>

        <div className="hero-cinematic-sub-wrap">
          <span className="hero-sub-line" />
          <p className="hero-cinematic-subtitle">GOOD FOOD • GOOD MOMENTS</p>
          <span className="hero-sub-line" />
        </div>

        <p className="hero-cinematic-tagline">
          Good food, beautiful surroundings and unforgettable moments — all in one place.
        </p>

        <div className="hero-actions">
          <a href="#menu" className="hero-btn-gold">
            <span>EXPLORE MENU</span>
            <ArrowDown aria-hidden="true" size={15} />
          </a>
          <button
            type="button"
            onClick={onOpenReservation}
            className="hero-btn-outline"
          >
            <Calendar aria-hidden="true" size={15} />
            <span>RESERVE A TABLE</span>
          </button>
        </div>
      </div>

      <div
        ref={heroRatingRef}
        className="hero-rating-badge"
        aria-label="Google rating 4.5 from 47 reviews"
      >
        <div className="hero-rating-score">
          <span>4.5</span>
          <Star aria-hidden="true" size={14} />
        </div>
        <span className="hero-rating-label">47 Reviews · Gurdaspur</span>
      </div>

      <a
        ref={heroScrollRef}
        href="#about"
        className="hero-scroll-indicator"
        aria-label="Scroll to explore"
      >
        <span className="hero-scroll-text">SCROLL TO EXPLORE</span>
        <div className="hero-scroll-line" />
      </a>
    </section>
  );
}

/* ========================================================
   OUR STORY SECTION ("MORE THAN JUST A MEAL.")
   ======================================================== */
const storyViews = [
  {
    id: "emerald-lounge",
    src: emeraldLoungeImage,
    title: "Bamboo & Art Lounge",
    badge: "Emerald Art Lounge · Tibri Road",
    alt: "Get 2 Gather authentic interior featuring handcrafted bamboo ceiling, illuminated Moroccan lantern niche mural, emerald green leather booth, and set dining tables",
  },
  {
    id: "bamboo-booth",
    src: bambooWindowBoothImage,
    title: "Floral Arch Window Booth",
    badge: "Floral Arch Booth · Tibri Road",
    alt: "Get 2 Gather dining booth with arched floral niche, mustard seating, and natural daylight",
  },
  {
    id: "palm-room",
    src: palmDiningRoomImage,
    title: "Timber Vaults & Palm Hall",
    badge: "Timber Vaults & Chandeliers",
    alt: "Get 2 Gather dining hall with crystal chandelier, timber vault beam ceiling, and palm tree wall mural",
  },
];

function OurStorySection() {
  const [activeViewIdx, setActiveViewIdx] = useState(0);
  const activeView = storyViews[activeViewIdx];

  return (
    <section id="about" className="intro-section section-pad">
      <div className="content-shell intro-grid">
        <div className="intro-text cinematic-reveal">
          <div className="eyebrow eyebrow-gold">
            <span className="eyebrow-line" />
            <span>OUR STORY</span>
            <span className="eyebrow-line" />
          </div>
          <h2>
            MORE THAN
            <br />
            <em>JUST A MEAL.</em>
          </h2>
          <p>
            Get 2 Gather is designed as a welcoming sanctuary in Gurdaspur where great food, warm hospitality and meaningful time together meet. Beneath glowing crystal chandeliers and hand-crafted timber vaults, our doors are open for the moments that truly matter.
          </p>
          <p>
            Whether you are visiting for relaxed dine-in meals, selecting convenient kerbside pickup, or arranging doorstep deliveries, we bring people closer over freshly prepared flavours, aromatic whole spices, and heartfelt comfort.
          </p>

          <div className="intro-features">
            <div className="intro-feature-item">
              <UtensilsCrossed />
              <span>DINE-IN</span>
            </div>
            <div className="intro-feature-item">
              <PackageCheck />
              <span>TAKEAWAY</span>
            </div>
            <div className="intro-feature-item">
              <Car />
              <span>DELIVERY</span>
            </div>
            <div className="intro-feature-item">
              <UsersRound />
              <span>FAMILY FRIENDLY</span>
            </div>
          </div>
        </div>

        <div className="intro-image-frame-container cinematic-reveal">
          <div className="intro-image-frame">
            <img
              key={activeView.id}
              src={activeView.src}
              alt={activeView.alt}
              loading="lazy"
              width={900}
              height={1200}
              className="intro-frame-img"
            />
            <div className="intro-image-overlay" />

            <div className="intro-seal-badge">
              <div className="intro-seal-logo-wrap">
                <img src={officialLogoImage} alt="Get To Gether Official Emblem" width={42} height={42} />
              </div>
              <div className="intro-seal-text">
                <span className="intro-seal-title">ESTABLISHED GURDASPUR</span>
                <span className="intro-seal-sub">Good Food · Great Company</span>
              </div>
            </div>

            <div className="intro-caption-badge">
              <span>{activeView.badge}</span>
            </div>

            <div className="intro-view-switcher" role="tablist" aria-label="Ambience Views">
              {storyViews.map((view, idx) => (
                <button
                  key={view.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeViewIdx}
                  className={`intro-view-dot ${idx === activeViewIdx ? "is-active" : ""}`}
                  onClick={() => setActiveViewIdx(idx)}
                  title={view.title}
                >
                  <span className="sr-only">{view.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="intro-view-tabs" role="tablist" aria-label="Select Restaurant View">
            {storyViews.map((view, idx) => (
              <button
                key={view.id}
                type="button"
                className={`intro-tab-btn ${idx === activeViewIdx ? "is-active" : ""}`}
                onClick={() => setActiveViewIdx(idx)}
              >
                <span className="intro-tab-num">0{idx + 1}</span>
                <span className="intro-tab-title">{view.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   RESTAURANT EXPERIENCE SECTION ("STEP INTO THE ATMOSPHERE")
   ======================================================== */
function RestaurantExperienceSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollExperience = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -340 : 340,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="experience" className="experience-cinematic-section section-pad">
      <div className="experience-ambient-glow" aria-hidden="true" />

      <div className="content-shell">
        <div className="experience-header-row cinematic-reveal">
          <div className="section-heading section-heading-dark">
            <div className="eyebrow eyebrow-gold">
              <span className="eyebrow-line" />
              <span>SPATIAL DESIGN &amp; AMBIENCE</span>
              <span className="eyebrow-line" />
            </div>
            <h2>
              STEP INTO THE
              <br />
              <em>ATMOSPHERE</em>
            </h2>
            <p className="section-copy">
              Chandeliers, timber vaults, warm amber glows and living greenery woven into an unforgettable gathering space in Gurdaspur.
            </p>
          </div>

          <div className="experience-nav-arrows">
            <button
              type="button"
              onClick={() => scrollExperience("left")}
              className="experience-arrow-btn"
              aria-label="Scroll experience left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scrollExperience("right")}
              className="experience-arrow-btn"
              aria-label="Scroll experience right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Cinematic Panorama Track */}
        <div className="experience-panorama-track" ref={scrollRef}>
          {atmosphereHighlights.map((item, idx) => (
            <Card3DTilt
              key={item.id}
              className="experience-panorama-card cinematic-reveal"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="panorama-card-media">
                <img
                  src={item.image}
                  alt={item.title}
                  className="panorama-card-img"
                  loading="lazy"
                  width={600}
                  height={420}
                />
                <div className="panorama-card-overlay" />
                <span className="panorama-card-tag">{item.tag}</span>
              </div>

              <div className="panorama-card-body">
                <span className="panorama-card-sub">{item.subtitle}</span>
                <h3 className="panorama-card-title">{item.title}</h3>
                <p className="panorama-card-desc">{item.description}</p>
              </div>
            </Card3DTilt>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   SERVICES / EXPERIENCES SECTION
   ======================================================== */
interface ServicesSectionProps {
  onOpenReservation: () => void;
}

function ServicesSection({ onOpenReservation }: ServicesSectionProps) {
  return (
    <section className="services-section section-pad">
      <div className="services-ambient-glow" aria-hidden="true" />

      <div className="content-shell">
        <div className="services-header-row cinematic-reveal">
          <div className="section-heading section-heading-dark">
            <div className="eyebrow eyebrow-gold">
              <span className="eyebrow-line" />
              <span>SERVICES &amp; EXPERIENCES</span>
              <span className="eyebrow-line" />
            </div>
            <h2>
              HOWEVER YOU GATHER,
              <br />
              <em>WE&apos;RE HERE.</em>
            </h2>
            <p className="section-copy">
              Every dining preference is welcomed with attentive care, authentic hospitality, and flavours worth remembering.
            </p>
          </div>

          <div className="services-showcase-card">
            <div className="services-showcase-frame">
              <img
                src={tableImage}
                alt="Elegantly curated dining table at Get 2 Gather Restaurant"
                className="services-showcase-img"
                loading="lazy"
                width={800}
                height={520}
              />
              <div className="services-showcase-overlay" />
              <div className="services-showcase-top-badge">
                <Sparkles className="showcase-badge-icon" aria-hidden="true" />
                <span>EXPERIENCE GET 2 GATHER</span>
              </div>
              <div className="services-showcase-bottom-bar">
                <div className="services-showcase-bar-content">
                  <span className="showcase-live-dot" />
                  <div>
                    <strong>Bespoke Tables &amp; Attentive Hospitality</strong>
                    <p>Designed for intimate dinners, family reunions &amp; celebrations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services-grid">
          {serviceCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Card3DTilt
                key={card.title}
                className="service-card-luxe cinematic-reveal"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="service-card-bg-wrap">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="service-card-bg"
                    loading="lazy"
                    width={600}
                    height={750}
                  />
                  <div className="service-card-overlay" />
                </div>

                <div className="service-card-top">
                  <div className="service-card-badge-wrap">
                    <span className="service-card-icon-glass">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="service-card-tag">{card.tag}</span>
                  </div>
                  <span className="service-card-num">{card.number}</span>
                </div>

                <div className="service-card-content">
                  <span className="service-card-subtitle">{card.subtitle}</span>
                  <h3 className="service-card-title">{card.title}</h3>
                  <p className="service-card-copy">{card.copy}</p>

                  {card.title === "GATHER TOGETHER" ? (
                    <button
                      type="button"
                      onClick={onOpenReservation}
                      className="service-card-cta"
                    >
                      <span>{card.actionLabel}</span>
                      <ArrowRight className="service-card-arrow" aria-hidden="true" />
                    </button>
                  ) : (
                    <a
                      href={card.actionHref}
                      className="service-card-cta"
                      aria-label={`${card.actionLabel} for ${card.title}`}
                    >
                      <span>{card.actionLabel}</span>
                      <ArrowRight className="service-card-arrow" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </Card3DTilt>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   FOUNDER & OWNER SECTION ("THE MAN BEHIND THE EXPERIENCE")
   - Official Owner Portrait: Maninder Singh
   - Deep Forest: #17251F
   - Ivory: #F4EFE5
   - Gold: #C8A45D
   - Walnut: #34221C
   ======================================================== */
function FounderSection() {
  const imageCardRef = useRef<HTMLDivElement>(null);

  return (
    <section id="founder" className="founder-cinematic-section section-pad">
      {/* Cinematic Deep Forest & Amber Glows */}
      <div className="founder-ambient-glow" aria-hidden="true" />
      <div className="founder-forest-vignette" aria-hidden="true" />

      <div className="content-shell founder-shell">
        <div className="founder-grid">
          {/* Left: Founder Editorial Portrait */}
          <div className="founder-portrait-col cinematic-reveal">
            <div ref={imageCardRef} className="founder-portrait-frame-wrap">
              {/* Luxury Gold Corner Filigree */}
              <div className="founder-gold-corner corner-top-left" aria-hidden="true" />
              <div className="founder-gold-corner corner-bottom-right" aria-hidden="true" />

              <div className="founder-portrait-frame">
                <img
                  src={maninderSinghFounderImage}
                  alt="Maninder Singh — Founder & Host at Get 2 Gather Restaurant & Cafe"
                  className="founder-portrait-img"
                  loading="lazy"
                  width={520}
                  height={520}
                />
                <div className="founder-portrait-overlay" />
              </div>

              {/* Floating Luxury Founder Seal Badge */}
              <div className="founder-seal-badge">
                <span className="founder-seal-icon">✦</span>
                <div className="founder-seal-text">
                  <span className="founder-seal-role">FOUNDER &amp; HOST</span>
                  <span className="founder-seal-name">MANINDER SINGH</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Founder Narrative & Details */}
          <div className="founder-story-col cinematic-reveal">
            <div className="founder-eyebrow">
              <span className="founder-eyebrow-line" />
              <span>MEET THE FOUNDER</span>
              <span className="founder-eyebrow-line" />
            </div>

            <h2 className="founder-concept-title">
              THE MAN BEHIND
              <br />
              <em>THE EXPERIENCE</em>
            </h2>

            <div className="founder-identity-block">
              <h3 className="founder-name">Maninder Singh</h3>
              <p className="founder-role-sub">
                <span>✦</span> Founder &amp; Host — Get 2 Gather <span>✦</span>
              </p>
            </div>

            <p className="founder-bio">
              At Get 2 Gather, every meal is more than just food — it is an experience created with warmth, quality and a genuine passion for bringing people together. Maninder Singh brings a personal touch to the restaurant, creating a welcoming atmosphere where great food, meaningful conversations and memorable moments come together.
            </p>

            {/* Luxury Quote Card */}
            <div className="founder-quote-card">
              <div className="founder-quote-icon-wrap" aria-hidden="true">
                <Quote size={20} className="founder-quote-glyph" />
              </div>
              <blockquote className="founder-quote-text">
                &ldquo;Good food brings people together. Great experiences make them stay.&rdquo;
              </blockquote>
              <div className="founder-quote-author">— Maninder Singh</div>
            </div>

            {/* Premium Instagram Social CTA */}
            <div className="founder-actions">
              <a
                href="https://www.instagram.com/maninder_singh_pbo6/"
                target="_blank"
                rel="noopener noreferrer"
                className="founder-instagram-btn"
                aria-label="Follow Maninder Singh on Instagram @maninder_singh_pbo6"
              >
                <div className="founder-ig-icon-box">
                  <Instagram size={18} />
                </div>
                <div className="founder-ig-text-group">
                  <span className="founder-ig-label">Follow Maninder Singh</span>
                  <span className="founder-ig-handle">@maninder_singh_pbo6</span>
                </div>
                <ArrowUpRight size={16} className="founder-ig-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   THE ART OF DINING (INTERACTIVE MENU SECTION)
   ======================================================== */
function MenuSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("main-course");
  const [filterType, setFilterType] = useState<"all" | "veg" | "non-veg">("all");
  const tabsScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSelectCategory = (e: Event) => {
      const customEvent = e as CustomEvent<{ categoryId: string }>;
      if (customEvent.detail?.categoryId) {
        setActiveCategoryId(customEvent.detail.categoryId);
      }
    };
    window.addEventListener("select-menu-category", handleSelectCategory);
    return () => window.removeEventListener("select-menu-category", handleSelectCategory);
  }, []);

  const activeCategory =
    menuCategoriesData.find((cat) => cat.id === activeCategoryId) || menuCategoriesData[0];

  const scrollTabs = (direction: "left" | "right") => {
    if (tabsScrollRef.current) {
      tabsScrollRef.current.scrollBy({
        left: direction === "left" ? -280 : 280,
        behavior: "smooth",
      });
    }
  };

  const filteredItems = activeCategory.items.filter((item) => {
    if (filterType === "veg") return item.isVeg;
    if (filterType === "non-veg") return !item.isVeg;
    return true;
  });

  return (
    <section id="menu" className="digital-menu-section section-pad">
      <div className="content-shell">
        <div className="section-heading section-heading-dark cinematic-reveal">
          <div className="eyebrow eyebrow-gold">
            <span className="eyebrow-line" />
            <span>CULINARY COLLECTION</span>
            <span className="eyebrow-line" />
          </div>
          <h2>
            THE ART OF
            <br />
            <em>DINING</em>
          </h2>
          <p className="section-copy">
            Explore 10 curated sections crafted with fresh whole spices, slow-simmered rich curries, and live tandoori charcoal traditions.
          </p>
        </div>

        {/* Category Navigation Bar */}
        <div className="menu-tabs-luxury-container cinematic-reveal">
          <button
            type="button"
            className="menu-tabs-scroll-arrow arrow-left"
            onClick={() => scrollTabs("left")}
            aria-label="Scroll categories left"
          >
            <ChevronLeft aria-hidden="true" />
          </button>

          <div
            className="menu-tabs-scroll-wrapper"
            ref={tabsScrollRef}
            role="tablist"
            aria-label="Restaurant food categories"
          >
            <div className="menu-tabs-track">
              {menuCategoriesData.map((cat) => {
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={isActive}
                    className={`menu-luxury-tab-btn ${isActive ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveCategoryId(cat.id);
                      (e.currentTarget as HTMLElement).scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center",
                      });
                    }}
                  >
                    <span className="tab-pill-diamond" aria-hidden="true">
                      {isActive ? "✦" : "•"}
                    </span>
                    <span className="tab-pill-label">{cat.label}</span>
                    <span className="tab-pill-count">{cat.items.length}</span>
                    {isActive && <span className="tab-active-glow" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="menu-tabs-scroll-arrow arrow-right"
            onClick={() => scrollTabs("right")}
            aria-label="Scroll categories right"
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>

        {/* Dietary Filter Segmented Control */}
        <div className="menu-diet-filter-row cinematic-reveal">
          <div className="diet-segmented-dock" role="group" aria-label="Dietary filter">
            <button
              type="button"
              className={`diet-dock-pill ${filterType === "all" ? "active" : ""}`}
              onClick={() => setFilterType("all")}
            >
              <span>ALL DISHES</span>
              <span className="dock-count">({activeCategory.items.length})</span>
            </button>
            <button
              type="button"
              className={`diet-dock-pill diet-dock-veg ${filterType === "veg" ? "active" : ""}`}
              onClick={() => setFilterType("veg")}
            >
              <span className="veg-badge-square">
                <span className="veg-badge-dot" />
              </span>
              <span>PURE VEG</span>
            </button>
            <button
              type="button"
              className={`diet-dock-pill diet-dock-nonveg ${filterType === "non-veg" ? "active" : ""}`}
              onClick={() => setFilterType("non-veg")}
            >
              <span className="nonveg-badge-square">
                <span className="nonveg-badge-dot" />
              </span>
              <span>NON-VEG</span>
            </button>
          </div>

          <div className="active-category-indicator">
            <span>Showing:</span>
            <strong>{activeCategory.label} ({filteredItems.length} items)</strong>
          </div>
        </div>

        {/* Menu Dish Cards */}
        <div className="menu-items-list" key={`${activeCategoryId}-${filterType}`}>
          {filteredItems.length === 0 ? (
            <div className="menu-empty-state">
              <p>
                No dishes found under <strong>{activeCategory.label}</strong> matching the "{filterType.toUpperCase()}" filter.
              </p>
              <button
                type="button"
                onClick={() => setFilterType("all")}
                className="menu-reset-filter-btn"
              >
                Show All {activeCategory.label} Dishes ({activeCategory.items.length})
              </button>
            </div>
          ) : (
            filteredItems.map((dish, dIdx) => (
              <div
                key={dish.title}
                className="menu-dish-item"
                style={{ animationDelay: `${(dIdx % 8) * 35}ms` }}
              >
                <div className="dish-top-row">
                  <div className="dish-identity">
                    <span
                      className={dish.isVeg ? "veg-badge-square" : "nonveg-badge-square"}
                      title={dish.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                    >
                      <span className={dish.isVeg ? "veg-badge-dot" : "nonveg-badge-dot"} />
                    </span>
                    <h4 className="dish-name">{dish.title}</h4>
                    {dish.isPopular && <span className="dish-popular-tag">Chef Choice</span>}
                  </div>
                  <div className="dish-price-wrap">
                    <span className="dish-price">{dish.price}</span>
                  </div>
                </div>

                <p className="dish-description">{dish.description}</p>

                <div className="dish-bottom-bar">
                  <span className="dish-type-note">
                    {dish.isVeg ? "Pure Vegetarian" : "Authentic Non-Veg"}
                  </span>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hello Get 2 Gather, I would like to order: ${dish.title} (${dish.price})`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dish-order-link"
                    title={`Order ${dish.title} via WhatsApp`}
                  >
                    <span>Order Direct</span>
                    <ArrowRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Full Menu Custom Callout */}
        <div className="menu-custom-callout cinematic-reveal">
          <div className="custom-callout-icon">
            <Sparkles size={20} />
          </div>
          <div className="custom-callout-text">
            <strong>Have special dietary preferences or planning a family order?</strong>
            <p>Our kitchen welcomes customizations, mild spices, and Jain food requests upon order.</p>
          </div>
          <a href={phoneHref} className="custom-callout-action">
            <Phone size={14} />
            <span>Call Kitchen: {phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   SIGNATURE DISHES SECTION ("FROM OUR KITCHEN")
   ======================================================== */
function SignatureSelectionSection() {
  return (
    <section className="signature-selection-section section-pad">
      <div className="content-shell">
        <div className="section-heading section-heading-dark cinematic-reveal text-center mx-auto">
          <div className="eyebrow eyebrow-gold justify-center">
            <span className="eyebrow-line" />
            <span>FROM OUR KITCHEN</span>
            <span className="eyebrow-line" />
          </div>
          <h2>
            SIGNATURE
            <br />
            <em>SELECTION</em>
          </h2>
          <p className="section-copy mx-auto">
            Hand-picked by our master chefs, celebrated by our guests. Dishes that define the culinary identity of Get 2 Gather.
          </p>
        </div>

        <div className="signature-cards-grid">
          {signatureDishesData.map((dish, sIdx) => (
            <Card3DTilt
              key={dish.title}
              className="signature-dish-card cinematic-reveal"
              style={{ animationDelay: `${sIdx * 100}ms` }}
            >
              <div className="signature-card-media">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="signature-card-img"
                  loading="lazy"
                  width={600}
                  height={420}
                />
                <div className="signature-card-overlay" />
                <span className="signature-card-category">{dish.category}</span>
                <span className={`signature-card-diet ${dish.isVeg ? "is-veg" : "is-nonveg"}`}>
                  <span className="diet-dot" />
                </span>
              </div>

              <div className="signature-card-body">
                <div className="signature-card-header">
                  <h3 className="signature-card-title">{dish.title}</h3>
                  <span className="signature-card-price">{dish.price}</span>
                </div>
                <p className="signature-card-desc">{dish.description}</p>
                <div className="signature-card-footer">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hello Get 2 Gather, I would like to order signature dish: ${dish.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="signature-card-order-btn"
                  >
                    <span>ORDER DIRECT</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   FULL MENU CTA BANNER ("A TASTE FOR EVERY MOOD")
   ======================================================== */
/* ========================================================
   FULL MENU CTA BANNER ("A TASTE FOR EVERY MOOD")
   ======================================================== */
interface CulinaryMoodItem {
  id: string;
  categoryId: string;
  categoryLabel: string;
  title: string;
  subtitle: string;
  badge: string;
  prepTag: string;
  sensoryQuote: string;
  description: string;
  sensoryHighlights: string[];
  signatureDishes: string[];
  image: string;
  themeColor: string;
  glowRgba: string;
  borderGlow: string;
  dishCount: string;
}

const culinaryMoods: CulinaryMoodItem[] = [
  {
    id: "tandoori",
    categoryId: "tandoori",
    categoryLabel: "TANDOORI KITCHEN",
    title: "Fiery Clay-Oven Sizzlers",
    subtitle: "Charred Over Red-Hot Embers",
    badge: "🔥 650°F CLAY TANDOOR",
    prepTag: "LIVE CHARCOAL SIZZLE",
    sensoryQuote: "Smoky Charcoal & Kashmiri Chili",
    description:
      "Tender paneer cubes, succulent malai chaaps, and spicy tandoori skewers marinated in hung curd, cold-pressed mustard oil, and freshly ground whole spices.",
    sensoryHighlights: ["Live Charcoal Smoke", "Red-Hot Embers", "Mustard & Clove Marinade", "Sizzling Iron Platter"],
    signatureDishes: ["Paneer Angara Tikka", "Paneer Malai Tikka", "Tandoori Sizzler Platter"],
    image: tasteTandooriSizzler,
    themeColor: "#f97316",
    glowRgba: "rgba(249, 115, 22, 0.28)",
    borderGlow: "rgba(249, 115, 22, 0.65)",
    dishCount: "9 Delicacies",
  },
  {
    id: "biryani",
    categoryId: "rice-biryani",
    categoryLabel: "DUM KITCHEN",
    title: "Rich Royal Dum Biryanis",
    subtitle: "Aged Basmati Steamed in Brass Handi",
    badge: "👑 4-HR DUM PURDAH",
    prepTag: "SLOW-COOKED PURDAH DUM",
    sensoryQuote: "Kewra, Saffron & Desi Ghee Vapor",
    description:
      "Aged royal long-grain basmati slowly steamed in earthen handis sealed with dough, layered with pure saffron, golden caramelized birista, and desi ghee.",
    sensoryHighlights: ["Pure Kashmiri Saffron", "Aged Basmati Grains", "Roasted Golden Cashews", "Chilled Burani Raita"],
    signatureDishes: ["Chicken Dum Biryani", "Dum Veg Biryani", "Awadhi Handi Dum"],
    image: tasteDumBiryani,
    themeColor: "#eab308",
    glowRgba: "rgba(234, 179, 8, 0.28)",
    borderGlow: "rgba(234, 179, 8, 0.65)",
    dishCount: "6 Fragrant Pots",
  },
  {
    id: "pizza",
    categoryId: "veg-pizza",
    categoryLabel: "ARTISAN OVEN",
    title: "Artisan Stone-Baked Pizzas",
    subtitle: "48h Fermented Hand-Stretched Crust",
    badge: "🍕 400°C STONE HEARTH",
    prepTag: "STONE-DECK BLISTERED",
    sensoryQuote: "Airy Leopard Crust & Molten Cheese",
    description:
      "Hand-stretched artisanal dough baked directly on scorching stone slabs for an airy leopard-spotted blistered crust, slow-simmered marinara, and molten mozzarella.",
    sensoryHighlights: ["48h Cold Ferment", "Bubbling Whole Mozzarella", "Fresh Garden Basil", "Garlic Herb Infusion"],
    signatureDishes: ["Get 2 Gather Special", "Farm House Truffle", "Chicken Tikka BBQ"],
    image: tasteStonePizza,
    themeColor: "#ef4444",
    glowRgba: "rgba(239, 68, 68, 0.26)",
    borderGlow: "rgba(239, 68, 68, 0.65)",
    dishCount: "9 Crust Varieties",
  },
  {
    id: "mocktail",
    categoryId: "mocktails",
    categoryLabel: "BOTANICAL BAR",
    title: "Chilled Botanical Mocktails",
    subtitle: "Cold-Pressed Nectars & Smoked Herbs",
    badge: "🍸 SUB-ZERO FROST",
    prepTag: "CRAFT BOTANICAL MIXOLOGY",
    sensoryQuote: "Smoked Rosemary & Crystalline Frost",
    description:
      "Handcrafted sensory refreshers infused with muddled fresh garden mint, tart berry reductions, flamed botanical mists, and crystal hand-cut ice.",
    sensoryHighlights: ["Smoked Fresh Rosemary", "Pure Fruit Nectars", "Crystal Artisanal Ice", "Sparkling Mountain Soda"],
    signatureDishes: ["Lovers Passion Spritz", "Blue Ocean Fizz", "Virgin Mint Mojito"],
    image: tasteBotanicalMocktail,
    themeColor: "#06b6d4",
    glowRgba: "rgba(6, 182, 212, 0.28)",
    borderGlow: "rgba(6, 182, 212, 0.65)",
    dishCount: "6 Signature Elixirs",
  },
];

function MenuMoodCta({ onOpenReservation }: { onOpenReservation?: () => void }) {
  const [activeMoodIndex, setActiveMoodIndex] = useState<number>(0);
  const activeMood = culinaryMoods[activeMoodIndex];

  const navigateToCategory = (catId: string) => {
    window.dispatchEvent(
      new CustomEvent("select-menu-category", { detail: { categoryId: catId } })
    );
    const menuEl = document.getElementById("menu");
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="menu-mood-cta-section" aria-label="Interactive Kitchen Menu Sensory Showcase">
      <div className="mood-cta-ambient-mesh" aria-hidden="true">
        <div
          className="mood-cta-ambient-glow"
          style={{
            background: `radial-gradient(ellipse, ${activeMood.glowRgba} 0%, rgba(201, 164, 92, 0.08) 45%, transparent 75%)`,
          }}
        />
        <div className="mood-cta-radial-grid" />
      </div>

      <div className="content-shell cinematic-reveal">
        <div className="mood-cta-header">
          <div className="mood-live-badge">
            <span className="mood-live-dot" aria-hidden="true" />
            <span>Live Kitchen Active • 120+ Curated Delicacies in Gurdaspur</span>
          </div>

          <div className="eyebrow eyebrow-gold">
            <span className="eyebrow-line" />
            <span>✦ A TASTE FOR EVERY MOOD ✦</span>
            <span className="eyebrow-line" />
          </div>

          <h2 className="mood-cta-title">
            Explore Our
            <br />
            <span className="mood-cta-title-italic">Full Kitchen Menu</span>
          </h2>

          <p className="mood-cta-copy-rich">
            From{" "}
            <button
              type="button"
              onClick={() => setActiveMoodIndex(0)}
              className={`mood-inline-tag ${activeMoodIndex === 0 ? "active" : ""}`}
              title="Click to spotlight fiery clay-oven sizzlers"
            >
              <Flame size={13} style={{ color: "#f97316" }} />
              <span>fiery clay-oven tandoori sizzlers</span>
            </button>{" "}
            and{" "}
            <button
              type="button"
              onClick={() => setActiveMoodIndex(1)}
              className={`mood-inline-tag ${activeMoodIndex === 1 ? "active" : ""}`}
              title="Click to spotlight rich dum biryanis"
            >
              <Sparkles size={13} style={{ color: "#eab308" }} />
              <span>rich dum biryanis</span>
            </button>{" "}
            to{" "}
            <button
              type="button"
              onClick={() => setActiveMoodIndex(2)}
              className={`mood-inline-tag ${activeMoodIndex === 2 ? "active" : ""}`}
              title="Click to spotlight artisan stone-baked pizzas"
            >
              <UtensilsCrossed size={13} style={{ color: "#ef4444" }} />
              <span>artisan stone-baked pizzas</span>
            </button>{" "}
            and{" "}
            <button
              type="button"
              onClick={() => setActiveMoodIndex(3)}
              className={`mood-inline-tag ${activeMoodIndex === 3 ? "active" : ""}`}
              title="Click to spotlight chilled botanical mocktails"
            >
              <Coffee size={13} style={{ color: "#06b6d4" }} />
              <span>chilled botanical mocktails</span>
            </button>
            .
          </p>

          {/* Interactive Mood Selector Tabs */}
          <div className="mood-tabs-bar" role="tablist" aria-label="Select culinary mood">
            {culinaryMoods.map((mood, idx) => {
              const isActive = activeMoodIndex === idx;
              return (
                <button
                  key={mood.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`mood-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => setActiveMoodIndex(idx)}
                >
                  {idx === 0 && <Flame size={14} />}
                  {idx === 1 && <Sparkles size={14} />}
                  {idx === 2 && <UtensilsCrossed size={14} />}
                  {idx === 3 && <Coffee size={14} />}
                  <span>{mood.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-Card Sensory Deck */}
        <div className="mood-cards-container">
          <div className="mood-cards-grid">
            {culinaryMoods.map((mood, idx) => {
              const isActive = activeMoodIndex === idx;
              return (
                <article
                  key={mood.id}
                  className={`mood-card-item ${isActive ? "active" : ""}`}
                  style={
                    {
                      "--card-accent-border": mood.borderGlow,
                      "--card-accent-glow": mood.glowRgba,
                    } as React.CSSProperties
                  }
                  onClick={() => setActiveMoodIndex(idx)}
                >
                  <div className="mood-card-media">
                    <img
                      src={mood.image}
                      alt={mood.title}
                      className="mood-card-img"
                      loading="lazy"
                    />
                    <div className="mood-card-media-gradient" />
                    <div className="mood-card-badge-top">
                      <span>{mood.badge}</span>
                    </div>
                    <div className="mood-card-count-top">
                      <span>{mood.dishCount}</span>
                    </div>
                  </div>

                  <div className="mood-card-content">
                    <span className="mood-card-category-tag">
                      <span className="tab-pill-diamond" style={{ color: mood.themeColor }}>✦</span>
                      {mood.categoryLabel}
                    </span>

                    <h3 className="mood-card-title">{mood.title}</h3>
                    <span className="mood-card-subtitle">{mood.subtitle}</span>

                    <p className="mood-card-desc">{mood.description}</p>

                    <div className="mood-card-sensory-tags">
                      {mood.sensoryHighlights.map((tag, tIdx) => (
                        <span key={tIdx} className="mood-sensory-pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mood-card-dishes-box">
                      <span className="mood-card-dishes-label">Chef's Highlights:</span>
                      <p className="mood-card-dishes-list">
                        {mood.signatureDishes.join(" • ")}
                      </p>
                    </div>

                    <div className="mood-card-actions">
                      <button
                        type="button"
                        className="mood-card-menu-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateToCategory(mood.categoryId);
                        }}
                      >
                        <span>Explore in Menu</span>
                        <ArrowRight size={13} />
                      </button>
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                          `Hello Get 2 Gather, I would like to explore dishes from your ${mood.title} menu!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mood-card-order-btn"
                        title={`Order ${mood.title} on WhatsApp`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MessageCircle size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Sensory Guarantee Strip */}
        <div className="mood-guarantee-strip">
          <div className="mood-guarantee-item">
            <div className="mood-guarantee-icon">
              <Flame size={17} />
            </div>
            <div className="mood-guarantee-text">
              <h4>Clay Tandoor Charcoal</h4>
              <p>Authentic smoky char & live ember sizzle</p>
            </div>
          </div>

          <div className="mood-guarantee-item">
            <div className="mood-guarantee-icon">
              <Sparkles size={17} />
            </div>
            <div className="mood-guarantee-text">
              <h4>Sealed Purdah Dum</h4>
              <p>Saffron aroma locked in brass handis</p>
            </div>
          </div>

          <div className="mood-guarantee-item">
            <div className="mood-guarantee-icon">
              <UtensilsCrossed size={17} />
            </div>
            <div className="mood-guarantee-text">
              <h4>400°C Stone Deck</h4>
              <p>48h cold ferment blistered sourdough</p>
            </div>
          </div>

          <div className="mood-guarantee-item">
            <div className="mood-guarantee-icon">
              <Leaf size={17} />
            </div>
            <div className="mood-guarantee-text">
              <h4>Botanical Craft Bar</h4>
              <p>Fresh herbs, fruit nectars & crystal ice</p>
            </div>
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="mood-cta-actions-bar">
          <a href="#menu" className="mood-cta-primary-btn">
            <span>VIEW FULL DIGITAL MENU (120+ DELICACIES)</span>
            <ArrowDown size={16} />
          </a>
          <a href={phoneHref} className="mood-cta-secondary-btn">
            <Phone size={15} />
            <span>ORDER BY PHONE ({phoneDisplay})</span>
          </a>
          {onOpenReservation && (
            <button
              type="button"
              onClick={onOpenReservation}
              className="mood-cta-secondary-btn"
            >
              <Calendar size={15} />
              <span>RESERVE TABLE</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   CINEMATIC GALLERY COMPONENT (WITH LIGHTBOX)
   ======================================================== */
function GallerySection() {
  const [filter, setFilter] = useState("all");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filterTabs = [
    { id: "all", label: "All Spaces", count: galleryItemsData.length },
    {
      id: "interior",
      label: "Grand Dining",
      count: galleryItemsData.filter((item) => item.category === "interior").length,
    },
    {
      id: "lounge",
      label: "Lounges & Cafe",
      count: galleryItemsData.filter((item) => item.category === "lounge").length,
    },
    {
      id: "outdoor",
      label: "Pergola Walkway",
      count: galleryItemsData.filter((item) => item.category === "outdoor").length,
    },
    {
      id: "culinary",
      label: "Culinary & Dining",
      count: galleryItemsData.filter((item) => item.category === "culinary").length,
    },
  ];

  const filteredGallery =
    filter === "all"
      ? galleryItemsData
      : galleryItemsData.filter((item) => item.category === filter);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);

  const prevPhoto = () => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx - 1 + filteredGallery.length) % filteredGallery.length);
  };

  const nextPhoto = () => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx + 1) % filteredGallery.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIdx, filteredGallery.length]);

  return (
    <section id="gallery" className="gallery-section section-pad">
      <div className="content-shell">
        <div className="gallery-header section-heading section-heading-dark cinematic-reveal">
          <div className="eyebrow eyebrow-gold">
            <span className="eyebrow-line" />
            <span>CINEMATIC GALLERY</span>
            <span className="eyebrow-line" />
          </div>
          <h2>
            A SENSE OF
            <br />
            <em>THE PLACE</em>
          </h2>
          <p className="section-copy">
            Explore authentic photographs of Get 2 Gather — from our soaring timber rafters and crystal chandeliers to intimate bamboo alcoves and signature culinary feasts.
          </p>
        </div>

        {/* Gallery Filter Pills with Item Counts */}
        <div className="gallery-filters cinematic-reveal">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`gallery-filter-btn ${filter === tab.id ? "active" : ""}`}
              onClick={() => setFilter(tab.id)}
            >
              <span>{tab.label}</span>
              <span className="gallery-filter-count">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Editorial Architectural Masonry Grid */}
        <div className="gallery-masonry">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.title + idx}
              className={`gallery-tile ${item.className} cinematic-reveal`}
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(idx)}
              aria-label={`View full photo: ${item.title}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={900}
                height={700}
                style={{ objectPosition: item.objectPosition }}
                className="gallery-tile-img"
              />
              <div className="gallery-tile-overlay">
                <div className="gallery-tile-top">
                  <span className="gallery-tile-badge">{item.categoryLabel}</span>
                  <span className="gallery-tile-expand-icon" aria-hidden="true">
                    <ZoomIn />
                  </span>
                </div>
                <div className="gallery-tile-footer">
                  <div className="gallery-tile-text">
                    <h4 className="gallery-tile-title">{item.title}</h4>
                    <p className="gallery-tile-sub">{item.description}</p>
                  </div>
                  <span className="gallery-tile-zoom">
                    <ZoomIn />
                    <span>EXPAND</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Luxury Lightbox */}
      {lightboxIdx !== null && filteredGallery[lightboxIdx] && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-meta">
              <span className="lightbox-badge">{filteredGallery[lightboxIdx].categoryLabel}</span>
              <span className="lightbox-counter">
                {String(lightboxIdx + 1).padStart(2, "0")} / {String(filteredGallery.length).padStart(2, "0")}
              </span>
            </div>
            <button
              type="button"
              className="lightbox-btn lightbox-close"
              onClick={closeLightbox}
              aria-label="Close photo preview"
            >
              <X />
            </button>
          </div>

          <button
            type="button"
            className="lightbox-btn lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="lightbox-btn lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            aria-label="Next photo"
          >
            <ChevronRight />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-img-wrap">
              <img
                src={filteredGallery[lightboxIdx].src}
                alt={filteredGallery[lightboxIdx].alt}
              />
            </div>
            <div className="lightbox-info">
              <h3 className="lightbox-title">{filteredGallery[lightboxIdx].title}</h3>
              <p className="lightbox-desc">{filteredGallery[lightboxIdx].description}</p>
              <div className="lightbox-actions">
                <a
                  href="#reservations"
                  className="btn btn-gold btn-sm"
                  onClick={closeLightbox}
                >
                  <Calendar />
                  <span>Reserve In This Space</span>
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass-gold btn-sm"
                >
                  <MessageCircle />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ========================================================
   REVIEWS SECTION ("WHAT OUR GUESTS SAY")
   ======================================================== */
function ReviewsSection() {
  const reviewsData = [
    {
      quote:
        "The warm lighting, wooden ceiling, and golden chandeliers create such an inviting atmosphere for dinner.",
      author: "Verified Diner · Gurdaspur",
    },
    {
      quote:
        "Delicious North Indian dishes, aromatic breads, and attentive hospitality that makes you feel right at home.",
      author: "Family Gathering Guest",
    },
    {
      quote:
        "A wonderful setting in Gurdaspur for spending relaxed time together with friends and ordering takeaway.",
      author: "Local Guest Review",
    },
    {
      quote:
        "Comfortable seating, clean elegant interiors, and quick, courteous service every single visit.",
      author: "Google Reviewer",
    },
  ];

  return (
    <section id="reviews" className="reviews-section section-pad">
      <div className="content-shell">
        <div className="reviews-grid">
          <div className="review-score-card cinematic-reveal">
            <span>GOOGLE VERIFIED RATING</span>
            <div className="review-big-stat">
              <span>4.5</span>
              <Star />
            </div>
            <h4 className="review-count-title">47 Customer Reviews</h4>
            <p className="review-count-sub">Verified feedback in Gurdaspur, Punjab</p>
          </div>

          <div className="reviews-content-col">
            <div className="section-heading section-heading-dark cinematic-reveal">
              <div className="eyebrow eyebrow-gold">
                <span className="eyebrow-line" />
                <span>GUEST EXPERIENCES</span>
                <span className="eyebrow-line" />
              </div>
              <h2>
                WHAT OUR
                <br />
                <em>GUESTS SAY</em>
              </h2>
              <p className="section-copy">
                Guests consistently highlight Get 2 Gather for our welcoming hospitality, vibrant ambiance, delicious food, and comfortable setting for family gatherings.
              </p>
            </div>

            <div className="review-quotes-grid">
              {reviewsData.map((rev, rIdx) => (
                <Card3DTilt
                  key={rIdx}
                  className="review-quote-card cinematic-reveal"
                  style={{ animationDelay: `${rIdx * 80}ms` }}
                >
                  <div className="flex gap-1 text-[#C9A45C] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#C9A45C" />
                    ))}
                  </div>
                  <p>“{rev.quote}”</p>
                  <footer>— {rev.author}</footer>
                </Card3DTilt>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   RESERVATION CTA SECTION ("YOUR TABLE AWAITS")
   ======================================================== */
interface TableAwaitsCTAProps {
  onOpenReservation: () => void;
}

const tableAwaitsParticles = [
  { top: "18%", left: "12%", size: 3, delay: "0s", duration: "18s" },
  { top: "34%", left: "84%", size: 4, delay: "3s", duration: "22s" },
  { top: "66%", left: "16%", size: 2.5, delay: "5s", duration: "16s" },
  { top: "24%", left: "68%", size: 3.5, delay: "1.5s", duration: "20s" },
  { top: "76%", left: "78%", size: 3, delay: "4s", duration: "19s" },
  { top: "52%", left: "26%", size: 2, delay: "2.5s", duration: "17s" },
  { top: "82%", left: "46%", size: 3, delay: "6s", duration: "21s" },
];

function TableAwaitsCTA({ onOpenReservation }: TableAwaitsCTAProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setMousePos({ x, y });
    });
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className={`table-awaits-cta ${isInView ? "is-in-view" : ""}`}
      style={
        {
          "--mouse-x": `${mousePos.x}%`,
          "--mouse-y": `${mousePos.y}%`,
        } as React.CSSProperties
      }
      aria-label="Table Reservation Invitation"
    >
      {/* Cinematic Ambient Motion Layers */}
      <div className="table-awaits-bg-container" aria-hidden="true">
        <img
          src={masterpieceInteriorImage}
          alt="Get 2 Gather Restaurant Ambiance"
          className="table-awaits-bg"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="table-awaits-overlay" />
        <div className="table-awaits-light-sweep" />
        <div className="table-awaits-mouse-light" />

        {/* Subtle Gold Dust Particles */}
        <div className="table-awaits-particles-wrap">
          {tableAwaitsParticles.map((p, idx) => (
            <span
              key={idx}
              className="table-awaits-particle"
              style={{
                top: p.top,
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div>
      </div>

      <div className="table-awaits-inner">
        {/* Emblem with subtle glow */}
        <div className="table-awaits-emblem-wrap">
          <div className="table-awaits-emblem-halo" aria-hidden="true" />
          <div className="table-awaits-emblem">
            <img src={officialLogoImage} alt="Get To Gether Emblem" />
          </div>
        </div>

        {/* Eyebrow: JOIN US TONIGHT */}
        <div className="eyebrow eyebrow-gold justify-center table-awaits-eyebrow">
          <Sparkles size={14} className="eyebrow-icon-spin" aria-hidden="true" />
          <span>JOIN US TONIGHT</span>
          <Sparkles size={14} className="eyebrow-icon-spin" aria-hidden="true" />
        </div>

        {/* Hero Heading: YOUR TABLE AWAITS (Cinematic Staggered Reveal) */}
        <h2 className="table-awaits-title" aria-label="YOUR TABLE AWAITS">
          <span className="awaits-word awaits-word-1">YOUR</span>{" "}
          <span className="awaits-word awaits-word-2">TABLE</span>{" "}
          <span className="awaits-word awaits-word-3">AWAITS</span>
        </h2>

        {/* Subtitle: Come hungry. Leave with a story. */}
        <p className="table-awaits-sub">Come hungry. Leave with a story.</p>

        {/* Description: Staggered line reveal */}
        <div className="table-awaits-copy-wrap">
          <p className="table-awaits-copy">
            <span className="table-awaits-line table-awaits-line-1">
              Whether it is a joyful family reunion, an anniversary dinner, a birthday milestone,
            </span>{" "}
            <span className="table-awaits-line table-awaits-line-2">
              or an afternoon cafe catch-up with friends — we have a warm table waiting for you.
            </span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="table-awaits-actions">
          <button
            type="button"
            onClick={onOpenReservation}
            className="table-awaits-reserve-btn"
          >
            <span className="reserve-btn-sheen" aria-hidden="true" />
            <Calendar size={16} className="reserve-btn-calendar" />
            <span className="reserve-btn-text">RESERVE A TABLE</span>
          </button>
          <a href="#menu" className="table-awaits-menu-btn">
            <span className="menu-btn-text">VIEW FULL MENU</span>
            <ArrowRight size={15} className="menu-btn-arrow" />
          </a>
        </div>

        {/* Service Highlights */}
        <div className="table-awaits-features">
          <span className="awaits-feature-pill awaits-feature-1">
            <span className="awaits-star" aria-hidden="true">✦</span> DINE-IN TABLE SERVICE
          </span>
          <span className="awaits-feature-pill awaits-feature-2">
            <span className="awaits-star" aria-hidden="true">✦</span> EXPRESS KERBSIDE PICKUP
          </span>
          <span className="awaits-feature-pill awaits-feature-3">
            <span className="awaits-star" aria-hidden="true">✦</span> CELEBRATION BOOTHS
          </span>
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   LOCATION & CONTACT SECTION ("FIND US IN GURDASPUR")
   - CINEMATIC DESTINATION EXPERIENCE
   ======================================================== */
const locationParticles = [
  { top: "20%", left: "8%", size: 3, delay: "0s", duration: "19s" },
  { top: "72%", left: "88%", size: 3.5, delay: "3s", duration: "22s" },
  { top: "36%", left: "48%", size: 2.5, delay: "1.5s", duration: "17s" },
  { top: "82%", left: "22%", size: 3, delay: "4.5s", duration: "20s" },
  { top: "16%", left: "82%", size: 2.5, delay: "2s", duration: "16s" },
];

function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setMousePos({ x, y });
    });
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className={`location-section section-pad ${isInView ? "is-in-view" : ""}`}
      style={
        {
          "--loc-mouse-x": `${mousePos.x}%`,
          "--loc-mouse-y": `${mousePos.y}%`,
        } as React.CSSProperties
      }
      aria-label="Find Us in Gurdaspur - Location and Contact"
    >
      {/* Subtle Restaurant Interior Blurred Background & Ambient Glow */}
      <div className="location-bg-wrap" aria-hidden="true">
        <img
          src={entrancePergolaImage}
          alt="Get 2 Gather Entrance Pergola"
          className="location-bg-img"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="location-bg-overlay" />
        <div className="location-bg-radial" />
        <div className="location-mouse-glow" />

        {/* Tiny Golden Floating Dust Particles */}
        <div className="location-particles-container">
          {locationParticles.map((p, idx) => (
            <span
              key={idx}
              className="location-dust-particle"
              style={{
                top: p.top,
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div>
      </div>

      <div className="content-shell location-container">
        <div className="location-grid">
          {/* LEFT: Information Cards Column */}
          <div className="location-details">
            <div className="eyebrow eyebrow-gold location-eyebrow">
              <span className="eyebrow-line" />
              <span>VISIT &amp; CONNECT</span>
              <span className="eyebrow-line" />
            </div>

            <h2 className="location-title">
              <span className="loc-title-line loc-title-line-1">FIND US IN</span>
              <span className="loc-title-line loc-title-line-2">
                <em>GURDASPUR</em>
              </span>
            </h2>

            <p className="location-subtitle">
              Where exceptional food, warm hospitality, and memorable get-togethers begin.
            </p>

            <div className="location-cards-stack">
              {/* Address Card */}
              <div className="location-card location-card-address">
                <div className="location-card-accent-line" aria-hidden="true" />
                <div className="location-card-icon-box">
                  <MapPin className="location-card-icon" />
                </div>
                <div className="location-card-content">
                  <span className="location-card-label">Address</span>
                  <p className="location-card-text">
                    Tibri Rd, near Punjab Nursery, Gurdaspur, Punjab 143521
                  </p>
                </div>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-card-arrow-link"
                  title="Open in Google Maps"
                  aria-label="Open Address in Google Maps"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Hours Card */}
              <div className="location-card location-card-hours">
                <div className="location-card-accent-line" aria-hidden="true" />
                <div className="location-card-icon-box">
                  <Clock className="location-card-icon" />
                </div>
                <div className="location-card-content">
                  <div className="location-hours-header">
                    <span className="location-card-label">Hours</span>
                    <span className="location-open-badge">
                      <span className="open-pulse-dot" aria-hidden="true" />
                      Open Daily
                    </span>
                  </div>
                  <p className="location-card-text">
                    Open Daily · 10:00 AM – 11:00 PM
                  </p>
                </div>
              </div>

              {/* Reservations & Takeaway Card */}
              <div className="location-card location-card-phone">
                <div className="location-card-accent-line" aria-hidden="true" />
                <div className="location-card-icon-box">
                  <Phone className="location-card-icon" />
                </div>
                <div className="location-card-content">
                  <span className="location-card-label">Reservations &amp; Takeaway</span>
                  <p className="location-card-text">
                    {phoneDisplay} · Direct Table Orders
                  </p>
                </div>
                <a
                  href={phoneHref}
                  className="location-card-arrow-link"
                  title="Call for reservation"
                  aria-label="Call for reservation"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="location-actions">
              <a href={phoneHref} className="location-call-btn">
                <span className="btn-sheen-sweep" aria-hidden="true" />
                <Phone size={15} className="loc-btn-icon" />
                <span>CALL NOW</span>
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="location-directions-btn"
              >
                <MapPin size={15} className="loc-btn-icon" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Large Premium Interactive Map Frame */}
          <div className="location-map-wrapper">
            <div className="location-map-frame-outer">
              {/* Corner gold ornaments */}
              <span className="map-corner-ornament map-corner-tl" aria-hidden="true" />
              <span className="map-corner-ornament map-corner-tr" aria-hidden="true" />
              <span className="map-corner-ornament map-corner-bl" aria-hidden="true" />
              <span className="map-corner-ornament map-corner-br" aria-hidden="true" />

              {/* Luxury floating location tag */}
              <div className="map-floating-tag">
                <div className="map-floating-pin">
                  <span className="map-pulse-ring" aria-hidden="true" />
                  <MapPin size={15} />
                </div>
                <div className="map-floating-text">
                  <strong className="map-tag-title">GET 2 GATHER</strong>
                  <span className="map-tag-loc">GURDASPUR, PUNJAB</span>
                </div>
              </div>

              {/* Floating Google Maps Direct Action */}
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="map-floating-action"
                title="View Full Route on Google Maps"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight size={13} />
              </a>

              {/* Map iframe */}
              <div className="location-map-inner">
                <iframe
                  title="Get 2 Gather Restaurant Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13532.966380629615!2d75.1278!3d32.0409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391bbf43d2c88c7d%3A0x2904c622d64f0b2f!2sGet%202%20Gather%20Restaurant!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   MULTI-COLUMN LUXURY SEO FOOTER
   ======================================================== */
interface FooterProps {
  onOpenReservation?: () => void;
}

function Footer({ onOpenReservation }: FooterProps) {
  return (
    <footer
      className="site-footer"
      id="site-footer"
      itemScope
      itemType="https://schema.org/Restaurant"
    >
      {/* Hidden Structured Meta for Search Engine Crawlers */}
      <meta itemProp="name" content="Get 2 Gather Restaurant & Cafe" />
      <meta itemProp="legalName" content="Get 2 Gather" />
      <meta itemProp="url" content="https://get2gather.in/" />
      <meta itemProp="image" content="/get2gather-hero.jpg" />
      <meta itemProp="priceRange" content="₹₹ (₹100 - ₹500)" />
      <meta
        itemProp="servesCuisine"
        content="North Indian, Punjabi, Tandoori, Biryani, Chinese, Italian, Continental, Cafe, Fast Food, Beverages"
      />
      <meta
        itemProp="paymentAccepted"
        content="Cash, UPI, Credit Card, Debit Card, Google Pay, PhonePe"
      />
      <meta itemProp="currenciesAccepted" content="INR" />
      <meta itemProp="hasMenu" content="https://get2gather.in/#menu" />
      <meta itemProp="acceptsReservations" content="True" />
      <div
        itemProp="geo"
        itemScope
        itemType="https://schema.org/GeoCoordinates"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <meta itemProp="latitude" content="32.0409" />
        <meta itemProp="longitude" content="75.1278" />
      </div>

      <div className="content-shell">
        {/* 1. TOP SEO TRUST & ACCOLADES RIBBON */}
        <div className="footer-trust-banner">
          <div
            className="footer-trust-item"
            itemProp="aggregateRating"
            itemScope
            itemType="https://schema.org/AggregateRating"
          >
            <meta itemProp="ratingValue" content="4.8" />
            <meta itemProp="reviewCount" content="128" />
            <meta itemProp="bestRating" content="5" />
            <div className="trust-icon-wrap trust-gold">
              <Star size={18} fill="#C8A45D" />
            </div>
            <div className="trust-text">
              <strong className="trust-title">4.8 ★ Google Rating</strong>
              <span className="trust-sub">120+ Verified Local Diners</span>
            </div>
          </div>

          <div className="footer-trust-item">
            <div className="trust-icon-wrap trust-flame">
              <Flame size={18} />
            </div>
            <div className="trust-text">
              <strong className="trust-title">Authentic Tandoor &amp; Cafe</strong>
              <span className="trust-sub">Stone Pizzas, Biryanis &amp; Brews</span>
            </div>
          </div>

          <div className="footer-trust-item">
            <div className="trust-icon-wrap trust-sparkle">
              <Sparkles size={18} />
            </div>
            <div className="trust-text">
              <strong className="trust-title">Botanical Luxury Ambience</strong>
              <span className="trust-sub">Vaulted Ceilings &amp; Party Lounges</span>
            </div>
          </div>

          <div className="footer-trust-item">
            <div className="trust-icon-wrap trust-pin">
              <MapPin size={18} />
            </div>
            <div className="trust-text">
              <strong className="trust-title">Prime Tibri Road Location</strong>
              <span className="trust-sub">Near Punjab Nursery • Free Parking</span>
            </div>
          </div>
        </div>

        {/* 2. MAIN 4-COLUMN RICH INFORMATION ARCHITECTURE */}
        <div className="footer-grid-v2">
          {/* Col 1: Identity & Local NAP (Name, Address, Phone) */}
          <div className="footer-col footer-col-nap">
            <div className="footer-brand-heading">
              <BrandInsignia size={52} />
              <div>
                <h3 className="footer-brand-title">GET 2 GATHER</h3>
                <span className="footer-brand-tagline">RESTAURANT &amp; CAFE • GURDASPUR</span>
              </div>
            </div>

            <p className="footer-founder-citation">
              Crafted under the culinary vision of Founder <strong>Maninder Singh</strong>, Get 2 Gather is Gurdaspur’s premier dining destination blending authentic Punjabi flavours, artisanal cafe culture, and modern architectural warmth.
            </p>

            <div className="footer-nap-details">
              <address
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
                className="nap-entry nap-address-box"
              >
                <MapPin size={16} className="text-[#C8A45D] shrink-0 mt-1" />
                <span>
                  <strong className="text-white block" itemProp="streetAddress">
                    Tibri Rd, near Punjab Nursery
                  </strong>
                  <span itemProp="addressLocality">Gurdaspur</span>,{" "}
                  <span itemProp="addressRegion">Punjab</span>{" "}
                  <span itemProp="postalCode">143521</span>,{" "}
                  <span itemProp="addressCountry">India</span>
                </span>
              </address>

              <div className="nap-entry">
                <Phone size={15} className="text-[#C8A45D] shrink-0" />
                <div className="nap-phone-group">
                  <a
                    href={phoneHref}
                    itemProp="telephone"
                    className="footer-phone-link"
                    title="Direct Call Get 2 Gather Gurdaspur"
                  >
                    {phoneDisplay}
                  </a>
                  <span className="nap-badge">Direct Line</span>
                </div>
              </div>

              <div className="nap-entry">
                <Clock size={15} className="text-[#C8A45D] shrink-0" />
                <div className="nap-timing">
                  <span className="status-live-indicator">
                    <span className="pulse-dot" /> Open Daily
                  </span>
                  <time itemProp="openingHours" dateTime="Mo-Su 10:30-23:00">
                    10:30 AM – 11:00 PM
                  </time>
                </div>
              </div>
            </div>

            <div className="footer-connect-cluster">
              <a
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                itemProp="sameAs"
                className="footer-social-pill"
                title="Follow @get2gather.gsp on Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-[#C9A45C]" />
                <span>{instagramHandle}</span>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                itemProp="sameAs"
                className="footer-social-pill"
                title="Instant WhatsApp Reservation & Food Queries"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Order</span>
              </a>
            </div>
          </div>

          {/* Col 2: Sitemap & Internal Links */}
          <div className="footer-col footer-col-links">
            <h4 className="footer-col-header">Quick Navigation</h4>
            <nav className="footer-nav-list" aria-label="Footer Site Navigation">
              <a href="#home">Home Experience</a>
              <a href="#about">Our Story &amp; Founder Maninder Singh</a>
              <a href="#experience">Botanical Dining Ambience</a>
              <a href="#menu">Digital Multi-Cuisine Menu</a>
              <a href="#services">Private Dining &amp; Parties</a>
              <a href="#gallery">Interior &amp; Food Gallery</a>
              <a href="#reviews">Verified Guest Reviews</a>
              <a href="#contact">Find Us on Tibri Road</a>
              {onOpenReservation && (
                <button
                  type="button"
                  onClick={onOpenReservation}
                  className="footer-link-btn"
                >
                  Reserve a Table Online →
                </button>
              )}
            </nav>
          </div>

          {/* Col 3: Cuisines & Signature Food Categories */}
          <div className="footer-col footer-col-menu">
            <h4 className="footer-col-header">Popular Cuisines &amp; Dishes</h4>
            <ul className="footer-cuisine-list">
              <li>
                <a href="#menu" title="Sizzling Tandoori Kebabs & Platters in Gurdaspur">
                  <span className="dot-bullet">•</span> Sizzling Tandoori Delights &amp; Kebabs
                </a>
              </li>
              <li>
                <a href="#menu" title="Slow Cooked Royal Dum Biryani & Punjabi Gravies">
                  <span className="dot-bullet">•</span> Royal Dum Biryani &amp; Rich Curries
                </a>
              </li>
              <li>
                <a href="#menu" title="Artisanal Handcrafted Stone-Baked Pizzas">
                  <span className="dot-bullet">•</span> Handcrafted Stone-Baked Pizzas
                </a>
              </li>
              <li>
                <a href="#menu" title="Authentic Italian Pastas & Continental Platters">
                  <span className="dot-bullet">•</span> Creamy Italian Pastas &amp; Continental
                </a>
              </li>
              <li>
                <a href="#menu" title="Indo-Chinese Noodles, Fried Rice & Crispy Starters">
                  <span className="dot-bullet">•</span> Indo-Chinese Starters &amp; Noodles
                </a>
              </li>
              <li>
                <a href="#menu" title="Artisanal Coffee Brews, Thick Shakes & Botanical Mocktails">
                  <span className="dot-bullet">•</span> Gourmet Shakes &amp; Botanical Mocktails
                </a>
              </li>
              <li>
                <a href="#menu" title="100% Pure Vegetarian & Paneer Specialties">
                  <span className="dot-bullet">•</span> Pure Vegetarian &amp; Chef Special Platters
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Dining Occasions & Hospitality Services */}
          <div className="footer-col footer-col-services">
            <h4 className="footer-col-header">Dining &amp; Event Services</h4>
            <ul className="footer-service-list">
              <li>
                <a href="#contact">
                  <Users size={14} className="text-[#C8A45D]" />
                  <span>Family Dining &amp; Large Group Seating</span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <Sparkles size={14} className="text-[#C8A45D]" />
                  <span>Birthday &amp; Anniversary Celebrations</span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <Heart size={14} className="text-[#C8A45D]" />
                  <span>Romantic Candlelight Dining for Couples</span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <UtensilsCrossed size={14} className="text-[#C8A45D]" />
                  <span>Private Lounge &amp; Kitty Party Bookings</span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <PackageCheck size={14} className="text-[#C8A45D]" />
                  <span>Fresh Takeaway &amp; Express Parcel Pickup</span>
                </a>
              </li>
              <li>
                <span className="footer-feature-item">
                  <Car size={14} className="text-[#C8A45D]" />
                  <span>Free Dedicated Customer Parking</span>
                </span>
              </li>
              <li>
                <span className="footer-feature-item">
                  <CheckCircle2 size={14} className="text-[#C8A45D]" />
                  <span>Complimentary High-Speed Wi-Fi</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. LOCAL SEO NEIGHBORHOODS & LOCALITY RECOGNITION */}
        <div className="footer-local-coverage">
          <div className="coverage-badge">
            <MapPin size={14} className="text-[#C8A45D]" />
            <span>Serving Gurdaspur &amp; Surrounding Regions:</span>
          </div>
          <p className="coverage-text">
            Tibri Road • Near Punjab Nursery • Dinanagar Road • GT Road Gurdaspur • Civil Lines • Trimmoo Road • Hanuman Chowk • Kahnuwan Road • Jail Road • Behrampur Road • Hardochharni Road • Gurdaspur Cantt &amp; Vicinity.
          </p>
        </div>

        {/* 4. LOCAL SEARCH INTENT KEYWORD DISCOVERY RIBBON */}
        <div className="footer-seo-cloud">
          <span className="seo-cloud-label">Popular Local Searches:</span>
          <div className="seo-cloud-pills">
            <a href="#menu" className="seo-pill">Best Restaurant in Gurdaspur</a>
            <a href="#about" className="seo-pill">Top Cafe in Gurdaspur</a>
            <a href="#contact" className="seo-pill">Restaurant near Punjab Nursery</a>
            <a href="#contact" className="seo-pill">Tibri Road Restaurants</a>
            <a href="#menu" className="seo-pill">Tandoori Sizzlers Gurdaspur</a>
            <a href="#menu" className="seo-pill">Dum Biryani in Punjab</a>
            <a href="#contact" className="seo-pill">Birthday Party Hall Gurdaspur</a>
            <a href="#experience" className="seo-pill">Fine Dining Gurdaspur</a>
            <a href="#menu" className="seo-pill">Stone Oven Pizza Gurdaspur</a>
            <a href="#contact" className="seo-pill">Get 2 Gather Gurdaspur Contact</a>
          </div>
        </div>

        {/* 5. FOOTER BOTTOM LEGAL & BACK TO TOP */}
        <div className="footer-bottom-v2">
          <div className="footer-legal">
            <p>© {new Date().getFullYear()} Get 2 Gather Restaurant &amp; Cafe. All rights reserved.</p>
            <span className="legal-sep">•</span>
            <p>Designed for Culinary Excellence &amp; Warm Hospitality in Gurdaspur, Punjab.</p>
          </div>
          <a href="#home" className="footer-back-to-top" title="Scroll back to top of page">
            <span>Back to top</span>
            <ArrowDown className="rotate-180" size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ========================================================
   MAIN RESTAURANT SITE EXPORT
   ======================================================== */
export function RestaurantSite() {
  const [reservationOpen, setReservationOpen] = useState(false);

  useEffect(() => {
    // Cinematic Viewport Intersection Observer
    const elements = document.querySelectorAll(".cinematic-reveal");
    if (!elements.length) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar onOpenReservation={() => setReservationOpen(true)} />
      <main>
        <Hero onOpenReservation={() => setReservationOpen(true)} />
        <OurStorySection />
        <RestaurantExperienceSection />
        <FounderSection />
        <ServicesSection onOpenReservation={() => setReservationOpen(true)} />
        <MenuSection />
        <SignatureSelectionSection />
        <MenuMoodCta onOpenReservation={() => setReservationOpen(true)} />
        <GallerySection />
        <ReviewsSection />
        <TableAwaitsCTA onOpenReservation={() => setReservationOpen(true)} />
        <LocationSection />
      </main>
      <Footer onOpenReservation={() => setReservationOpen(true)} />
      <FloatingSocialDock />
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </>
  );
}