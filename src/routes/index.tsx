import { createFileRoute } from "@tanstack/react-router";
import { RestaurantSite } from "@/components/restaurant-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Get 2 Gather | Best Restaurant & Cafe in Gurdaspur | Fine Dining & Tandoor" },
      {
        name: "description",
        content:
          "Welcome to Get 2 Gather, Gurdaspur's top restaurant & cafe on Tibri Road near Punjab Nursery. Savor authentic Punjabi Tandoori sizzlers, dum biryani, stone-baked pizzas, artisanal coffee, and family celebrations in an elegant botanical setting.",
      },
      {
        name: "keywords",
        content:
          "best restaurant in gurdaspur, top cafe in gurdaspur, get 2 gather, tibiri road restaurant, punjab nursery gurdaspur, family restaurant gurdaspur, birthday party venue gurdaspur, tandoori sizzler gurdaspur, dum biryani gurdaspur, romantic dinner gurdaspur, food delivery gurdaspur",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "geo.region", content: "IN-PB" },
      { name: "geo.placename", content: "Gurdaspur" },
      { name: "geo.position", content: "32.0409;75.1278" },
      { name: "ICBM", content: "32.0409, 75.1278" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Get 2 Gather Restaurant & Cafe" },
      { property: "og:title", content: "Get 2 Gather | Best Restaurant & Cafe in Gurdaspur" },
      {
        property: "og:description",
        content:
          "Premier dining destination on Tibri Road, Gurdaspur. Experience artisanal cuisine, authentic tandoori delights, vaulted botanical ambience, and warm hospitality.",
      },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "https://get2gather.in/" },
      { property: "og:image", content: "/get2gather-hero.jpg" },
      { property: "og:image:alt", content: "Get 2 Gather Restaurant & Cafe Interior and Cuisine" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Get 2 Gather | Best Restaurant & Cafe in Gurdaspur" },
      {
        name: "twitter:description",
        content:
          "Authentic flavors, botanical architecture, and memorable gatherings in Gurdaspur. Reserve your table or order today.",
      },
      { name: "twitter:image", content: "/get2gather-hero.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://get2gather.in/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Restaurant", "CafeOrCoffeeShop"],
          "@id": "https://get2gather.in/#restaurant",
          name: "Get 2 Gather",
          alternateName: [
            "Get 2 Gather Restaurant & Cafe",
            "Get2Gather Gurdaspur",
            "Get 2 Gather Cafe",
          ],
          description:
            "Get 2 Gather is a premier restaurant and cafe located on Tibri Road near Punjab Nursery in Gurdaspur, Punjab. Known for authentic tandoori sizzlers, slow-cooked dum biryani, handcrafted pizzas, gourmet cafe beverages, and luxury family dining.",
          url: "https://get2gather.in/",
          telephone: "+919463717523",
          priceRange: "₹₹ (₹100 - ₹500)",
          currenciesAccepted: "INR",
          paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Google Pay, PhonePe, Paytm",
          servesCuisine: [
            "North Indian",
            "Punjabi",
            "Tandoori",
            "Biryani",
            "Chinese",
            "Italian",
            "Continental",
            "Fast Food",
            "Cafe",
            "Beverages",
            "Desserts",
          ],
          founder: {
            "@type": "Person",
            name: "Maninder Singh",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Tibri Rd, near Punjab Nursery",
            addressLocality: "Gurdaspur",
            addressRegion: "Punjab",
            postalCode: "143521",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 32.0409,
            longitude: 75.1278,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "10:30",
              closes: "23:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "128",
            bestRating: "5",
            worstRating: "1",
          },
          hasMenu: "https://get2gather.in/#menu",
          acceptsReservations: "True",
          image: [
            "https://get2gather.in/get2gather-hero.jpg",
            "https://get2gather.in/get2gather-official-logo.jpg",
          ],
          sameAs: [
            "https://www.instagram.com/get2gather.gsp",
            "https://wa.me/919463717523",
            "https://www.google.com/maps/search/?api=1&query=Get+2+Gather+Tibri+Road+near+Punjab+Nursery+Gurdaspur+Punjab+143521",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <RestaurantSite />;
}
