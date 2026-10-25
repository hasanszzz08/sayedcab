export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  category: string; // e.g. "Sedan", "SUV", "Tempo Traveller", "Luxury"
  seatingCapacity: number;
  transmission?: 'Manual' | 'Automatic';
  fuelType?: 'Diesel' | 'Petrol' | 'CNG' | 'Electric';
  ac: boolean;
  luggageCapacity?: number;
  pricePerDay?: number; // Optional: Only shown when verified
  pricePerKm?: number;  // Optional
  imageSrc?: string;    // Path to actual car photograph (e.g. "/car-images/innova-crysta.jpg")
  hasActualPhoto: boolean;
  featured?: boolean;
  description?: string;
  suitableFor?: string;
}

// Real fleet inventory updated with client car assets
export const VEHICLES: Vehicle[] = [
  {
    id: 'veh-1',
    slug: 'toyota-innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'Premium MPV',
    seatingCapacity: 7,
    transmission: 'Manual',
    fuelType: 'Diesel',
    ac: true,
    luggageCapacity: 4,
    hasActualPhoto: true,
    imageSrc: '/car-images/innova-crysta.png',
    featured: true,
    description: 'Spacious and comfortable MPV, ideal for family tours across Jaipur, Jodhpur, and Udaipur.',
    suitableFor: 'Rajasthan sightseeing, outstation trips, family tours'
  },
  {
    id: 'veh-2',
    slug: 'maruti-suzuki-ertiga',
    name: 'Maruti Suzuki Ertiga',
    category: 'MPV',
    seatingCapacity: 6,
    transmission: 'Manual',
    fuelType: 'Diesel',
    ac: true,
    luggageCapacity: 3,
    hasActualPhoto: true,
    imageSrc: '/car-images/ertiga.jpg',
    featured: true,
    description: 'Economical and reliable 6-seater option for inter-city travel and city sightseeing.',
    suitableFor: 'Budget family tours, airport transfers'
  },
  {
    id: 'veh-3',
    slug: 'maruti-dzire',
    name: 'Maruti Suzuki Dzire',
    category: 'Sedan',
    seatingCapacity: 4,
    transmission: 'Manual',
    fuelType: 'Diesel',
    ac: true,
    luggageCapacity: 2,
    hasActualPhoto: true,
    imageSrc: '/car-images/dzire.png',
    featured: true,
    description: 'Comfortable air-conditioned sedan suitable for couples and small families.',
    suitableFor: 'Local city tours, airport and railway station pick & drop'
  },
  {
    id: 'veh-4',
    slug: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    category: 'Luxury SUV',
    seatingCapacity: 7,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    ac: true,
    luggageCapacity: 4,
    hasActualPhoto: true,
    imageSrc: '/car-images/fortuner.png',
    featured: true,
    description: 'High-end luxury SUV providing maximum comfort for desert safaris and VIP travel.',
    suitableFor: 'Desert trails, luxury weddings, royal tours'
  },
  {
    id: 'veh-5',
    slug: 'tempo-traveller-12-seater',
    name: 'Tempo Traveller (12-Seater)',
    category: 'Group Van',
    seatingCapacity: 12,
    transmission: 'Manual',
    fuelType: 'Diesel',
    ac: true,
    luggageCapacity: 8,
    hasActualPhoto: true,
    imageSrc: '/car-images/tempo-traveller.png',
    featured: true,
    description: 'Spacious group coach with push-back seats and dedicated luggage compartment.',
    suitableFor: 'Large group packages, wedding guest transit, corporate trips'
  },
  {
    id: 'veh-6',
    slug: 'force-urbania-luxury',
    name: 'Force Urbania Luxury',
    category: 'Luxury Van',
    seatingCapacity: 13,
    transmission: 'Manual',
    fuelType: 'Diesel',
    ac: true,
    luggageCapacity: 10,
    hasActualPhoto: true,
    imageSrc: '/car-images/urbania.png',
    featured: true,
    description: 'Next-generation luxury traveller with panoramic windows, plush reclining seats and individual AC vents.',
    suitableFor: 'VIP delegates, luxury group tours, destination weddings'
  }
];

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  duration: string;
  destination: string;
  highlights: string[];
  description: string;
  recommendedCar: string;
}

export const RAJASTHAN_PACKAGES: TourPackage[] = [
  {
    id: 'pkg-1',
    slug: 'golden-triangle-jaipur',
    title: 'Jaipur Heritage & Forts Tour',
    duration: '2 Days / 1 Night',
    destination: 'Jaipur, Amer, Nahargarh',
    highlights: ['Amer Fort & Sheesh Mahal', 'Hawa Mahal & City Palace', 'Jantar Mantar', 'Chokhi Dhani Dinner'],
    description: 'Explore the Pink City in comfort with a dedicated chauffeur and AC vehicle.',
    recommendedCar: 'Toyota Innova Crysta / Maruti Dzire'
  },
  {
    id: 'pkg-2',
    slug: 'udaipur-mount-abu',
    title: 'Udaipur Lakes & Mount Abu Hill Tour',
    duration: '4 Days / 3 Nights',
    destination: 'Udaipur & Mount Abu',
    highlights: ['City Palace & Lake Pichola Boat Ride', 'Saheliyon Ki Bari', 'Dilwara Jain Temples', 'Nakki Lake Sunset'],
    description: 'Romantic and scenic journey covering Rajasthan’s city of lakes and hill station.',
    recommendedCar: 'Toyota Innova Crysta / Ertiga'
  },
  {
    id: 'pkg-3',
    slug: 'jodhpur-jaisalmer-desert',
    title: 'Blue City & Jaisalmer Desert Safari',
    duration: '5 Days / 4 Nights',
    destination: 'Jodhpur, Jaisalmer & Sam Sand Dunes',
    highlights: ['Mehrangarh Fort & Umaid Bhawan', 'Jaisalmer Golden Fort', 'Sam Dunes Camel Safari & Camp', 'Traditional Folk Dance'],
    description: 'The ultimate royal desert experience across Thar sand dunes and historical forts.',
    recommendedCar: 'Toyota Fortuner / Innova Crysta'
  }
];
