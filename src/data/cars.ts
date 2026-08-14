export interface RentalPackage {
  duration: "12 Hours" | "24 Hours";
  price: number;
  includedKm: number;

  // Not specified in the handwritten price list
  extraKmCharge?: number;
}

export interface Car {
  id: number;
  slug: string;
  name: string;
  brand: string;
  category: "Hatchback" | "Sedan" | "SUV" | "MUV";
  image: string;

  /**
   * Starting price shown on fleet cards.
   * This should normally be the lowest rental-package price.
   */
  price: number;

  rentalPackages: RentalPackage[];

  seats: number;
  fuel: string;
  transmission: string;
  engine: string;
  mileage: string;
  safety: string;
  bootSpace: string;
  airConditioning: string;
  description: string;
  features: string[];
  tripTypes: string[];
}

export const cars: Car[] = [
  {
    id: 1,
    slug: "maruti-dzire",
    name: "Maruti Dzire",
    brand: "Maruti Suzuki",
    category: "Sedan",
    image: "https://144m1a0563.github.io/AI-Images/belano.jpg",

    price: 2000,

    rentalPackages: [
      {
        duration: "12 Hours",
        price: 2000,
        includedKm: 250,
      },
      {
        duration: "24 Hours",
        price: 2500,
        includedKm: 300,
      },
    ],

    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    engine: "1.2L Petrol",
    mileage: "22.4 km/l",
    safety: "Dual Airbags",
    bootSpace: "378 L",
    airConditioning: "Automatic Climate Control",

    description:
      "The Maruti Dzire is a comfortable and fuel-efficient sedan suitable for city trips, airport transfers, business travel and outstation journeys.",

    features: [
      "Touchscreen Infotainment",
      "Automatic Climate Control",
      "Rear Parking Sensors",
      "Power Windows",
      "Comfortable Seating",
      "ABS with EBD",
    ],

    tripTypes: [
      "City Travel",
      "Airport Transfers",
      "Business Trips",
    ],
  },

  {
    id: 2,
    slug: "maruti-baleno",
    name: "Maruti Baleno",
    brand: "Maruti Suzuki",
    category: "Hatchback",
    image: "https://144m1a0563.github.io/AI-Images/crysta.jpg",

    price: 2000,

    rentalPackages: [
      {
        duration: "12 Hours",
        price: 2000,
        includedKm: 250,
      },
      {
        duration: "24 Hours",
        price: 2500,
        includedKm: 300,
      },
    ],

    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    engine: "1.2L DualJet",
    mileage: "22.3 km/l",
    safety: "Dual Airbags",
    bootSpace: "318 L",
    airConditioning: "Automatic Climate Control",

    description:
      "The Maruti Baleno is a spacious premium hatchback offering a smooth drive, comfortable cabin and practical features for city and highway travel.",

    features: [
      "Touchscreen Infotainment",
      "Automatic Climate Control",
      "LED Headlamps",
      "Rear Parking Sensors",
      "Keyless Entry",
      "ABS with EBD",
    ],

    tripTypes: [
      "Family City Tours",
      "Shopping Trips",
      "Airport Transfers",
    ],
  },

  {
    id: 3,
    slug: "toyota-glanza",
    name: "Toyota Glanza",
    brand: "Toyota",
    category: "Hatchback",
    image: "https://144m1a0563.github.io/AI-Images/glanza.jpg",

    price: 2000,

    rentalPackages: [
      {
        duration: "12 Hours",
        price: 2000,
        includedKm: 250,
      },
      {
        duration: "24 Hours",
        price: 2500,
        includedKm: 300,
      },
    ],

    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    engine: "1.2L Petrol",
    mileage: "22.3 km/l",
    safety: "Dual Airbags",
    bootSpace: "318 L",
    airConditioning: "Automatic Climate Control",

    description:
      "The Toyota Glanza is a refined premium hatchback with a spacious cabin, efficient petrol engine and comfortable ride for daily and long-distance travel.",

    features: [
      "Touchscreen Infotainment",
      "Automatic Climate Control",
      "LED Headlamps",
      "Rear Parking Sensors",
      "Push Button Start",
      "ABS with EBD",
    ],

    tripTypes: [
      "City Tours",
      "Weekend Trips",
      "Airport Transfers",
    ],
  },

  {
    id: 4,
    slug: "maruti-ertiga",
    name: "Maruti Ertiga",
    brand: "Maruti Suzuki",
    category: "MUV",
    image: "https://144m1a0563.github.io/AI-Images/eartiga.jpg",

    price: 3000,

    rentalPackages: [
      {
        duration: "12 Hours",
        price: 3000,
        includedKm: 250,
      },
      {
        duration: "24 Hours",
        price: 3500,
        includedKm: 300,
      },
    ],

    seats: 7,
    fuel: "Petrol",
    transmission: "Manual",
    engine: "1.5L Petrol",
    mileage: "20.3 km/l",
    safety: "Dual Airbags",
    bootSpace: "209 L",
    airConditioning: "Rear AC Vents",

    description:
      "The Maruti Ertiga is a spacious seven-seater designed for family trips, temple visits, airport travel and comfortable group journeys.",

    features: [
      "Touchscreen Infotainment",
      "Rear AC Vents",
      "Flexible Seating",
      "Rear Parking Sensors",
      "Power Windows",
      "ABS with EBD",
    ],

    tripTypes: [
      "Family Trips",
      "Temple Tours",
      "Group Travel",
    ],
  },

  {
    id: 5,
    slug: "toyota-innova",
    name: "Toyota Innova",
    brand: "Toyota",
    category: "MUV",
    image: "https://144m1a0563.github.io/AI-Images/inova.jpg",

    price: 3000,

    rentalPackages: [
      {
        duration: "12 Hours",
        price: 3000,
        includedKm: 250,
      },
      {
        duration: "24 Hours",
        price: 3500,
        includedKm: 300,
      },
    ],

    seats: 7,
    fuel: "Diesel",
    transmission: "Manual",
    engine: "2.5L Diesel",
    mileage: "13 km/l",
    safety: "Dual Airbags",
    bootSpace: "300 L",
    airConditioning: "Front and Rear AC",

    description:
      "The Toyota Innova provides spacious seating, dependable diesel performance and excellent comfort for families and long-distance journeys.",

    features: [
      "Spacious Seven-Seater Cabin",
      "Front and Rear AC",
      "Comfortable Seating",
      "Power Windows",
      "Rear Parking Sensors",
      "ABS with EBD",
    ],

    tripTypes: [
      "Long-Distance Trips",
      "Family Travel",
      "Temple Tours",
    ],
  },

  {
    id: 6,
    slug: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    brand: "Toyota",
    category: "MUV",
    image: "https://144m1a0563.github.io/AI-Images/crysta.jpg",

    price: 3500,

    rentalPackages: [
      {
        duration: "12 Hours",
        price: 3500,
        includedKm: 250,
      },
      {
        duration: "24 Hours",
        price: 4000,
        includedKm: 300,
      },
    ],

    seats: 7,
    fuel: "Diesel",
    transmission: "Manual",
    engine: "2.4L Diesel",
    mileage: "15.3 km/l",
    safety: "Multiple Airbags",
    bootSpace: "300 L",
    airConditioning: "Automatic Climate Control",

    description:
      "The Toyota Innova Crysta is a premium seven-seater with powerful performance, refined interiors and excellent comfort for long journeys.",

    features: [
      "Premium Infotainment",
      "Automatic Climate Control",
      "Captain Seats",
      "Rear Parking Camera",
      "Cruise Control",
      "Multiple Airbags",
    ],

    tripTypes: [
      "Premium Family Tours",
      "Long-Distance Trips",
      "Business Travel",
    ],
  },

  {
    id: 7,
    slug: "toyota-fortuner",
    name: "Toyota Fortuner",
    brand: "Toyota",
    category: "SUV",
    image: "https://144m1a0563.github.io/AI-Images/fortuner.jpg",

    price: 4000,

    rentalPackages: [
      {
        duration: "12 Hours",
        price: 4000,
        includedKm: 250,
      },
      {
        duration: "24 Hours",
        price: 4500,
        includedKm: 300,
      },
    ],

    seats: 7,
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "2.8L Diesel",
    mileage: "14.4 km/l",
    safety: "Multiple Airbags",
    bootSpace: "296 L",
    airConditioning: "Dual-Zone Climate Control",

    description:
      "The Toyota Fortuner is a powerful premium SUV suited for highway journeys, family vacations, business travel and adventure trips.",

    features: [
      "Touchscreen Infotainment",
      "Powerful Diesel Engine",
      "Cruise Control",
      "Rear Parking Camera",
      "Premium Leather Seats",
      "Multiple Airbags",
    ],

    tripTypes: [
      "Adventure Trips",
      "Highway Travel",
      "Premium Family Tours",
    ],
  },
];