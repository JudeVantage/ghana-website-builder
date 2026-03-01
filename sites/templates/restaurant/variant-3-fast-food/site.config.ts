import { Utensils, Flame, Zap, Clock, Star, Package } from "lucide-react";

export const siteConfig = {
  businessName: "{{BUSINESS_NAME}}",
  tagline: "{{BUSINESS_TAGLINE}}",

  hero: {
    title: "Fast. Fresh.\nFire. \u{1F525}",
    subtitle:
      "Your favourite meals, ready in minutes. Order now for pickup or delivery across Accra!",
    backgroundImage:
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=1200&h=800&fit=crop",
    ctaPrimary: "Order Now",
    ctaSecondary: "See Menu",
  },

  menu: {
    sectionTitle: "Our Menu",
    sectionSubtitle: "Quick bites and full meals — all fresh, all delicious",
    categories: [
      {
        name: "Burgers & Wraps",
        items: [
          {
            name: "{{MENU_1_NAME}}",
            description: "{{MENU_1_DESCRIPTION}}",
            price: "{{MENU_1_PRICE}}",
            icon: Flame,
          },
          {
            name: "{{MENU_2_NAME}}",
            description: "{{MENU_2_DESCRIPTION}}",
            price: "{{MENU_2_PRICE}}",
            icon: Utensils,
          },
        ],
      },
      {
        name: "Rice & Sides",
        items: [
          {
            name: "{{MENU_3_NAME}}",
            description: "{{MENU_3_DESCRIPTION}}",
            price: "{{MENU_3_PRICE}}",
            icon: Zap,
          },
          {
            name: "{{MENU_4_NAME}}",
            description: "{{MENU_4_DESCRIPTION}}",
            price: "{{MENU_4_PRICE}}",
            icon: Star,
          },
        ],
      },
      {
        name: "Drinks & Combos",
        items: [
          {
            name: "{{MENU_5_NAME}}",
            description: "{{MENU_5_DESCRIPTION}}",
            price: "{{MENU_5_PRICE}}",
            icon: Package,
          },
          {
            name: "{{MENU_6_NAME}}",
            description: "{{MENU_6_DESCRIPTION}}",
            price: "{{MENU_6_PRICE}}",
            icon: Clock,
          },
        ],
      },
    ],
  },

  about: {
    title: "Why Choose Us",
    text: "{{ABOUT_TEXT}}",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop",
    stats: [
      { label: "Avg. Delivery Time", value: "25min" },
      { label: "Orders Completed", value: "50,000+" },
      { label: "Menu Items", value: "30+" },
      { label: "Customer Rating", value: "4.9" },
    ],
  },

  gallery: {
    sectionTitle: "Food Gallery",
    sectionSubtitle: "See what's cooking — fresh off the grill",
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop",
    ],
  },

  testimonials: {
    sectionTitle: "Reviews",
    sectionSubtitle: "Don't take our word for it — hear from our customers",
    items: [
      {
        name: "Nana Y.",
        text: "Fastest delivery in Accra! The shawarma is always fresh and loaded.",
        rating: 5,
      },
      {
        name: "Abena F.",
        text: "My go-to spot for fried rice. Consistent quality every single time.",
        rating: 5,
      },
      {
        name: "Kwesi O.",
        text: "The combo deals are unbeatable. Great food, great prices!",
        rating: 5,
      },
    ],
  },

  contact: {
    sectionTitle: "Find Us",
    sectionSubtitle: "Visit us or order for delivery",
    address: "{{BUSINESS_ADDRESS}}",
    phone: "{{BUSINESS_PHONE}}",
    email: "info@{{BUSINESS_NAME_LOWER}}.com",
    hours: "{{BUSINESS_HOURS}}",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8091547354584!2d-0.1870!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuMyJOIDDCsDExJzEzLjIiVw!5e0!3m2!1sen!2sgh!4v1234567890123",
  },

  whatsapp: {
    phoneNumber: "{{WHATSAPP_NUMBER}}",
    floatingMessage: "Hi, I'd like to place an order",
    reservationMessage: "Hi, I'd like to make a reservation",
  },

  socials: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    tiktok: "#",
  },
};
