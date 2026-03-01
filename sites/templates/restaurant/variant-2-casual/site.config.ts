import { Utensils, Flame, Soup, Clock, Star, Coffee } from "lucide-react";

export const siteConfig = {
  businessName: "{{BUSINESS_NAME}}",
  tagline: "{{BUSINESS_TAGLINE}}",

  hero: {
    title: "Taste the\nHomemade Difference",
    subtitle:
      "Authentic Ghanaian dishes made with love, just like mama used to make. Come chop with us!",
    backgroundImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop",
    ctaPrimary: "Book a Table",
    ctaSecondary: "See Our Menu",
  },

  menu: {
    sectionTitle: "Our Menu",
    sectionSubtitle:
      "Local favourites prepared fresh daily with the finest ingredients",
    categories: [
      {
        name: "Local Dishes",
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
            icon: Soup,
          },
        ],
      },
      {
        name: "Grills & Proteins",
        items: [
          {
            name: "{{MENU_3_NAME}}",
            description: "{{MENU_3_DESCRIPTION}}",
            price: "{{MENU_3_PRICE}}",
            icon: Utensils,
          },
          {
            name: "{{MENU_4_NAME}}",
            description: "{{MENU_4_DESCRIPTION}}",
            price: "{{MENU_4_PRICE}}",
            icon: Flame,
          },
        ],
      },
      {
        name: "Drinks & Extras",
        items: [
          {
            name: "{{MENU_5_NAME}}",
            description: "{{MENU_5_DESCRIPTION}}",
            price: "{{MENU_5_PRICE}}",
            icon: Coffee,
          },
          {
            name: "{{MENU_6_NAME}}",
            description: "{{MENU_6_DESCRIPTION}}",
            price: "{{MENU_6_PRICE}}",
            icon: Star,
          },
        ],
      },
    ],
  },

  about: {
    title: "Our Story",
    text: "{{ABOUT_TEXT}}",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    stats: [
      { label: "Years Serving", value: "10+" },
      { label: "Happy Customers", value: "20,000+" },
      { label: "Meals Served Daily", value: "500+" },
      { label: "Google Rating", value: "4.7" },
    ],
  },

  gallery: {
    sectionTitle: "Our Food & Space",
    sectionSubtitle: "Take a look at what awaits you",
    images: [
      "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
    ],
  },

  testimonials: {
    sectionTitle: "What Our Customers Say",
    sectionSubtitle: "The people have spoken!",
    items: [
      {
        name: "Kofi A.",
        text: "Best jollof in town! The portions are generous and the taste is unmatched.",
        rating: 5,
      },
      {
        name: "Esi D.",
        text: "This place feels like home. Great food, great people, great vibes.",
        rating: 5,
      },
      {
        name: "Yaw S.",
        text: "I bring my whole family here every Sunday. Everyone loves it!",
        rating: 5,
      },
    ],
  },

  contact: {
    sectionTitle: "Find Us",
    sectionSubtitle: "Come chop with us today!",
    address: "{{BUSINESS_ADDRESS}}",
    phone: "{{BUSINESS_PHONE}}",
    email: "info@{{BUSINESS_NAME_LOWER}}.com",
    hours: "{{BUSINESS_HOURS}}",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8091547354584!2d-0.1870!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuMyJOIDDCsDExJzEzLjIiVw!5e0!3m2!1sen!2sgh!4v1234567890123",
  },

  whatsapp: {
    phoneNumber: "{{WHATSAPP_NUMBER}}",
    floatingMessage: "Hi, I'd like to make a reservation",
    reservationMessage: "Hi, I'd like to make a reservation",
  },

  socials: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
};
