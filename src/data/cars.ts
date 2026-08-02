export interface Car {
  id: number;
  slug: string;
  name: string;
  brand: string;
  category: "Hatchback" | "Sedan" | "SUV" | "MUV";
  image: string;
  price: number;
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
    slug: "maruti-swift",
    name: "Maruti Swift",
    brand: "Suzuki",
    category: "Hatchback",
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=90",
    price: 1800,
    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    engine: "1.2L DualJet",
    mileage: "22.5 km/l",
    safety: "6 Airbags",
    bootSpace: "268 L",
    airConditioning: "Automatic Climate Control",
    description:
      "The Maruti Swift is a stylish and efficient hatchback offering smooth handling, excellent mileage and comfortable city driving.",
    features: [
      "Touchscreen Infotainment",
      "Automatic Climate Control",
      "LED Headlamps",
      "Rear View Camera",
      "Keyless Entry",
      "6 Airbags",
    ],
    tripTypes: [
      "City Tours",
      "Shopping Trips",
      "Airport Transfers",
    ],
  },
  {
    id: 2,
    slug: "maruti-baleno",
    name: "Maruti Baleno",
    brand: "Suzuki",
    category: "Hatchback",
    image:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1400&q=90",
    price: 2000,
    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    engine: "1.2L DualJet",
    mileage: "22.3 km/l",
    safety: "6 Airbags",
    bootSpace: "339 L",
    airConditioning: "Automatic Climate Control",
    description:
      "The Maruti Baleno is a spacious premium hatchback with a smooth drive, comfortable cabin and useful modern features.",
    features: [
      "Touchscreen Infotainment",
      "Automatic Climate Control",
      "LED Headlamps",
      "Rear View Camera",
      "Keyless Entry",
      "6 Airbags",
    ],
    tripTypes: [
      "Family City Tours",
      "Shopping Trips",
      "Airport Transfers",
    ],
  },
  {
    id: 3,
    slug: "maruti-dzire",
    name: "Maruti Dzire",
    brand: "Suzuki",
    category: "Sedan",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=90",
    price: 2200,
    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    engine: "1.2L Petrol",
    mileage: "22.4 km/l",
    safety: "6 Airbags",
    bootSpace: "378 L",
    airConditioning: "Automatic Climate Control",
    description:
      "The Maruti Dzire is a comfortable and fuel-efficient sedan suitable for airport transfers, business journeys and outstation travel.",
    features: [
      "Touchscreen Infotainment",
      "Push Button Start",
      "LED Headlamps",
      "Rear Parking Camera",
      "Cruise Control",
      "6 Airbags",
    ],
    tripTypes: [
      "Business Travel",
      "Airport Transfers",
      "Outstation Trips",
    ],
  },
  {
    id: 4,
    slug: "maruti-ertiga",
    name: "Maruti Ertiga",
    brand: "Suzuki",
    category: "MUV",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=90",
    price: 3200,
    seats: 7,
    fuel: "Petrol",
    transmission: "Manual",
    engine: "1.5L Petrol",
    mileage: "20.3 km/l",
    safety: "4 Airbags",
    bootSpace: "209 L",
    airConditioning: "Rear AC Vents",
    description:
      "The Maruti Ertiga is a spacious seven-seater designed for family trips, group travel and temple tours.",
    features: [
      "Touchscreen Infotainment",
      "Rear AC Vents",
      "Cruise Control",
      "Parking Camera",
      "Flexible Seating",
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
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=90",
    price: 4200,
    seats: 7,
    fuel: "Diesel",
    transmission: "Manual",
    engine: "2.4L Diesel",
    mileage: "15.6 km/l",
    safety: "7 Airbags",
    bootSpace: "300 L",
    airConditioning: "Automatic Climate Control",
    description:
      "The Toyota Innova offers premium comfort, powerful performance and spacious seating for long-distance travel.",
    features: [
      "Premium Infotainment",
      "Automatic Climate Control",
      "Captain Seats",
      "Rear View Camera",
      "Cruise Control",
      "7 Airbags",
    ],
    tripTypes: [
      "Long Distance Trips",
      "Family Travel",
      "Premium Tours",
    ],
  },
  {
    id: 6,
    slug: "kia-carens",
    name: "Kia Carens",
    brand: "Kia",
    category: "MUV",
    image:
      "https://images.unsplash.com/photo-1511527844068-006b95d162c2?auto=format&fit=crop&w=1400&q=90",
    price: 4000,
    seats: 7,
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "1.5L Diesel",
    mileage: "18 km/l",
    safety: "6 Airbags",
    bootSpace: "216 L",
    airConditioning: "Automatic Climate Control",
    description:
      "The Kia Carens combines spacious seating, premium comfort and modern technology for family and group travel.",
    features: [
      "Touchscreen Infotainment",
      "Rear AC Vents",
      "Wireless Charging",
      "Parking Camera",
      "Cruise Control",
      "6 Airbags",
    ],
    tripTypes: [
      "Family Trips",
      "Group Travel",
      "Long Journeys",
    ],
  },
  {
    id: 7,
    slug: "toyota-fortuner",
    name: "Toyota Fortuner",
    brand: "Toyota",
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1511527844068-006b95d162c2?auto=format&fit=crop&w=1400&q=90",
    price: 6500,
    seats: 7,
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "2.8L Diesel",
    mileage: "14.4 km/l",
    safety: "7 Airbags",
    bootSpace: "296 L",
    airConditioning: "Dual Zone Climate Control",
    description:
      "The Toyota Fortuner is a premium and powerful SUV suited for highway journeys, family vacations and adventure travel.",
    features: [
      "Touchscreen Infotainment",
      "4x4 Capability",
      "Cruise Control",
      "Parking Camera",
      "Leather Seats",
      "7 Airbags",
    ],
    tripTypes: [
      "Adventure Trips",
      "Highway Travel",
      "Premium Family Tours",
    ],
  },
];