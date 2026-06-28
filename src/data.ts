import { ServiceItem, Milestone, Testimonial, FAQItem } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "tv-board",
    title: "TV & Board Component Repair",
    category: "tv-board",
    shortDesc: "Expert chip-level repair for LED/LCD Smart TVs, main boards, power boards, and custom circuit boards.",
    fullDesc: "Don't throw away your expensive Smart TV just because of a black screen or a faulty circuit board. We perform advanced board-level micro-soldering, replacing failed transistors, capacitors, diodes, and IC chips to save you thousands compared to buying a replacement panel.",
    iconName: "Tv",
    symptoms: [
      "TV has standby light but won't turn on",
      "Sound is working but screen is completely black (Backlight failure)",
      "Double images, horizontal/vertical lines, or distorted colors",
      "TV constantly restarts or displays logo loop",
      "HDMI ports, USB, or Wi-Fi not working on the main board"
    ],
    features: [
      "Professional Backlight Replacement (using high-quality 100% brand new LED strips)",
      "Main Board Chipset Reballing and IC Reflow",
      "Power Supply Board diagnostic & capacitor restoration",
      "T-Con Board timing controller repair",
      "Free initial diagnostic checkup at our shop"
    ],
    startingPrice: "₱800",
    turnaround: "1 - 3 Days (depending on parts availability)"
  },
  {
    id: "sound-system",
    title: "Professional Sound System Repair",
    category: "sound-system",
    shortDesc: "Tuning, wiring, and repair for amplifiers, active speakers, mixers, home theaters, and professional PA sound systems.",
    fullDesc: "Get that crystal-clear high fidelity sound back. We diagnose and repair audio distortion, dead channels, static noise, and blown components in home theaters, vintage stereo amplifiers, mixing consoles, power amplifiers, and subwoofers.",
    iconName: "Volume2",
    symptoms: [
      "Amplifier turns on but there is no sound output",
      "Loud humming, buzzing, or static noise from speakers",
      "One speaker channel is weaker or completely dead",
      "Active subwoofers not kicking or making pop noises",
      "Mixer faders or knobs scratching and popping during adjustment"
    ],
    features: [
      "Transistor & MOSFET power output stage replacement",
      "Speaker Reconing, voice coil rewinding, and foam ring replacement",
      "Complete audio path capacitor recap for vintage amplifiers",
      "Potentiometer cleaning and fader deoxidizing for mixers",
      "Custom crossover design and audio level calibration"
    ],
    startingPrice: "₱1,200",
    turnaround: "2 - 4 Days"
  },
  {
    id: "videoke-services",
    title: "Professional Videoke Rental & Repair",
    category: "videoke",
    shortDesc: "Heavy-duty Videoke machine rental for events, customized videoke box building, updates, and microphone tuning.",
    fullDesc: "We provide state-of-the-art heavy-duty videoke machines for rent at parties, weddings, and local events. Additionally, we build, upgrade, and repair commercial videoke units, including hard drive updates with the latest songs, amplifier tuning, and microphone feedback elimination.",
    iconName: "Mic",
    symptoms: [
      "Microphone has weak sound, high feedback, or loud squeals",
      "Song list is outdated or the player is freezing/not booting",
      "Coin slot is jammed or not registering credits",
      "Sound is muddy, lacks bass, or vocals are unclear",
      "Remote control or key control buttons are unresponsive"
    ],
    features: [
      "High-power Videoke Machine rentals (equipped with professional wireless mics and subwoofers)",
      "Digital Songbook updates with the latest pop, rock, and OPM hits",
      "Advanced feedback suppressor installation and microphone tuning",
      "Custom-built home Videoke setups with sleek wooden/acrylic cabinets",
      "Coin acceptor replacement and calibration for commercial units"
    ],
    startingPrice: "₱1,500 (Rental) / ₱900 (Repair)",
    turnaround: "1 - 2 Days (Repair) / Hourly-Daily (Rental)"
  }
];

export const OWNER_MILESTONES: Milestone[] = [
  {
    year: "2008",
    title: "The Spark of Passion",
    description: "Renato graduated with a diploma in Electronics Technology. He spent his early career as a lead board-level diagnostic technician in a major electronics manufacturing plant."
  },
  {
    year: "2012",
    title: "Audio Specialization",
    description: "Obtained advanced certifications in acoustics, radio-frequency, and sound wave tuning. Mastered the art of speaker reconing and transistor-level amplifier repair."
  },
  {
    year: "2015",
    title: "Shop Grand Opening",
    description: "Renato established his independent shop in Pasig City, Philippines. Built a stellar reputation for delivering honest, affordable, and highly precise TV and motherboard repairs."
  },
  {
    year: "2020",
    title: "Videoke Mastery Expansion",
    description: "Expanded the business to include professional party videoke rentals and commercial machine assembly. Developed a proprietary voice-tuning preset that makes anyone sound like a professional singer."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Jaime Del Rosario",
    role: "Local Bar Owner",
    location: "Nagpayong, Pasig City",
    comment: "Renato is our go-to guy for all our commercial videoke machines. Whenever we have a sound system issue, he fixes it in no time. Our customers always praise how clear our microphones sound, thanks to his audio tuning!",
    rating: 5,
    avatarSeed: "jaime"
  },
  {
    id: "2",
    name: "Elena Santos-Cruz",
    role: "Homeowner",
    location: "Pinagbuhatan, Pasig City",
    comment: "Another shop told me my 55\" Smart TV was a write-off because of a broken mainboard. Renato took one look, replaced a tiny chip on the board, and had it running like brand new for a fraction of the cost. Highly recommended!",
    rating: 5,
    avatarSeed: "elena"
  },
  {
    id: "3",
    name: "Mark Alcantara",
    role: "Church Coordinator",
    location: "Nagpayong, Pasig City",
    comment: "Our church's main amplifier was producing a horrible loud buzzing noise during services. Renato diagnosed a blown filter capacitor, replaced it, and calibrated our entire soundboard. The difference is night and day!",
    rating: 5,
    avatarSeed: "mark"
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "general",
    question: "Do you guarantee your repair work?",
    answer: "Yes! We stand behind the quality of our component-level repairs. All parts used are genuine, and we test all repaired units thoroughly to ensure long-term reliability and satisfaction."
  },
  {
    category: "general",
    question: "Do you offer home service or pick-up?",
    answer: "Yes, we offer on-site home service for TV diagnostics and videoke rentals in Pasig City and select nearby areas. For complex board repairs, we highly recommend bringing the unit to our workshop, or we can pick it up for a minimal travel fee."
  },
  {
    category: "tv-board",
    question: "How long does a TV diagnostic take?",
    answer: "Initial testing takes about 15-30 minutes if brought to the shop. We will give you an exact price quotation before performing any actual repair. If you decide not to proceed, the basic diagnostic is 100% free."
  },
  {
    category: "videoke",
    question: "What is included in your Videoke rental?",
    answer: "Our standard rental package includes: 1 high-definition heavy-duty Videoke Machine Cabinet with a wide LCD display, 2 professional wireless microphones, a 500W speaker setup with a subwoofer, 2 printed songbooks, and full delivery, installation, and tuning at your location."
  },
  {
    category: "sound-system",
    question: "Can you fix older or vintage amplifiers?",
    answer: "Absolutely! Renato has a deep love for classic analog equipment. We source high-grade audiophile capacitors and original transistors to restore vintage amplifiers (Pioneer, Sansui, Yamaha, etc.) back to their original sound quality."
  }
];
