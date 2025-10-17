type Buildings = {
  [key: string]: Building;
};

export type Building = {
  info: BuildingInfo;
  google_maps: string;
  road_labels: RoadLabelType[];
  building_labels: BuildingLabelType[];
  camera_settings?: CameraSettings;
  no_model?: true;
  info_logo_size: { width: string, height: string }
  popup_logo_size: { width: string, height: string },
  not_invert?: true;
};

type BuildingInfo = {
  brand?: string,
  developer?: string,
  location: string,
  structure: string,
  handover?: string,
  unit_size: string,
  starting_price: string,
  total_units: string,
  payment_plan?:
    {
      post_handover: string,
      non_post_handover: string
    } | string,
  unit_mix: string,
  notable_features: string[]
}

type RoadLabelType = {
  text: string;
  look: 'forward' | 'backward';
  position: [number, number, number];
  rotationZ: number;
  scale?: number;
};

type BuildingLabelType = {
  text: string;
  position: [number, number, number];
  rotationY: number;
  banner_width: number;
  scale?: number;
};

export type CameraSettings = {
  target: [number, number, number],
  position: [number, number, number],
  fov: number,
  maxDistance?: number,
  minDistance?: number,
  far?: number,
}

export const buildings: Buildings = {
  '25h': {
    info: {
      brand: '25hours',
      developer: 'East & West Properties',
      location: 'Downtown Dubai',
      structure: '2B + G + M + 4P + 74 floors',
      handover: 'Q1 2027',
      unit_size: 'Up to 3,000 sqft',
      starting_price: 'AED 2.5 million ($613,000)',
      total_units: '274 apartments',
      payment_plan: '60/40',
      unit_mix: 'Studio, 1, 2 & 3 bedroom apartments & duplex penthouses',
      notable_features: [
        '63rd floor supper club',
        'Rooftop yoga area',
        'Mini golf',
        'Big chess',
        'Padel court',
        'Music room',
        'Indoor cinema',
        '& more!'
      ]
    },
    google_maps: 'https://maps.app.goo.gl/VsZuXyD5jvdQX76m9',
    camera_settings: {
      target: [0, 34, -8],
      position: [10, 34, 25],
      fov: 60,
      maxDistance: 50,
      minDistance: 34,
      far: 500,
    },
    road_labels: [
      {
        text: 'Burj Khalifa Blvd',
        look: 'forward',
        position: [12, -3, 9.8],
        rotationZ: 0.04,
        scale: 2
      },
      {
        text: 'Sheikh Mohammed bin Rashid Blvd',
        look: 'forward',
        position: [-25, -3, -33.5],
        rotationZ: -0.46,
        scale: 1.3
      },
      {
        text: 'Al A\'amal St',
        look: 'forward',
        position: [-21.2, -3, 25],
        rotationZ: Math.PI / 2.4,
        scale: 1.7
      },
      {
        text: 'Marasi Dr',
        look: 'forward',
        position: [20, -3, 39.3],
        rotationZ: 0.4,
        scale: 2
      },
      {
        text: 'Al Mustaqbal St',
        look: 'forward',
        position: [-90, -3, 0],
        rotationZ: Math.PI / 2.1,
        scale: 3.5
      },
    ],
    building_labels: [
      {
        text: 'The Dubai Fountain',
        position: [18, 10, -121],
        rotationY: 0,
        banner_width: 48,
        scale: 0.7
      },
      {
        text: 'Burj Park',
        position: [0, 6, -80],
        rotationY: 0,
        banner_width: 23,
        scale: 0.5
      },
    ],
    info_logo_size: { width: '318px', height: '139px' },
    popup_logo_size: { width: '200px', height: '98px' }
  },
  ayana: {
    info: {
      developer: 'Tuscany Real Estate Development',
      location: 'Meydan Avenue',
      structure: 'G + 4 floors + rooftop',
      handover: 'Q2 2026',
      unit_size: 'Up to 2,980 sqft',
      starting_price: 'AED 831,000',
      total_units: '68 apartments',
      payment_plan: {
        post_handover: '60% during construction, and 40% within 2 years of handover.',
        non_post_handover: '50/50'
      },
      unit_mix: 'Studio, 1 & 2 bedroom apartments & penthouses',
      notable_features: [
        'Swimming pool & sun deck',
        'Indoor play area',
        'Lobby lounge',
        'Indoor gym',
        'Lush landscaping',
        'Yoga area'
      ]
    },
    google_maps: 'https://maps.app.goo.gl/pvvMT6Zcf5G6xDHB8',
    road_labels: [
      {
        text: 'Nad Al Sheba 1',
        look: 'forward',
        position: [2, 0.5, 30], //25.5
        rotationZ: 0.01,
      }
    ],
    building_labels: [],
    camera_settings: {
      target: [0, 0, 0],
      position: [0, 40, 70],
      fov: 60,
    },
    info_logo_size: { width: '174px', height: '150px' },
    popup_logo_size: { width: '118px', height: '115px' },
    not_invert: true,
  },
  azura: {
    info: {
      developer: 'Invest Group Overseas (IGO)',
      location: 'Dubai Islands',
      structure: 'G+ 2 podiums + 14 floors',
      handover: 'June 2026',
      unit_size: 'Up to 6,024 sqft',
      starting_price: 'AED 1.5 million ($408,400)',
      total_units: '148 apartments',
      payment_plan: {
        post_handover: ' 60% during construction, 10% on handover & 30% within 18 months.',
        non_post_handover: ' 60% during construction, 40% upon handover & waived DLD fees.'
      },
      unit_mix: '1, 2 & 3 bedroom apartments & duplex penthouses',
      notable_features: [
        'Rooftop infinity pool',
        'Outdoor yoga deck',
        'Gym',
        'Juice bar',
        'Residence lounge',
        'Coworking space',
      ]
    },
    google_maps: 'https://maps.app.goo.gl/h7NFq2i1YWJn6kzg6',
    road_labels: [],
    building_labels: [],
    camera_settings: {
      target: [0, 17, 0],
      position: [255, 200, 500],
      fov: 60,
    },
    info_logo_size: { width: '250px', height: '140px' },
    popup_logo_size: { width: '140px', height: '75px' },
    not_invert: true,
  },
  hyde: {
    info: {
      brand: 'Hyde',
      developer: 'City View Developments',
      location: 'Dubai Hills Estate',
      structure: 'G + 24 floors',
      handover: 'Q4 2026',
      unit_size: 'Up to 2,798 sqft',
      starting_price: 'AED 1.8 million ($490,000)',
      total_units: '246 apartments',
      payment_plan: '50/50',
      unit_mix: '1, 2 & 3 bedroom apartments & 3 bedroom duplex',
      notable_features: [
        'Signature pool',
        'Indoor & outdoor wellness spaces',
        'Padel & pickleball court',
        'Summer house',
        'Listening room',
        'Indoor cinema',
        'Library, & more!'
      ]
    },
    google_maps: 'https://maps.app.goo.gl/6ZNNXLqKFRopSq327',
    camera_settings: {
      target: [0, 15, 0],
      position: [0, 0, 0],
      fov: 65,
      maxDistance: 55,
      minDistance: 35,
    },
    road_labels: [],
    building_labels: [
      {
        text: 'Dubai Hills Central Park',
        position: [25, 9, -60],
        rotationY: 0,
        banner_width: 58,
        scale: 0.4
      },
      {
        text: 'Dubai Hills Mall',
        position: [-1, 27, 85],
        rotationY: 0,
        banner_width: 43,
        scale: 0.8
      },
    ],
    info_logo_size: { width: '234px', height: '168px' },
    popup_logo_size: { width: '150px', height: '110px' },
    not_invert: true,
  },
  rise: {
    info: {
      developer: 'S&S Developments',
      location: 'Jumeirah Village Circle',
      structure: 'G + 4 podiums + 11 floors + roof',
      handover: 'Q4 2025',
      unit_size: 'Up to 1,380 sqft',
      starting_price: 'SOLD OUT',
      total_units: '173 apartments',
      unit_mix: 'Studio, 1 & 2 bedroom apartments',
      notable_features: [
        'Elevated gardens',
        'Padel tennis',
        'Rooftop gym',
        'Swimming pool',
        'BBQ zone',
      ]
    },
    google_maps: 'https://maps.app.goo.gl/JPtzp3tWVveDw9TSA',
    road_labels: [],
    building_labels: [],
    no_model: true,
    info_logo_size: { width: '215px', height: '170px' },
    popup_logo_size: { width: '150px', height: '115px' }
  },
  roma: {
    info: {
      developer: 'JRP Real-Estate Development',
      location: 'Jumeirah Village Circle',
      structure: 'B + G + 5 floors',
      handover: 'Q1 2026',
      unit_size: 'Up to 1,364 sqft',
      starting_price: 'AED 800,000 ($218,000)',
      total_units: '80 apartments',
      payment_plan: '50/50',
      unit_mix: 'Studio, 1 & 2 bedroom apartments',
      notable_features: [
        'Indoor & outdoor gym',
        'Adult swimming pool',
        'Kids pool & play area',
        'BBQ area',
        'Yoga area',
        'EV charging station',
      ]
    },
    google_maps: 'https://maps.app.goo.gl/jy8FxHSotfozAimD6',
    road_labels: [
      {
        text: 'Jumeirah Village Circle',
        look: 'forward',
        position: [25, 1, 42],
        rotationZ: 0.01,
      },
      {
        text: 'Mu\'allaqat Blvd',
        look: 'forward',
        position: [65, 1, -93],
        rotationZ: 0.05,
      },
    ],
    building_labels: [
      {
        text: 'Mall',
        position: [350, 42, 15],
        rotationY: Math.PI / 2,
        banner_width: 17,
      },
    ],
    camera_settings: {
      target: [0, 0, -20],
      position: [75, 25, 65],
      fov: 50,
    },
    info_logo_size: { width: '274px', height: '127px' },
    popup_logo_size: { width: '205px', height: '98px' }
  },
  sapphire: {
    info: {
      developer: 'Dar Al Karama Real Estate',
      location: 'Jumeirah Village Circle',
      structure: 'G + 5 podiums + 27 floors',
      handover: '2026',
      unit_size: 'Up to 2,760 sqft',
      starting_price: 'AED 750,000 ($204,000)',
      total_units: '224 apartments',
      payment_plan: '60/40',
      unit_mix: 'Studio, 1, 2 & 3 bedroom apartments & 3 bedroom penthouses',
      notable_features: [
        'Swimming pool',
        'Outdoor yoga area',
        'Business meeting rooms',
        'Gaming space',
        'Kids pool & play area',
        'Day care facility',
        'Gym & fitness centre',
      ]
    },
    google_maps: 'https://maps.app.goo.gl/7FQkLSkhTie3Jt8YA',
    road_labels: [],
    building_labels: [],
    no_model: true,
    info_logo_size: { width: '312px', height: '96px' },
    popup_logo_size: { width: '323px', height: '86px' }
  },
  sls: {
    info: {
      brand: 'SLS',
      developer: 'Roya Lifestyle Developments',
      location: 'Palm Jumeirah',
      structure: 'G + 10 floors',
      handover: 'Q1 2026',
      unit_size: 'Up to 13,962 sqft',
      starting_price: 'AED 8.2 million ($2.23 million)',
      total_units: '113 apartments',
      payment_plan: '60/40',
      unit_mix: '2 & 3 bedroom simplexes, 3 & 4 bedroom duplexes, and 3 & 4 bedroom penthouses',
      notable_features: [
        'Direct & exclusive beach access',
        'Screening & treatment rooms',
        'Boutique-fitness studio',
        'Games area',
        'Personal assistance',
        'Personal stylist',
        'Personal shopper',
      ]
    },
    google_maps: 'https://maps.app.goo.gl/urfA218ebUGqDtZ47',
    road_labels: [
      {
        text: 'Crescent Rd',
        look: 'forward',
        position: [-88, 2.9, 50],
        rotationZ: Math.PI / 1.95,
      },
    ],
    building_labels: [],
    camera_settings: {
      target: [0, 0, 0],
      position: [500, 100, -275],
      fov: 60,
    },
    info_logo_size: { width: '178px', height: '115px' },
    popup_logo_size: { width: '137px', height: '97px' },
    not_invert: true,
  },
  'the-residence': {
    info: {
      developer: 'Mubarak Al Beshara Real Estate Development',
      location: 'Al Khalidiya, Sharjah',
      structure: 'B + G + 18 Floors',
      unit_size: 'Up to 5,256 sqft',
      starting_price: 'AED 410,116',
      total_units: '168 Apartments',
      unit_mix: 'Studio, 1, 2 & 3 bedroom apartments & 4 bedroom penthouses',
      notable_features: [
        'Outdoor Swimming Pool with Sun Deck',
        'Indoor Gym',
        'Lush Green Area',
        'Kids Play Area',
        'Direct & Exclusive Beach Access',
        'Beach Volleyball',
      ]
    },
    camera_settings: {
      target: [0, 20, 0],
      position: [1.5, 0, 1],
      fov: 65,
      maxDistance: 150,
      minDistance: 130,
    },
    google_maps: 'https://maps.app.goo.gl/2jHTzCXhRKKDtxBr5',
    road_labels: [
      {
        text: 'Al Meena St',
        look: 'forward',
        position: [57, 1.1, 35],
        rotationZ: Math.PI / 2.6,
        scale: 4
      },
      {
        text: 'Al Khan St',
        look: 'forward',
        position: [110, 1.1, 200],
        rotationZ: Math.PI / 1.15,
        scale: 5
      },
    ],
    building_labels: [],
    info_logo_size: { width: '318px', height: '139px' },
    popup_logo_size: { width: '200px', height: '98px' }
  },
};
