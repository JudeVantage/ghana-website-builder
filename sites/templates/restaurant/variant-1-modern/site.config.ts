import { Utensils, Wine, Flame, Clock, Star, ChefHat } from "lucide-react";

export const siteConfig = {
  // Business Info
  businessName: "{{BUSINESS_NAME}}",
  tagline: "{{BUSINESS_TAGLINE}}",

  // Hero
  hero: {
    title: "Fine Dining,\nRedefined",
    subtitle:
      "Experience exquisite cuisine crafted with passion, using the finest locally-sourced ingredients in the heart of Accra.",
    backgroundImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop",
    ctaPrimary: "Reserve a Table",
    ctaSecondary: "View Our Menu",
  },

  // Menu / Food Items
  menu: {
    sectionTitle: "Our Menu",
    sectionSubtitle:
      "Carefully curated dishes that celebrate local flavours with a modern twist",
    categories: [
      {
        name: "Starters",
        items: [
          {
            name: "{{MENU_1_NAME}}",
            description: "{{MENU_1_DESCRIPTION}}",
            price: "{{MENU_1_PRICE}}",
            icon: Utensils,
          },
          {
            name: "{{MENU_2_NAME}}",
            description: "{{MENU_2_DESCRIPTION}}",
            price: "{{MENU_2_PRICE}}",
            icon: Flame,
          },
        ],
      },
      {
        name: "Mains",
        items: [
          {
            name: "{{MENU_3_NAME}}",
            description: "{{MENU_3_DESCRIPTION}}",
            price: "{{MENU_3_PRICE}}",
            icon: ChefHat,
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
        name: "Drinks",
        items: [
          {
            name: "{{MENU_5_NAME}}",
            description: "{{MENU_5_DESCRIPTION}}",
            price: "{{MENU_5_PRICE}}",
            icon: Wine,
          },
          {
            name: "{{MENU_6_NAME}}",
            description: "{{MENU_6_DESCRIPTION}}",
            price: "{{MENU_6_PRICE}}",
            icon: Wine,
          },
        ],
      },
    ],
  },

  // About
  about: {
    title: "Our Story",
    text: "{{ABOUT_TEXT}}",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=600&fit=crop",
    stats: [
      { label: "Years of Excellence", value: "5+" },
      { label: "Happy Diners", value: "10,000+" },
      { label: "Dishes Served", value: "50,000+" },
      { label: "Google Rating", value: "4.8" },
    ],
  },

  // Gallery
  gallery: {
    sectionTitle: "Gallery",
    sectionSubtitle:
      "A visual taste of our culinary creations and dining experience",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop",
    ],
  },

  // Testimonials
  testimonials: {
    sectionTitle: "What Our Guests Say",
    sectionSubtitle: "Hear from our valued patrons",
    items: [
      {
        name: "Akua M.",
        text: "The best dining experience in Accra. Every dish is a masterpiece.",
        rating: 5,
      },
      {
        name: "Kwame B.",
        text: "Perfect for special occasions. The ambiance and food are world-class.",
        rating: 5,
      },
      {
        name: "Ama K.",
        text: "We host all our family celebrations here. Never disappoints!",
        rating: 5,
      },
    ],
  },

  // Contact / Location
  contact: {
    sectionTitle: "Visit Us",
    sectionSubtitle: "We look forward to welcoming you",
    address: "{{BUSINESS_ADDRESS}}",
    phone: "{{BUSINESS_PHONE}}",
    email: "info@{{BUSINESS_NAME_LOWER}}.com",
    hours: "{{BUSINESS_HOURS}}",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8091547354584!2d-0.1870!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuMyJOIDDCsDExJzEzLjIiVw!5e0!3m2!1sen!2sgh!4v1234567890123",
  },

  // WhatsApp
  whatsapp: {
    phoneNumber: "{{WHATSAPP_NUMBER}}",
    floatingMessage: "Hi, I'd like to make a reservation",
    reservationMessage: "Hi, I'd like to make a reservation",
  },

  // Social Media
  socials: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
};
